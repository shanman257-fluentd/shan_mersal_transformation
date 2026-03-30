import React, { useState } from 'react';
import { GlassCard } from '@/src/components/GlassCard';
import { Edit3, Save, Zap } from 'lucide-react';

export const Profile: React.FC = () => {
  const [duration, setDuration] = useState(6);

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <header>
        <h1 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight mb-2">Personal Mastery</h1>
        <p className="text-on-surface-variant max-w-lg">
          Refine your physical parameters. AetherPulse adjusts its neural recommendations based on your evolving biometrics.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-7 space-y-8">
          <GlassCard className="space-y-8">
            <h2 className="text-xl font-headline font-bold text-primary flex items-center gap-2">
              <Edit3 size={20} className="text-tertiary" />
              Biometric Profile
            </h2>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Height (cm)</label>
                <input 
                  className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface p-3 transition-all outline-none rounded-t-lg" 
                  defaultValue="170" 
                  type="number" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Current Weight (kg)</label>
                <input 
                  className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface p-3 transition-all outline-none rounded-t-lg" 
                  defaultValue="110" 
                  type="number" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Target Weight (kg)</label>
                <input 
                  className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface p-3 transition-all outline-none rounded-t-lg" 
                  defaultValue="86" 
                  type="number" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Target BMI</label>
                <input 
                  className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface p-3 transition-all outline-none rounded-t-lg" 
                  defaultValue="30" 
                  type="number" 
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Goal Duration (Months)</label>
                <div className="flex items-center gap-4">
                  <input 
                    className="flex-1 accent-tertiary h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer" 
                    max="12" min="1" 
                    type="range" 
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                  />
                  <span className="text-xl font-headline font-bold text-tertiary w-12 text-center">{duration}</span>
                </div>
              </div>
              
              <div className="md:col-span-2 pt-6">
                <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold rounded-xl shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                  <Save size={20} />
                  Save Profile
                </button>
              </div>
            </form>
          </GlassCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <GlassCard className="p-6 flex flex-col items-center text-center">
              <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-tighter mb-2">Age</span>
              <span className="text-2xl font-headline font-extrabold text-primary">32</span>
            </GlassCard>
            <GlassCard className="p-6 flex flex-col items-center text-center">
              <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-tighter mb-2">Activity Level</span>
              <span className="text-2xl font-headline font-extrabold text-primary">Moderate</span>
            </GlassCard>
            <GlassCard className="p-6 flex flex-col items-center text-center border-l-2 border-tertiary">
              <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-tighter mb-2">Next Milestone</span>
              <span className="text-2xl font-headline font-extrabold text-tertiary">105 kg</span>
            </GlassCard>
          </div>
        </section>

        <section className="lg:col-span-5 space-y-6">
          <GlassCard className="overflow-hidden relative group p-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
            <img 
              src="https://picsum.photos/seed/gym/800/400" 
              alt="Gym" 
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-6 z-20">
              <h3 className="text-xl font-headline font-bold text-white">Visual Comparison</h3>
              <p className="text-sm text-primary">Ethereal projection of your journey</p>
            </div>
          </GlassCard>

          <GlassCard className="space-y-8">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Current</span>
                <div className="text-4xl font-headline font-extrabold text-on-surface">110 <span className="text-lg font-medium text-on-surface-variant">kg</span></div>
              </div>
              <div className="text-right space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Target</span>
                <div className="text-4xl font-headline font-extrabold text-primary">86 <span className="text-lg font-medium text-primary/60">kg</span></div>
              </div>
            </div>
            
            <div className="relative h-24 flex items-center justify-center">
              <div className="absolute w-full h-1 bg-surface-container-highest rounded-full" />
              <div className="absolute left-0 h-1 bg-gradient-to-r from-tertiary to-primary rounded-full shadow-[0_0_15px_rgba(255,183,125,0.4)]" style={{ width: '45%' }} />
              
              <div className="absolute left-0 -translate-y-8 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-tertiary shadow-[0_0_10px_rgba(255,183,125,1)]" />
                <span className="text-[10px] mt-1 text-tertiary font-bold">START</span>
              </div>
              <div className="absolute right-0 -translate-y-8 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(162,201,255,1)]" />
                <span className="text-[10px] mt-1 text-primary font-bold">GOAL</span>
              </div>
              <div className="absolute left-[45%] translate-y-8 flex flex-col items-center">
                <span className="text-[10px] mb-1 text-on-surface font-bold">CURRENT</span>
                <div className="w-3 h-3 rounded-full border-2 border-on-surface bg-background" />
              </div>
            </div>

            <div className="pt-4 flex items-start gap-4 p-4 rounded-lg bg-tertiary/5 border border-tertiary/10">
              <Zap size={20} className="text-tertiary fill-current" />
              <div>
                <p className="text-sm font-medium text-on-surface">You need to lose <span className="text-tertiary font-bold">0.93 kg/week</span></p>
                <p className="text-xs text-on-surface-variant">This matches your 'Moderate' intensity profile for a 6-month duration.</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="font-headline font-bold text-lg mb-4">Neural Projection</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">Projected BMI Trend</span>
                <span className="text-[10px] bg-secondary/20 text-secondary px-2 py-0.5 rounded-full font-bold">Predictive</span>
              </div>
              <div className="flex items-end gap-2 h-32">
                {[90, 82, 75, 68, 60].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/20 rounded-t-sm transition-all cursor-help relative group" style={{ height: `${h}%` }}>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden group-hover:block text-[10px] font-bold text-primary">{(38 - i * 1.5).toFixed(1)}</div>
                  </div>
                ))}
                <div className="flex-1 bg-tertiary rounded-t-sm h-[52%] shadow-[0_0_15px_rgba(255,183,125,0.4)] hover:scale-110 transition-all cursor-help relative group">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden group-hover:block text-[10px] font-bold text-tertiary">30.0</div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-on-surface-variant font-bold uppercase tracking-widest pt-2">
                <span>Month 1</span>
                <span>Month 3</span>
                <span>Month 6</span>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
};
