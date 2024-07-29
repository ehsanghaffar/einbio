import { RateLimitError } from "./errors";
import { getUserIp } from "./get-ip";

const PRUNE_INTERVAL = 60 * 1000; // 1 minute

// Typing for tracker objects
interface Tracker {
  count: number;
  expiresAt: number;
}

// Record of IP or custom keys to Tracker objects
const trackers: Record<string, Tracker> = {};

function pruneTrackers() {
  const now = Date.now();
  Object.keys(trackers).forEach(key => {
    if (trackers[key].expiresAt < now) {
      delete trackers[key];
    }
  });
}

setInterval(pruneTrackers, PRUNE_INTERVAL);

async function rateLimit(key: string, limit = 1, windowMs = 10000) {
  const now = Date.now();
  const tracker: Tracker = trackers[key] ?? { count: 0, expiresAt: now + windowMs };

  if (tracker.expiresAt < now) {
    tracker.count = 0;
    tracker.expiresAt = now + windowMs;
  }

  tracker.count++;
  trackers[key] = tracker;

  if (tracker.count > limit) {
    throw new RateLimitError();
  }
}

export async function rateLimitByIp({
  key = "global",
  limit = 1,
  window = 10000,
}: {
  key?: string;
  limit?: number;
  window?: number;
}) {
  const ip = getUserIp();
  if (!ip) {
    throw new RateLimitError();
  }
  await rateLimit(`${ip}-${key}`, limit, window);
}

export async function rateLimitByKey({
  key = "global",
  limit = 1,
  window = 10000,
}: {
  key?: string;
  limit?: number;
  window?: number;
}) {
  await rateLimit(key, limit, window);
}