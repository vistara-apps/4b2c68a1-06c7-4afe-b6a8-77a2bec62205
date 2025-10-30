# Onchain Poker Hub

A fully onchain poker experience built on Base with Farcaster integration.

## Features

- 🎮 Provably fair poker gameplay
- 💰 Gasless transactions with B402 settlement
- 🔐 Farcaster-native identity & reputation
- 📱 Mobile-first responsive design
- 🎨 Coinbase-themed UI

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` from `.env.local.example` and add your OnchainKit API key

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster MiniKit
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Key Integrations

- **OnchainKit**: Wallet connection, identity, transactions
- **MiniKit**: Farcaster user context, notifications, frames
- **Base RPC**: Blockchain interactions
- **B402**: Gasless pot settlement

## Architecture

```
app/
├── components/
│   ├── Providers.tsx       # OnchainKit + React Query
│   ├── PlayerStats.tsx     # Player statistics display
│   ├── WalletIntegration.tsx # Wallet UI
│   ├── PokerTable.tsx      # Game interface
│   └── MiniProtection.tsx  # Analytics chart
├── layout.tsx              # Root layout
├── page.tsx                # Main app page
└── globals.css             # Coinbase theme styles

public/
└── .well-known/
    └── farcaster.json      # Mini App manifest
```

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## License

MIT
