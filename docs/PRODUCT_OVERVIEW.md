# VaultOS — Product Overview

**Document status:** Product vision for planning. VaultOS is not described here as a launched product.  
**Last updated:** 2026-11-04  
**Parent brand:** PineryZ

Related context: [BUSINESS_OVERVIEW.md](./BUSINESS_OVERVIEW.md).

---

## 1. Product identity

| Item | Detail |
| --- | --- |
| Product name | VaultOS |
| Relationship to PineryZ | Planned flagship product of the parent company |
| Category | White-label on-chain financial infrastructure |
| Status | Platform under development / product vision |
| Stage | Planning and development preparation |

VaultOS is envisioned as white-label infrastructure that allows businesses to create and manage on-chain financial vaults and related financial products.

It is not a fully operational product. Materials must not claim completed security audits, production deployments, customers, partnerships, or proven usage.

## 2. Product intent

**Vision statement for the product:** Give businesses a configurable way to develop, launch, and manage on-chain financial vaults and related products, without each customer having to assemble that infrastructure alone.

This intent follows PineryZ’s company vision: make on-chain financial infrastructure more accessible, configurable, and easier for businesses to adopt.

What “related financial products” includes beyond vaults has **not been specified**. Treat any product surface other than on-chain financial vaults as an open scope item until it is defined.

## 3. Who it is for

Potential customers under consideration:

| Segment | Relevance as currently understood |
| --- | --- |
| Real-world asset (RWA) platforms | May need vault infrastructure for on-chain representations of assets or related products |
| Digital asset managers | May need infrastructure to create and operate on-chain vaults |
| DeFi companies | May need white-label vault infrastructure rather than a one-off protocol build |
| Fintech companies | May need a path onto on-chain financial products without building the full stack |
| Web3 businesses | May need configurable infrastructure for vault-based products |

These segments are a **target hypothesis**. No design partners or paying customers are recorded.

How each segment would use VaultOS, and which segment is first, has not been decided.

## 4. What the product is intended to help with

The following capabilities are the **intended direction**, not a shipped feature list and not a commitment of scope:

- Creating on-chain financial vaults
- Managing those vaults
- Supporting related financial products that sit on the same infrastructure
- Offering the above as white-label infrastructure so a business can present the product under its own brand

The following are **not defined** and must not be written as product facts:

- Specific vault strategies, asset types, or yield sources
- Custody model
- Permissioning, compliance workflow, and identity requirements
- Admin console, APIs, and integration surfaces
- Deployment model (hosted SaaS, dedicated deployment, or both)
- Supported networks beyond the technical direction below
- Security review or audit status

## 5. Technical direction under consideration

These technologies are **proposals**, not finalized implementation decisions.

| Layer | Proposed direction |
| --- | --- |
| Blockchain | Base, and other EVM-compatible networks |
| Smart contracts | Solidity |
| Vault standard | ERC-4626 |
| Backend | Node.js and TypeScript |
| Database | PostgreSQL |
| Frontend | React and Next.js |
| Wallet integration | viem and wagmi |

ERC-4626 is the Ethereum tokenized-vault standard. Listing it here means it is the standard under consideration for vault share accounting. It does not mean a VaultOS implementation of ERC-4626 exists.

No repository, contract addresses, testnets, or production deployments are part of this overview.

## 6. Commercial model

Commercial packaging is still being explored as part of PineryZ’s B2B infrastructure model. Potential sources, none of which are priced or contracted:

- SaaS subscriptions
- Platform deployment fees
- Enterprise integration services
- Usage-based fees, or fees related to assets under management

Usage-based or assets-under-management fees are a **future plan** and remain subject to legal and regulatory review. Do not publish prices, fee schedules, or revenue claims.

## 7. Claims that are out of bounds

Until the underlying facts exist and are explicitly approved, do not state that VaultOS:

- Is generally available or fully operational
- Has completed a security audit
- Has customers, design partners, or partnerships
- Has verified production deployments
- Has assets under management, transaction volume, or other traction
- Has a fixed technology stack
- Holds any regulatory license or registration

Preferred language: “under development,” “product vision,” or “planned flagship product.”

## 8. Open questions

These items need a decision before they can appear as product facts:

1. Exact product scope beyond creating and managing on-chain vaults
2. First customer segment and the first use case
3. Hosted, dedicated, or hybrid delivery
4. Which EVM networks are in the first release, if Base is the starting network
5. Final confirmation of Solidity, ERC-4626, Node.js, TypeScript, PostgreSQL, React, Next.js, viem, and wagmi
6. Compliance, custody, and permissioning boundaries
7. What “white-label” includes (branding only, full deployment, APIs, or all of these)
8. Legal and regulatory constraints on fees, especially anything tied to assets under management
