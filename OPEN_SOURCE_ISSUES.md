# Open Source Issues To Publish

## 1. Implement Freighter-signed pledge transactions

Labels:
- enhancement
- help wanted
- soroban

Why it matters:
- this is the biggest missing piece between MVP and real Stellar usage

Acceptance criteria:
- contributors sign pledge transactions with Freighter
- UI shows transaction hash and status
- timeline displays signed transaction metadata
- backend can reconcile final pledge state after submission

## 2. Sync campaign activity from Soroban RPC events

Labels:
- backend
- indexer
- good first issue

Acceptance criteria:
- background worker polls or subscribes to contract events
- local SQLite state stays aligned with on-chain campaign actions
- duplicate events are handled safely

## 3. Add filters and sort presets to the dashboard

Labels:
- frontend
- ux
- good first issue

Acceptance criteria:
- filter by asset and status
- sort by deadline, amount raised, and newest
- query params preserve dashboard state
