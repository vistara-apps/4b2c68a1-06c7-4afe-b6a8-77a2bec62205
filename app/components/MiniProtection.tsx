'use client';

import { TrendingUp } from 'lucide-react';

export function MiniProtection() {
  const data = [
    { value: 20, label: 'Mon' },
    { value: 45, label: 'Tue' },
    { value: 30, label: 'Wed' },
    { value: 60, label: 'Thu' },
    { value: 40, label: 'Fri' },
    { value: 75, label: 'Sat' },
    { value: 55, label: 'Sun' },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 shadow-card border border-purple-500/20">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-fg">Mini Protection</h2>
          <p className="text-xs text-muted">Recommended by Farcaster Teams</p>
        </div>
        <TrendingUp className="w-5 h-5 text-purple-400" />
      </div>

      {/* Chart */}
      <div className="flex items-end justify-between h-32 gap-2 mb-4">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full bg-purple-500/20 rounded-t-lg relative overflow-hidden" style={{ height: `${(item.value / maxValue) * 100}%` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500 to-pink-500 opacity-60"></div>
              {index === 5 && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-2 border-surface"></div>
              )}
            </div>
            <span className="text-xs text-muted">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="bg-surface/50 rounded-lg p-3 backdrop-blur-sm">
        <p className="text-xs text-muted mb-1">Weekly Performance</p>
        <p className="text-lg font-bold text-fg">+24.5%</p>
      </div>
    </div>
  );
}
