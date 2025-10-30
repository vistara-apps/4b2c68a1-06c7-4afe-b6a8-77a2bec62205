'use client';

import { Wallet, ArrowUpRight } from 'lucide-react';

export function WalletIntegration() {
  return (
    <div className="bg-surface rounded-lg p-6 shadow-card border border-white/5">
      <h2 className="text-lg font-semibold text-fg mb-4">Wallet Integration</h2>
      
      <div className="space-y-4">
        {/* Balance Display */}
        <div className="bg-bg rounded-lg p-4 border border-white/5">
          <p className="text-xs text-muted mb-1">Your Balance</p>
          <p className="text-3xl font-bold text-fg mb-1">₿503,000</p>
          <p className="text-xs text-green-400">+2.5% today</p>
        </div>

        {/* Wallet Card */}
        <div className="bg-gradient-to-br from-accent to-primary rounded-lg p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <Wallet className="w-8 h-8" />
              <span className="text-sm font-medium">Farcaster</span>
            </div>
            <div className="space-y-2">
              <p className="text-xs opacity-80">Wallet Address</p>
              <p className="font-mono text-sm">0x742d...5e9a</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-accent text-white rounded-lg py-3 px-4 font-medium hover:bg-accent/90 transition-colors duration-200 flex items-center justify-center gap-2">
            <span>Deposit</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="bg-bg text-fg rounded-lg py-3 px-4 font-medium hover:bg-white/5 transition-colors duration-200 border border-white/10">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}
