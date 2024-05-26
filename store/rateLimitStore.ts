// Define a rate limit configuration
const RATE_LIMIT = {
  WINDOW_SIZE: 360 * 60 * 1000, // 360 minutes in milliseconds
  MAX_REQUESTS: 5, // Max requests per IP within the window
};

// In-memory storage for rate limiting
const rateLimitStore: Record<string, { requests: number; windowStart: number }> = {};

// Function to check and update rate limit for an IP
export function checkRateLimit(ip: string): boolean {
  if (!ip) {
    return false;
  }
  const currentTime = Date.now();
  const record = rateLimitStore[ip];

  if (!record) {
    // If no record exists for the IP, create one
    rateLimitStore[ip] = { requests: 1, windowStart: currentTime };
    return true;
  }

  if (currentTime - record.windowStart > RATE_LIMIT.WINDOW_SIZE) {
    // If the current request is outside the window, reset the record
    rateLimitStore[ip] = { requests: 1, windowStart: currentTime };
    return true;
  }

  if (record.requests < RATE_LIMIT.MAX_REQUESTS) {
    // If the request count is within limits, increment and allow
    rateLimitStore[ip].requests += 1;
    return true;
  }

  // Request limit exceeded, reject
  return false;
}