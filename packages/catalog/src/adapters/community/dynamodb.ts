import type { CommunityAdapter } from "../../types";

export const dynamodb = {
  author: "jagreehal",
  description:
    "Community DynamoDB state adapter with subscriptions, distributed locking, caching, lists, and queues on a single table.",
  features: {
    persistence: "yes",
    multiInstance: "yes",
    subscriptions: "yes",
    distributedLocking: "yes",
    keyValueCache: "yes",
    lists: "yes",
    queues: "yes",
    automaticReconnect: "no",
    cluster: "no",
    sentinel: "no",
    keyPrefix: "yes",
  },
  group: "community",
  name: "DynamoDB",
  packageName: "chat-state-dynamodb",
  readme:
    "https://github.com/jagreehal/chat-state-dynamodb/tree/09374c97ef4b23bd1830106c187c5c71d4202f52",
  slug: "dynamodb",
  type: "state",
} as const satisfies CommunityAdapter;
