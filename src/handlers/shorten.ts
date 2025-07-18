import { z } from 'zod';
import { TnyDevClient } from '../client.js';

const ShortenUrlSchema = z.object({
  url: z.string().url().describe('The URL to shorten'),
  customSlug: z.string()
    .min(3)
    .max(50)
    .regex(/^[a-zA-Z0-9_-]+$/)
    .optional()
    .describe('Optional custom slug for the short URL (3-50 chars, alphanumeric, hyphens, underscores)'),
  domainId: z.string()
    .optional()
    .describe('Optional domain ID for custom domain usage (required when using customSlug)')
});

export async function handleShortenUrl(params: unknown, client: TnyDevClient): Promise<{ content: Array<{ type: string; text: string }> }> {
  const parsed = ShortenUrlSchema.parse(params);
  
  // Get default domain ID from environment if not provided
  const domainId = parsed.domainId || process.env.TNY_DEV_DEFAULT_DOMAIN_ID;
  
  // Validate that customSlug requires domainId
  if (parsed.customSlug && !domainId) {
    throw new Error('Custom slugs require a domain ID. Please provide domainId parameter or set TNY_DEV_DEFAULT_DOMAIN_ID environment variable.');
  }
  
  try {
    const result = await client.shortenUrl({
      url: parsed.url,
      customSlug: parsed.customSlug,
      domain_id: domainId
    });
    
    const rateLimitInfo = client.getRateLimitInfo();
    
    return {
      content: [
        {
          type: "text",
          text: `Successfully shortened URL:\n\nShort URL: ${result.short_url}\nOriginal URL: ${result.long_url}\nSlug: ${result.slug}${result.custom_domain ? `\nCustom Domain: ${result.custom_domain}` : ''}\nCreated: ${new Date(result.created_at).toLocaleString()}${
            result.qr?.download_url ? `\nQR Code: ${result.qr.download_url}` : ''
          }${
            rateLimitInfo 
              ? `\n\nRate Limit: ${rateLimitInfo.remaining}/${rateLimitInfo.limit} requests remaining (${rateLimitInfo.tier} tier)`
              : ''
          }`
        }
      ]
    };
  } catch (error) {
    throw new Error(`Failed to shorten URL: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export const shortenUrlTool = {
  name: "shorten_url",
  description: "Create a shortened URL using tny.dev. Supports custom domains and slugs for developer tier users.",
  inputSchema: {
    type: "object",
    properties: {
      url: {
        type: "string",
        format: "uri",
        description: "The URL to shorten"
      },
      customSlug: {
        type: "string",
        pattern: "^[a-zA-Z0-9_-]{3,50}$",
        description: "Optional custom slug for the short URL (3-50 chars, alphanumeric, hyphens, underscores)"
      },
      domainId: {
        type: "string",
        description: "Optional domain ID for custom domain usage (required when using customSlug)"
      }
    },
    required: ["url"]
  }
};