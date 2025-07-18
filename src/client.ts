import axios, { AxiosInstance, AxiosError } from 'axios';
import { 
  TnyDevConfig, 
  ShortenRequest, 
  ShortenResponse, 
  AnalyticsResponse, 
  LinksResponse, 
  ApiError,
  RateLimitInfo 
} from './types.js';

export class TnyDevClient {
  private client: AxiosInstance;
  private lastRateLimitInfo?: RateLimitInfo;

  constructor(config: TnyDevConfig) {
    this.client = axios.create({
      baseURL: config.baseUrl || 'https://www.tny.dev/api/v1',
      headers: {
        'X-API-Key': config.apiKey,
        'Content-Type': 'application/json',
      },
    });

    // Intercept responses to capture rate limit info
    this.client.interceptors.response.use(
      (response) => {
        const headers = response.headers as Record<string, string>;
        if (headers['x-ratelimit-limit']) {
          this.lastRateLimitInfo = {
            limit: parseInt(headers['x-ratelimit-limit']),
            remaining: parseInt(headers['x-ratelimit-remaining']),
            reset: headers['x-ratelimit-reset'],
            tier: headers['x-ratelimit-tier'],
          };
        }
        return response;
      },
      (error: AxiosError<ApiError>) => {
        if (error.response?.headers) {
          const headers = error.response.headers as Record<string, string>;
          if (headers['x-ratelimit-limit']) {
            this.lastRateLimitInfo = {
              limit: parseInt(headers['x-ratelimit-limit']),
              remaining: parseInt(headers['x-ratelimit-remaining']),
              reset: headers['x-ratelimit-reset'],
              tier: headers['x-ratelimit-tier'],
            };
          }
        }
        throw error;
      }
    );
  }

  async shortenUrl(request: ShortenRequest): Promise<ShortenResponse> {
    try {
      const response = await this.client.post<ShortenResponse>('/shorten', request);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async getAnalytics(slug: string): Promise<AnalyticsResponse> {
    try {
      const response = await this.client.get<AnalyticsResponse>(`/analytics/${slug}`);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async listLinks(page: number = 1, limit: number = 20): Promise<LinksResponse> {
    try {
      const response = await this.client.get<LinksResponse>('/links', {
        params: { page, limit }
      });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  getRateLimitInfo(): RateLimitInfo | undefined {
    return this.lastRateLimitInfo;
  }

  private handleError(error: unknown): never {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      
      if (axiosError.response?.data) {
        const apiError = axiosError.response.data;
        let errorMessage = apiError.error;
        
        if (apiError.upgrade_required) {
          errorMessage += ` (Upgrade required: ${apiError.upgrade_url || '/plans'})`;
        }
        
        if (axiosError.response.status === 429) {
          errorMessage = `Rate limit exceeded. ${errorMessage}`;
          if (this.lastRateLimitInfo) {
            errorMessage += ` Reset at: ${new Date(this.lastRateLimitInfo.reset).toLocaleString()}`;
          }
        }
        
        throw new Error(errorMessage);
      } else if (axiosError.response) {
        throw new Error(`API error: ${axiosError.response.status} ${axiosError.response.statusText}`);
      } else if (axiosError.request) {
        throw new Error('No response from API server');
      }
    }
    
    throw new Error('Unknown error occurred');
  }
}