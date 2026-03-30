import React from 'react';
import { GlassCard } from './GlassCard';
import { Flag, Target, CheckCircle2, Circle, Trophy, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface GoalItemProps {
  title: string;
  description: string;
  progress: number;
  type: 'primary' | 'secondary' | 'tertiary';
  completed?: boolean;
}

const GoalItem: React.FC<GoalItemProps> = ({ title, description, progress, type, completed }) => {
  const colors = {
    primary: 'from-primary to-primary-container',
    secondary: 'from-secondary to-secondary-container',
    tertiary: 'from-tertiary to-tertiary-container',
  };

  return (
    <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer">
      <div className={cn(
        "mt-1 p-2 rounded-xl bg-white/10",
        completed ? "text-green-400" : "text-on-surface-variant"
      )}>
        {completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <h4 className={cn("font-headline font-bold text-lg", completed && "line-through opacity-50")}>{title}</h4>
          <span className="text-xs font-bold text-on-surface-variant">{progress}%</span>
        </div>
        <p className="text-sm text-on-surface-variant mb-3">{description}</p>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <div 
            className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-1000", colors[type])}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight size={20} className="text-primary" />
      </div>
    </div>
  );
};

export const Goals: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-headline font-extrabold tracking-tight text-gradient mb-2">Ethereal Milestones</h1>
          <p className="text-on-surface-variant">Define your evolution and transcend your current limits.</p>
        </div>
        <GlassCard className="py-2 px-4 flex items-center space-x-2" glow="tertiary">
          <Trophy size={18} className="text-tertiary" />
          <span className="text-sm font-bold">Level 14 Evolution</span>
        </GlassCard>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <GlassCard glow="primary">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-headline font-bold flex items-center space-x-2">
                <Target size={24} className="text-primary" />
                <span>Active Manifestations</span>
              </h3>
              <button className="text-xs font-bold text-primary hover:underline">View All</button>
            </div>
            
            <div className="space-y-2">
              <GoalItem 
                title="Neural Clarity" 
                description="Complete 20 meditation sessions this month." 
                progress={65} 
                type="primary" 
              />
              <GoalItem 
                title="Physical Transcendence" 
                description="Reach 15% body fat through consistent training." 
                progress={42} 
                type="secondary" 
              />
              <GoalItem 
                title="Hydration Ritual" 
                description="Maintain 3L daily intake for 14 consecutive days." 
                progress={100} 
                type="tertiary" 
                completed
              />
              <GoalItem 
                title="Metabolic Optimization" 
                description="Keep glucose levels stable for 7 days." 
                progress={28} 
                type="primary" 
              />
            </div>
          </GlassCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard glow="secondary">
              <h3 className="text-lg font-headline font-bold mb-4">Upcoming Challenges</h3>
              <div className="space-y-4">
                {[
                  { name: 'Solstice Sprint', participants: 1240, reward: 'Solar Badge' },
                  { name: 'Lunar Fast', participants: 850, reward: 'Void Aura' },
                ].map((challenge) => (
                  <div key={challenge.name} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-secondary/30 transition-colors cursor-pointer">
                    <h4 className="font-bold mb-1">{challenge.name}</h4>
                    <div className="flex justify-between text-xs text-on-surface-variant">
                      <span>{challenge.participants} Seekers</span>
                      <span className="text-secondary font-bold">{challenge.reward}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard glow="tertiary">
              <h3 className="text-lg font-headline font-bold mb-4">Evolution Rewards</h3>
              <div className="flex flex-wrap gap-2">
                {['Master of Flow', 'Dawn Walker', 'Hydra Sage', 'Zen Master', 'Iron Core'].map((badge) => (
                  <span key={badge} className="px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-[10px] font-bold text-tertiary uppercase tracking-wider">
                    {badge}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        <div className="space-y-6">
          <GlassCard className="text-center py-8" glow="primary">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 border-2 border-primary/40 shadow-[0_0_30px_rgba(162,201,255,0.3)]">
              <Flag size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-2">Create Manifestation</h3>
            <p className="text-sm text-on-surface-variant mb-6 px-4">What new evolution will you pursue today?</p>
            <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 transition-all shadow-lg">
              New Goal
            </button>
          </GlassCard>

          <GlassCard>
            <h3 className="text-lg font-headline font-bold mb-4">Goal Insights</h3>
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-white/5">
                <p className="text-xs text-on-surface-variant italic">"You are 15% more likely to reach your Neural Clarity goal if you meditate before 8 AM."</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5">
                <p className="text-xs text-on-surface-variant italic">"Your Physical Transcendence progress has accelerated by 8% this week."</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
