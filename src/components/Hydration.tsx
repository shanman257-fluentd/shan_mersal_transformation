import React, { useState } from 'react';
import { GlassCard } from '@/src/components/GlassCard';
import { Droplets, Coffee, History, Zap, Plus } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Hydration: React.FC = () => {
  const [current, setCurrent] = useState(1500);
  const goal = 3500;
  const percentage = (current / goal) * 100;

  const logs = [
    { id: '1', type: 'Glass of Water', amount: 250, time: '08:15 AM', icon: Droplets },
    { id: '2', type: 'Morning Coffee', amount: 250, time: '09:45 AM', icon: Coffee },
    { id: '3', type: 'Sports Bottle', amount: 1000, time: '11:30 AM', icon: Droplets },
  ];

  const addWater = (amount: number) => {
    setCurrent(prev => Math.min(prev + amount, goal));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <header>
        <h1 className="font-headline text-4xl font-extrabold text-on-surface mb-2">Hydration Tracker</h1>
        <p className="text-on-surface-variant flex items-center gap-2">
          <Zap size={16} className="text-tertiary fill-current" />
          You are {((goal - current) / 1000).toFixed(1)}L away from today's goal
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Progress Section */}
        <GlassCard className="lg:col-span-7 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          
          {/* Progress Circle */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-primary/20 p-2 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(162,201,255,0.1)]">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-surface-container-low border border-outline-variant/30">
              {/* Liquid Fill */}
              <div 
                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary-container to-primary/40 transition-all duration-1000 ease-in-out" 
                style={{ height: `${percentage}%` }}
              >
                <div className="absolute -top-4 left-0 w-[200%] h-8 bg-primary/20 blur-xl opacity-50 animate-pulse" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <span className="font-headline text-6xl font-extrabold text-on-surface">
                  {(current / 1000).toFixed(1)}<span className="text-3xl font-medium text-on-surface-variant">L</span>
                </span>
                <span className="text-on-surface-variant font-medium text-sm tracking-widest uppercase mt-1">Daily Progress</span>
              </div>
            </div>
          </div>

          <div className="flex gap-10 text-center">
            <div>
              <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mb-1">Current</p>
              <p className="text-2xl font-headline font-bold text-primary">{current.toLocaleString()} ml</p>
            </div>
            <div className="w-[1px] h-10 bg-outline-variant/30" />
            <div>
              <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mb-1">Daily Goal</p>
              <p className="text-2xl font-headline font-bold text-on-surface">{goal.toLocaleString()} ml</p>
            </div>
          </div>

          {/* Quick Add Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[250, 500].map(amount => (
              <button 
                key={amount}
                onClick={() => addWater(amount)}
                className="px-6 py-3 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface hover:bg-primary/20 hover:border-primary transition-all active:scale-95 flex items-center gap-2"
              >
                <Plus size={14} /> {amount}ml
              </button>
            ))}
            <button 
              onClick={() => addWater(1000)}
              className="px-6 py-3 rounded-full bg-primary text-on-primary font-bold hover:shadow-[0_0_20px_rgba(162,201,255,0.4)] transition-all active:scale-95 flex items-center gap-2"
            >
              <Plus size={14} /> 1L
            </button>
          </div>
        </GlassCard>

        {/* Side Stats & History */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <GlassCard className="p-6 border-l-4 border-tertiary">
              <div className="flex items-center justify-between mb-4">
                <History size={20} className="text-tertiary" />
                <span className="text-[10px] bg-tertiary/10 text-tertiary px-2 py-0.5 rounded-full uppercase font-bold">Streak</span>
              </div>
              <p className="text-3xl font-headline font-bold">12 Days</p>
              <p className="text-on-surface-variant text-xs mt-1">Goal consistency</p>
            </GlassCard>
            <GlassCard className="p-6 border-l-4 border-secondary">
              <div className="flex items-center justify-between mb-4">
                <Droplets size={20} className="text-secondary" />
                <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded-full uppercase font-bold">Average</span>
              </div>
              <p className="text-3xl font-headline font-bold">2.8L</p>
              <p className="text-on-surface-variant text-xs mt-1">Weekly intake</p>
            </GlassCard>
          </div>

          <GlassCard className="flex-1">
            <h3 className="font-headline text-xl font-bold mb-6 flex items-center justify-between">
              Today's Log
              <History size={16} className="text-on-surface-variant cursor-pointer hover:text-white transition-colors" />
            </h3>
            <div className="space-y-4">
              {logs.map(log => (
                <div key={log.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <log.icon size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{log.type}</p>
                      <p className="text-xs text-on-surface-variant">{log.time}</p>
                    </div>
                  </div>
                  <span className="font-headline font-bold">+{log.amount}ml</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 border border-outline-variant/30 rounded-xl text-on-surface-variant text-sm font-medium hover:bg-white/5 transition-all">
              View Full History
            </button>
          </GlassCard>

          <div className="relative rounded-3xl overflow-hidden min-h-[140px] flex items-center px-8">
            <img 
              src="https://picsum.photos/seed/water/600/300" 
              alt="Water" 
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="relative z-10">
              <h4 className="font-headline text-lg font-bold text-primary mb-1">Daily Tip</h4>
              <p className="text-sm text-on-surface leading-relaxed max-w-[240px]">
                Drinking water before meals can increase satiety and boost metabolism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
