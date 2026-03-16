# Campaign Lifecycle Notes

Stellar Goal Vault tracks four campaign lifecycle events in the MVP:

- `created`
- `pledged`
- `claimed`
- `refunded`

## Backend event storage

Events are stored in SQLite table `campaign_events`.

Each event includes:
- campaign id
- event type
- timestamp
- actor
- amount
- metadata JSON

## Frontend usage

The frontend loads `GET /api/campaigns/:id/history` whenever a campaign is selected.

This drives the timeline panel so contributors can inspect:
- who created the campaign
- when pledges were added
- when a creator claimed funds
- when a contributor was refunded

## Intended on-chain follow-up

The MVP stores events locally today.

The next major contribution should replace or augment this with Soroban RPC event indexing so that:
- local history stays consistent with on-chain activity
- tx hashes and ledger numbers can be displayed
- claim and refund actions can be audited by contributors
