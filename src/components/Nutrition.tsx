import React from 'react';
import { GlassCard } from '@/src/components/GlassCard';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';
import { Utensils, Zap, Calculator, Plus, Apple, Beef, Sandwich } from 'lucide-react';

const nutritionTrend = [
  { day: 'Mon', calories: 1900 },
  { day: 'Tue', calories: 2100 },
  { day: 'Wed', calories: 1600 },
  { day: 'Today', calories: 1800 },
  { day: 'Fri', calories: 0 },
  { day: 'Sat', calories: 0 },
  { day: 'Sun', calories: 0 },
];

export const Nutrition: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <header>
        <h2 className="font-headline text-3xl font-bold text-on-surface">Nutrition Hub</h2>
        <p className="text-on-surface-variant">Fueling your ethereal journey through precision data.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Primary Summary Card */}
        <GlassCard className="md:col-span-8 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-4 w-full md:w-auto">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-primary/70 font-bold">Today's Balance</h3>
              <div className="flex items-baseline gap-2">
                <span className="font-headline text-6xl font-extrabold text-on-surface">1800</span>
                <span className="text-xl text-on-surface-variant">/ 2200 kcal</span>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-secondary h-full" style={{ width: '81%' }} />
              </div>
            </div>
            
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-headline font-bold text-secondary">80g</div>
                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Protein</div>
                <div className="text-[10px] text-primary/60 mt-1">Goal: 150g</div>
              </div>
              <div className="text-center border-l border-outline-variant/30 pl-8">
                <div className="text-3xl font-headline font-bold text-tertiary">145g</div>
                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Carbs</div>
                <div className="text-[10px] text-primary/60 mt-1">Goal: 200g</div>
              </div>
              <div className="text-center border-l border-outline-variant/30 pl-8">
                <div className="text-3xl font-headline font-bold text-on-surface">55g</div>
                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Fats</div>
                <div className="text-[10px] text-primary/60 mt-1">Goal: 70g</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center gap-3 p-4 bg-primary/10 rounded-xl border border-primary/20">
            <Zap size={20} className="text-tertiary fill-current" />
            <p className="text-sm font-medium text-primary">
              Insight: <span className="text-on-surface">You are in calorie deficit today (good for weight loss)</span>
            </p>
          </div>
        </GlassCard>

        {/* Net Calories Calculator */}
        <GlassCard className="md:col-span-4 flex flex-col">
          <h3 className="font-headline text-lg font-bold mb-6 flex items-center gap-2">
            <Calculator size={20} className="text-primary" />
            Net Calculator
          </h3>
          <div className="space-y-6 flex-1">
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant">Intake</span>
              <span className="font-headline font-bold text-xl text-primary">+2000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant">Burned</span>
              <span className="font-headline font-bold text-xl text-error">-400</span>
            </div>
            <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-center">
              <span className="font-bold text-on-surface">Net Total</span>
              <div className="text-right">
                <div className="font-headline font-extrabold text-3xl text-tertiary">1600</div>
                <div className="text-[10px] uppercase tracking-tighter text-on-surface-variant">kilocalories</div>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-lg overflow-hidden h-24 relative">
            <img 
              src="https://picsum.photos/seed/food/400/200" 
              alt="Food" 
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent" />
          </div>
        </GlassCard>

        {/* Quick Add Section */}
        <GlassCard className="md:col-span-7">
          <h3 className="font-headline text-lg font-bold mb-6 flex items-center gap-2">
            <Plus size={20} className="text-secondary" />
            Quick Add Food
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: 'Rice meal', icon: Sandwich },
              { label: 'Roti + sabzi', icon: Utensils },
              { label: 'Eggs', icon: Apple },
              { label: 'Chicken', icon: Beef },
              { label: 'Fruits', icon: Apple },
            ].map((item, i) => (
              <button key={i} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group">
                <item.icon size={24} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
            <button className="flex flex-col items-center justify-center gap-1 p-4 rounded-xl border-2 border-dashed border-outline-variant/30 hover:border-primary/50 transition-colors">
              <span className="text-on-surface-variant text-2xl">...</span>
              <span className="text-xs font-medium text-on-surface-variant">More</span>
            </button>
          </div>
        </GlassCard>

        {/* Manual Entry Form */}
        <GlassCard className="md:col-span-5">
          <h3 className="font-headline text-lg font-bold mb-6">Manual Log</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Food Name</label>
              <input 
                className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface transition-all p-2" 
                placeholder="e.g. Avocado Toast" 
                type="text" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Calories (kcal)</label>
                <input 
                  className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface transition-all p-2" 
                  placeholder="0" 
                  type="number" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Protein (g)</label>
                <input 
                  className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface transition-all p-2" 
                  placeholder="0" 
                  type="number" 
                />
              </div>
            </div>
            <button className="w-full py-3 mt-4 bg-surface-container-high border border-outline-variant/30 rounded-xl font-bold text-primary hover:bg-primary hover:text-on-primary transition-all duration-300">
              Log Entry
            </button>
          </form>
        </GlassCard>

        {/* Weekly Calorie Trend */}
        <GlassCard className="md:col-span-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h3 className="font-headline text-xl font-bold text-on-surface">Weekly Calorie Trend</h3>
              <p className="text-sm text-on-surface-variant">Comparison of intake vs target over the last 7 days</p>
            </div>
            <div className="px-4 py-2 bg-secondary/10 rounded-lg border border-secondary/20">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Avg: 1,940 kcal / day</span>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={nutritionTrend}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#c7c4da', fontSize: 12, fontWeight: 'bold' }} 
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(162, 201, 255, 0.05)' }}
                  contentStyle={{ backgroundColor: '#171f33', border: 'none', borderRadius: '8px', color: '#dae2fd' }}
                />
                <Bar dataKey="calories" radius={[6, 6, 0, 0]}>
                  {nutritionTrend.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.day === 'Today' ? '#d2bbff' : '#a2c9ff'} 
                      fillOpacity={entry.calories === 0 ? 0.1 : 1}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};
