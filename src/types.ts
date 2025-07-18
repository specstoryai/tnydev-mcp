// Types for tny.dev MCP server

export interface TnyDevConfig {
  apiKey: string;
  baseUrl?: string;
}

export interface ShortenRequest {
  url: string;
  customSlug?: string;
  domain_id?: string;
}

export interface ShortenResponse {
  short_url: string;
  slug: string;
  long_url: string;
  created_at: string;
  qr?: {
    svg: string;
    download_url: string;
  };
  custom_domain?: string;
  domain_id?: string;
}

export interface AnalyticsResponse {
  link: {
    id: string;
    long_url: string;
    created_at: string;
  };
  analytics: {
    total_clicks: number;
    event_types: {
      click: number;
      preview: number;
      qr_scan: number;
      email: number;
      bot: number;
    };
    actual_clicks: number;
    previews: number;
    qr_scans: number;
    email_clicks: number;
    bot_visits: number;
    devices: Record<string, number>;
    countries: Record<string, number>;
    referrers: Record<string, number>;
    hourly_clicks: Record<string, number>;
    recent_clicks: Array<{
      id: string;
      created_at: string;
      event_type: string;
      device_type?: string;
      country?: string;
      city?: string;
    }>;
    utm: {
      sources: Record<string, number>;
      mediums: Record<string, number>;
      campaigns: Record<string, number>;
      total: number;
    };
    time_heatmap: {
      data: Array<{ day: number; hour: number; count: number }>;
      dayNames: string[];
    };
    geo_locations: Array<{
      country: string;
      city: string;
      count: number;
    }>;
  };
}

export interface Link {
  id: string;
  short_url: string;
  long_url: string;
  created_at: string;
  click_count: number;
}

export interface LinksResponse {
  links: Link[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    total_pages: number;
  };
}

export interface ApiError {
  error: string;
  code?: string;
  upgrade_url?: string;
  upgrade_required?: boolean;
}

export interface RateLimitInfo {
  limit: number;
  remaining: number;
  reset: string;
  tier: string;
}