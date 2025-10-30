'use client';

import { Spade, Heart, Diamond, Club } from 'lucide-react';

const cards = [
  { suit: 'spade', value: 'K', color: 'text-white' },
  { suit: 'heart', value: '3', color: 'text-red-500' },
  { suit: 'spade', value: 'A', color: 'text-white' },
  { suit: 'heart', value: 'J', color: 'text-red-500' },
];

const suitIcons = {
  spade: Spade,
  heart: Heart,
  diamond: Diamond,
  club: Club,
};

export function PokerTable() {
  return (
    <div className="bg-surface rounded-lg p-6 shadow-card border border-white/5">
      <h2 className="text-lg font-semibold text-fg mb-4">Wallet Integration</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 aspect-[2/3] flex flex-col items-center justify-between shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <div className="flex items-center gap-2">
              <span className={`text-3xl font-bold ${card.color}`}>{card.value}</span>
              {(() => {
                const SuitIcon = suitIcons[card.suit as keyof typeof suitIcons];
                return <SuitIcon className={`w-6 h-6 ${card.color}`} />;
              })()}
            </div>
            
            <div className="w-full flex justify-center">
              {(() => {
                const SuitIcon = suitIcons[card.suit as keyof typeof suitIcons];
                return <SuitIcon className={`w-12 h-12 ${card.color} opacity-20`} />;
              })()}
            </div>
            
            <div className="flex items-center gap-2 rotate-180">
              <span className={`text-3xl font-bold ${card.color}`}>{card.value}</span>
              {(() => {
                const SuitIcon = suitIcons[card.suit as keyof typeof suitIcons];
                return <SuitIcon className={`w-6 h-6 ${card.color}`} />;
              })()}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button className="flex-1 bg-accent text-white rounded-lg py-3 px-4 font-medium hover:bg-accent/90 transition-colors duration-200">
          Deal Cards
        </button>
        <button className="flex-1 bg-bg text-fg rounded-lg py-3 px-4 font-medium hover:bg-white/5 transition-colors duration-200 border border-white/10">
          Fold
        </button>
      </div>
    </div>
  );
}
