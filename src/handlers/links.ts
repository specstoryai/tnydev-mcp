import { z } from 'zod';
import { TnyDevClient } from '../client.js';

const ListLinksSchema = z.object({
  page: z.number()
    .int()
    .positive()
    .optional()
    .default(1)
    .describe('Page number (default: 1)'),
  limit: z.number()
    .int()
    .min(1)
    .max(100)
    .optional()
    .default(20)
    .describe('Number of links per page (1-100, default: 20)')
});

export async function handleListLinks(params: unknown, client: TnyDevClient): Promise<{ content: Array<{ type: string; text: string }> }> {
  const parsed = ListLinksSchema.parse(params);
  
  try {
    const result = await client.listLinks(parsed.page, parsed.limit);
    const rateLimitInfo = client.getRateLimitInfo();
    
    // Format the links list
    let linksText = `📋 **Your Shortened Links** (Page ${result.pagination.page}/${result.pagination.total_pages}):\n\n`;
    
    if (result.links.length === 0) {
      linksText += 'No links found.';
    } else {
      result.links.forEach((link, index) => {
        const num = (parsed.page - 1) * parsed.limit + index + 1;
        linksText += `**${num}. ${link.short_url}**\n`;
        linksText += `   → ${link.long_url}\n`;
        linksText += `   📊 Clicks: ${link.click_count} | 📅 Created: ${new Date(link.created_at).toLocaleDateString()}\n`;
        linksText += `   🔗 Slug: \`${link.id}\`\n\n`;
      });
    }
    
    // Add pagination info
    linksText += `\n📄 **Pagination**:\n`;
    linksText += `- Total links: ${result.pagination.total}\n`;
    linksText += `- Page ${result.pagination.page} of ${result.pagination.total_pages}\n`;
    linksText += `- Showing ${result.links.length} links`;
    
    if (result.pagination.page < result.pagination.total_pages) {
      linksText += `\n- To see next page, use: page: ${result.pagination.page + 1}`;
    }
    
    if (rateLimitInfo) {
      linksText += `\n\n⚡ Rate Limit: ${rateLimitInfo.remaining}/${rateLimitInfo.limit} requests remaining (${rateLimitInfo.tier} tier)`;
    }
    
    return {
      content: [
        {
          type: "text",
          text: linksText
        }
      ]
    };
  } catch (error) {
    throw new Error(`Failed to list links: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export const listLinksTool = {
  name: "list_links",
  description: "List all shortened links created with your API key",
  inputSchema: {
    type: "object",
    properties: {
      page: {
        type: "number",
        minimum: 1,
        description: "Page number (default: 1)"
      },
      limit: {
        type: "number",
        minimum: 1,
        maximum: 100,
        description: "Number of links per page (1-100, default: 20)"
      }
    }
  }
};