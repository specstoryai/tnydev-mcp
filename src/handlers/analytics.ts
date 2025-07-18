import { z } from 'zod';
import { TnyDevClient } from '../client.js';

const GetAnalyticsSchema = z.object({
  slug: z.string().describe('The slug of the shortened URL to get analytics for')
});

export async function handleGetAnalytics(params: unknown, client: TnyDevClient): Promise<{ content: Array<{ type: string; text: string }> }> {
  const parsed = GetAnalyticsSchema.parse(params);
  
  try {
    const result = await client.getAnalytics(parsed.slug);
    const rateLimitInfo = client.getRateLimitInfo();
    
    // Format analytics for display
    const analytics = result.analytics;
    const link = result.link;
    
    const analyticsText = `Analytics for ${link.long_url}:

📊 **Total Clicks**: ${analytics.total_clicks}
- Actual clicks: ${analytics.actual_clicks}
- Previews: ${analytics.previews}
- QR scans: ${analytics.qr_scans}
- Email clicks: ${analytics.email_clicks}
- Bot visits: ${analytics.bot_visits}

📱 **Devices**:
${Object.entries(analytics.devices).map(([device, count]) => `- ${device}: ${count}`).join('\n')}

🌍 **Top Countries**:
${Object.entries(analytics.countries).slice(0, 5).map(([country, count]) => `- ${country}: ${count}`).join('\n')}

🔗 **Top Referrers**:
${Object.entries(analytics.referrers).slice(0, 5).map(([referrer, count]) => `- ${referrer}: ${count}`).join('\n')}

${analytics.utm.total > 0 ? `
📈 **UTM Parameters**:
- Sources: ${Object.keys(analytics.utm.sources).join(', ')}
- Mediums: ${Object.keys(analytics.utm.mediums).join(', ')}
- Campaigns: ${Object.keys(analytics.utm.campaigns).join(', ')}
- Total UTM clicks: ${analytics.utm.total}
` : ''}

🔗 **Short URL**: https://www.tny.dev/${parsed.slug}
📅 **Created**: ${new Date(link.created_at).toLocaleString()}${
      rateLimitInfo 
        ? `\n\n⚡ Rate Limit: ${rateLimitInfo.remaining}/${rateLimitInfo.limit} requests remaining (${rateLimitInfo.tier} tier)`
        : ''
    }`;
    
    return {
      content: [
        {
          type: "text",
          text: analyticsText
        }
      ]
    };
  } catch (error) {
    throw new Error(`Failed to get analytics: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export const getAnalyticsTool = {
  name: "get_link_analytics",
  description: "Get click analytics for a shortened link",
  inputSchema: {
    type: "object",
    properties: {
      slug: {
        type: "string",
        description: "The slug of the shortened URL to get analytics for"
      }
    },
    required: ["slug"]
  }
};