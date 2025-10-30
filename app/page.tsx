'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Home, TrendingUp, Users, Trophy, Settings2, Wallet } from 'lucide-react';
import { PlayerStats } from './components/PlayerStats';
import { WalletIntegration } from './components/WalletIntegration';
import { PokerTable } from './components/PokerTable';
import { MiniProtection } from './components/MiniProtection';

export default function HomePage() {
  const [isReady, setIsReady] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-fg text-lg">Loading Poker Hub...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="bg-surface border-b border-white/10 sticky top-0 z-50 backdrop-blur-lg bg-surface/80">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">Onchain Poker Hub</h1>
                <p className="text-xs text-muted">@onchainpoker.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors duration-200">
                <Settings2 className="w-5 h-5 text-muted" />
              </button>
              <button className="px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats & Wallet */}
          <div className="lg:col-span-2 space-y-6">
            <PlayerStats />
            <PokerTable />
          </div>

          {/* Right Column - Wallet & Protection */}
          <div className="space-y-6">
            <WalletIntegration />
            <MiniProtection />
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-white/10 backdrop-blur-lg bg-surface/80 lg:hidden">
        <div className="flex items-center justify-around py-3">
          {[
            { id: 'home', icon: Home, label: 'Home' },
            { id: 'tables', icon: Users, label: 'Tables' },
            { id: 'stats', icon: TrendingUp, label: 'Stats' },
            { id: 'wallet', icon: Wallet, label: 'Wallet' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors duration-200 ${
                activeTab === item.id
                  ? 'text-accent'
                  : 'text-muted hover:text-fg'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Sidebar Navigation (Desktop) */}
      <aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-20 bg-surface border-r border-white/10 pt-24">
        <nav className="flex flex-col items-center gap-4 px-4">
          {[
            { id: 'home', icon: Home },
            { id: 'trending', icon: TrendingUp },
            { id: 'users', icon: Users },
            { id: 'trophy', icon: Trophy },
            { id: 'wallet', icon: Wallet },
          ].map((item) => (
            <button
              key={item.id}
              className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-white/5 text-muted hover:text-accent transition-all duration-200"
            >
              <item.icon className="w-6 h-6" />
            </button>
          ))}
        </nav>
      </aside>
    </div>
  );
}
