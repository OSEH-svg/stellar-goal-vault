import { getDb } from "./db";

export type CampaignEventType = "created" | "pledged" | "claimed" | "refunded";

export interface CampaignEvent {
  id: number;
  campaignId: string;
  eventType: CampaignEventType;
  timestamp: number;
  actor?: string;
  amount?: number;
  metadata?: Record<string, unknown>;
}

interface EventRow {
  id: number;
  campaign_id: string;
  event_type: string;
  timestamp: number;
  actor: string | null;
  amount: number | null;
  metadata: string | null;
}

function rowToEvent(row: EventRow): CampaignEvent {
  return {
    id: row.id,
    campaignId: row.campaign_id,
    eventType: row.event_type as CampaignEventType,
    timestamp: row.timestamp,
    actor: row.actor ?? undefined,
    amount: row.amount ?? undefined,
    metadata: row.metadata ? (JSON.parse(row.metadata) as Record<string, unknown>) : undefined,
  };
}

export function recordEvent(
  campaignId: string,
  eventType: CampaignEventType,
  timestamp: number,
  actor?: string,
  amount?: number,
  metadata?: Record<string, unknown>,
): void {
  const db = getDb();
  db.prepare(
    `INSERT INTO campaign_events (campaign_id, event_type, timestamp, actor, amount, metadata)
     VALUES (@campaignId, @eventType, @timestamp, @actor, @amount, @metadata)`,
  ).run({
    campaignId,
    eventType,
    timestamp,
    actor: actor ?? null,
    amount: amount ?? null,
    metadata: metadata ? JSON.stringify(metadata) : null,
  });
}

export function getCampaignHistory(campaignId: string): CampaignEvent[] {
  const db = getDb();
  const rows = db
    .prepare(
      `SELECT * FROM campaign_events WHERE campaign_id = ? ORDER BY timestamp ASC, id ASC`,
    )
    .all(campaignId) as EventRow[];

  return rows.map(rowToEvent);
}
