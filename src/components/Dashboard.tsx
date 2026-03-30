import React, { useState } from 'react';
import { GlassCard } from '@/src/components/GlassCard';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Area, AreaChart } from 'recharts';
import { Droplets, Zap, Moon, Heart, Plus, Scale, TrendingDown, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const initialWeightData = [
  { date: '2026-03-02', weight: 115.2 },
  { date: '2026-03-09', weight: 113.8 },
  { date: '2026-03-16', weight: 112.5 },
  { date: '2026-03-23', weight: 111.0 },
  { date: '2026-03-30', weight: 110.0 },
];

export const Dashboard: React.FC = () => {
  const [weightLogs, setWeightLogs] = useState(initialWeightData);
  const [isLoggingWeight, setIsLoggingWeight] = useState(false);
  const [newWeight, setNewWeight] = useState('');
  const [logDate, setLogDate] = useState(new Date().toISOString().split('T')[0]);

  const currentWeight = weightLogs[weightLogs.length - 1].weight;
  const startWeight = weightLogs[0].weight;
  const totalLost = (startWeight - currentWeight).toFixed(1);

  const handleLogWeight = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWeight || isNaN(parseFloat(newWeight))) return;

    const newLog = {
      date: logDate,
      weight: parseFloat(newWeight),
    };

    // Sort logs by date after adding
    const updatedLogs = [...weightLogs, newLog].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    setWeightLogs(updatedLogs);
    setIsLoggingWeight(false);
    setNewWeight('');
  };

  return (
    <div className="space-y-10 pb-20">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <GlassCard className="lg:col-span-8 min-h-[320px] flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-20 -mt-20" />
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-gradient tracking-tight">
                Transform Your <br />Health Journey
              </h1>
              <button 
                onClick={() => setIsLoggingWeight(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-primary text-on-primary rounded-xl font-bold shadow-lg hover:scale-105 transition-transform active:scale-95"
              >
                <Plus size={20} />
                <span>Log Weight</span>
              </button>
            </div>
            <p className="text-on-surface-variant text-lg max-w-xl mb-8">
              You've lost <span className="text-primary font-bold">{totalLost}kg</span> since you started. 
              The ethereal state of balance is within reach.
            </p>
            <div className="flex flex-wrap gap-12">
              <div className="flex flex-col">
                <span className="text-xs text-on-surface-variant font-medium tracking-widest uppercase">Current Weight</span>
                <span className="font-headline text-4xl font-extrabold text-primary tracking-tighter">
                  {currentWeight.toFixed(1)} <span className="text-lg font-normal">kg</span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-on-surface-variant font-medium tracking-widest uppercase">Target Weight</span>
                <span className="font-headline text-4xl font-extrabold text-secondary tracking-tighter">
                  72-75 <span className="text-lg font-normal">kg</span>
                </span>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="lg:col-span-4 border-l-4 border-tertiary flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_10px_rgba(255,183,125,0.5)]" />
              <span className="text-sm font-bold text-tertiary tracking-widest uppercase">Live Insight</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">Calorie Status</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Based on your activity today, you are currently in a <span className="text-tertiary font-bold">calorie deficit</span>. Excellent work!
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm font-medium text-on-surface-variant">Daily Balance</div>
            <div className="text-xl font-bold text-primary">-450 kcal</div>
          </div>
        </GlassCard>
      </section>

      {/* Weight Trend Section - More Prominent */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <GlassCard className="lg:col-span-12" glow="primary">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h3 className="font-headline text-2xl font-bold flex items-center space-x-3">
                <Scale className="text-primary" />
                <span>Weight Evolution</span>
              </h3>
              <p className="text-sm text-on-surface-variant mt-1">Tracking your weekly progress towards transcendence.</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Weight (kg)</span>
              </div>
              <div className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-bold flex items-center space-x-1">
                <TrendingDown size={14} />
                <span>-{totalLost}kg Total</span>
              </div>
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weightLogs}>
                <defs>
                  <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#c7c4da', fontSize: 10, fontWeight: 'bold' }}
                  tickFormatter={(str) => {
                    const date = new Date(str);
                    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                  }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#c7c4da', fontSize: 10, fontWeight: 'bold' }}
                  domain={['dataMin - 5', 'dataMax + 5']}
                  orientation="right"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#171f33', 
                    border: '1px solid rgba(162, 201, 255, 0.2)', 
                    borderRadius: '12px', 
                    color: '#dae2fd',
                    backdropFilter: 'blur(10px)'
                  }}
                  labelFormatter={(str) => new Date(str).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                />
                <Area 
                  type="monotone" 
                  dataKey="weight" 
                  stroke="var(--color-primary)" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#weightGradient)"
                  dot={{ r: 6, fill: 'var(--color-primary)', strokeWidth: 2, stroke: '#0b1326' }}
                  activeDot={{ r: 8, strokeWidth: 0, fill: '#fff' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </section>

      {/* BMI & Quick Stats */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard>
            <div className="flex justify-between items-end mb-6">
              <h3 className="font-headline text-xl font-bold">BMI Progress</h3>
              <span className="text-3xl font-extrabold text-primary">
                34.0 <span className="text-sm text-on-surface-variant font-normal">Obese</span>
              </span>
            </div>
            <div className="relative h-4 bg-surface-container-low rounded-full overflow-hidden mb-4">
              <div className="absolute inset-0 flex">
                <div className="h-full w-[40%] bg-emerald-500/20 border-r border-background/50" />
                <div className="h-full w-[15%] bg-yellow-500/20 border-r border-background/50" />
                <div className="h-full w-[15%] bg-orange-500/20 border-r border-background/50" />
                <div className="h-full w-[30%] bg-red-500/20" />
              </div>
              <div className="absolute top-0 bottom-0 left-[78%] w-1.5 bg-primary shadow-[0_0_10px_rgba(162,201,255,1)] z-10" />
            </div>
            <div className="flex justify-between text-[10px] text-on-surface-variant font-bold tracking-widest uppercase">
              <span>Healthy (18-25)</span>
              <span>Current (34)</span>
            </div>
            <p className="mt-6 text-sm text-on-surface-variant italic">
              Next milestone: Reach BMI 30 (Overweight) in 4.2kg.
            </p>
          </GlassCard>

          <section className="grid grid-cols-2 gap-6">
            <GlassCard className="flex flex-col items-center text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                <Droplets size={18} />
              </div>
              <div>
                <div className="text-[8px] text-on-surface-variant font-bold tracking-widest uppercase">Hydration</div>
                <div className="text-lg font-headline font-bold">1.8L</div>
              </div>
              <div className="w-full bg-surface-container-low h-1 rounded-full">
                <div className="bg-secondary h-full rounded-full w-[52%]" />
              </div>
            </GlassCard>

            <GlassCard className="flex flex-col items-center text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <Zap size={18} />
              </div>
              <div>
                <div className="text-[8px] text-on-surface-variant font-bold tracking-widest uppercase">Activity</div>
                <div className="text-lg font-headline font-bold">6,420</div>
              </div>
              <div className="w-full bg-surface-container-low h-1 rounded-full">
                <div className="bg-primary h-full rounded-full w-[64%]" />
              </div>
            </GlassCard>

            <GlassCard className="flex flex-col items-center text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface border border-white/5">
                <Moon size={18} />
              </div>
              <div>
                <div className="text-[8px] text-on-surface-variant font-bold tracking-widest uppercase">Sleep</div>
                <div className="text-lg font-headline font-bold">7h 12m</div>
              </div>
            </GlassCard>

            <GlassCard className="flex flex-col items-center text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-error-container/20 flex items-center justify-center text-error border border-error/20">
                <Heart size={18} fill="currentColor" />
              </div>
              <div>
                <div className="text-[8px] text-on-surface-variant font-bold tracking-widest uppercase">Heart</div>
                <div className="text-lg font-headline font-bold">72 BPM</div>
              </div>
            </GlassCard>
          </section>
        </div>

        <GlassCard className="lg:col-span-4 flex flex-col justify-between p-8 border-t-4 border-primary" glow="primary">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-primary/20 text-primary">
                <Zap size={20} />
              </div>
              <h3 className="font-headline text-xl font-bold">Daily Motivation</h3>
            </div>
            <blockquote className="text-lg font-medium text-on-surface italic leading-relaxed">
              "The only bad workout is the one that didn't happen. Every drop of sweat is a step towards your ethereal self."
            </blockquote>
            <div className="pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Weekly Streak</span>
                <span className="text-primary font-bold">5 Days</span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5, 0, 0].map((active, i) => (
                  <div 
                    key={i} 
                    className={`h-2 flex-1 rounded-full ${active ? 'bg-primary' : 'bg-white/5'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-xs text-on-surface-variant">
              You're in the top <span className="text-primary font-bold">15%</span> of users this week. Keep it up!
            </p>
          </div>
        </GlassCard>
      </section>

      {/* Weight Logging Modal */}
      <AnimatePresence>
        {isLoggingWeight && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoggingWeight(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md"
            >
              <GlassCard className="p-8" glow="primary">
                <h2 className="text-2xl font-headline font-bold mb-6 flex items-center space-x-3">
                  <Scale className="text-primary" />
                  <span>Log Your Weight</span>
                </h2>
                
                <form onSubmit={handleLogWeight} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>Date</span>
                    </label>
                    <input 
                      type="date" 
                      value={logDate}
                      onChange={(e) => setLogDate(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all text-on-surface"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest flex items-center space-x-2">
                      <Scale size={14} />
                      <span>Weight (kg)</span>
                    </label>
                    <input 
                      type="number" 
                      step="0.1"
                      placeholder="00.0"
                      value={newWeight}
                      onChange={(e) => setNewWeight(e.target.value)}
                      autoFocus
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all text-2xl font-headline font-bold text-primary"
                    />
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button 
                      type="button"
                      onClick={() => setIsLoggingWeight(false)}
                      className="flex-1 py-3 rounded-xl border border-white/10 font-bold hover:bg-white/5 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-primary text-on-primary font-bold shadow-lg hover:brightness-110 transition-all"
                    >
                      Save Log
                    </button>
                  </div>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
