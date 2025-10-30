'use client';

import { TrendingUp, Trophy } from 'lucide-react';

export function PlayerStats() {
  return (
    <div className="bg-surface rounded-lg p-6 shadow-card border border-white/5">
      <h2 className="text-lg font-semibold text-fg mb-4">Player Stats</h2>
      
      <div className="flex items-center gap-6">
        {/* Avatar */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary p-1">
            <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
              <Trophy className="w-10 h-10 text-accent" />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-surface"></div>
        </div>

        {/* Stats Grid */}
        <div className="flex-1 grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-muted mb-1">FarcasterName</p>
            <p className="text-2xl font-bold text-fg">9,869<span className="text-sm text-muted">%</span></p>
            <p className="text-xs text-green-400 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +12% this week
            </p>
          </div>
          
          <div>
            <p className="text-xs text-muted mb-1">Games Won</p>
            <p className="text-2xl font-bold text-fg">41,841</p>
            <p className="text-xs text-muted">Total games</p>
          </div>
          
          <div>
            <p className="text-xs text-muted mb-1">Rank</p>
            <p className="text-2xl font-bold text-fg">170<span className="text-sm text-muted">th</span></p>
            <p className="text-xs text-muted">Global</p>
          </div>
        </div>
      </div>
    </div>
  );
}
