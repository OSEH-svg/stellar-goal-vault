# Summary

Adds a new Stellar project named `stellar-goal-vault`.

This repo is a crowdfunding-style MVP with:
- React frontend
- Express backend
- Soroban contract scaffold
- Seeded open-source backlog items

# Main features

- Create funding campaigns with deadline and target amount
- Add pledges from contributors
- Claim funded campaigns after deadline
- Refund contributors on failed campaigns
- Display campaign event history
- Surface ready-to-open contribution issues in the UI

# Why this project is useful

It is clearly different from streaming or bounty board ideas, but still fits the Stellar + Soroban open-source portfolio:
- easy to demo
- easy to understand
- easy to extend with wallet signing

# Suggested follow-up issue

`Implement Freighter-signed pledge transactions`

Acceptance criteria:
- contributors sign real Soroban pledge transactions
- tx hashes show in the campaign timeline
- frontend handles simulation and signing errors cleanly
- backend can reconcile on-chain pledge events into SQLite
