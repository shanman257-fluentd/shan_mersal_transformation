import React from 'react';
import { GlassCard } from './GlassCard';
import { Dumbbell, Play, Clock, Flame, ChevronRight, Search, Filter, Plus } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface WorkoutCardProps {
  title: string;
  duration: string;
  calories: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  type: 'primary' | 'secondary' | 'tertiary';
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ title, duration, calories, level, image, type }) => {
  const colors = {
    primary: 'text-primary border-primary/20 bg-primary/10',
    secondary: 'text-secondary border-secondary/20 bg-secondary/10',
    tertiary: 'text-tertiary border-tertiary/20 bg-tertiary/10',
  };

  return (
    <GlassCard className="overflow-hidden group cursor-pointer" glow={type}>
      <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div className={cn("px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest", colors[type])}>
            {level}
          </div>
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors">
            <Play size={20} fill="currentColor" />
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">{title}</h4>
      
      <div className="flex items-center space-x-6 text-on-surface-variant text-sm">
        <div className="flex items-center space-x-2">
          <Clock size={16} />
          <span>{duration}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Flame size={16} />
          <span>{calories}</span>
        </div>
      </div>
    </GlassCard>
  );
};

export const Exercise: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 md:pb-0">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-headline font-extrabold tracking-tight text-gradient mb-2">The Kinetic Lab</h1>
          <p className="text-on-surface-variant">Synthesize your physical evolution with neural-optimized routines.</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
            <input 
              type="text" 
              placeholder="Search routines..." 
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all text-sm"
            />
          </div>
          <button className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
            <Filter size={20} className="text-on-surface-variant" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="flex flex-col items-center justify-center py-8 text-center" glow="primary">
          <div className="p-4 rounded-full bg-primary/20 text-primary mb-4">
            <Dumbbell size={32} />
          </div>
          <h3 className="text-lg font-headline font-bold">Custom Routine</h3>
          <p className="text-xs text-on-surface-variant mb-4">Build your own neural path</p>
          <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-bold text-sm hover:scale-105 transition-transform flex items-center space-x-2">
            <Plus size={16} />
            <span>Create</span>
          </button>
        </GlassCard>

        <GlassCard className="md:col-span-2 flex items-center justify-between p-8" glow="secondary">
          <div className="space-y-2">
            <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Active Challenge</p>
            <h3 className="text-2xl font-headline font-bold">Solar Flare HIIT</h3>
            <p className="text-sm text-on-surface-variant max-w-xs">Burn 500 calories in 20 minutes with this high-intensity interval training.</p>
            <div className="flex items-center space-x-4 pt-4">
              <button className="px-6 py-2 rounded-full bg-secondary text-on-secondary font-bold text-sm hover:scale-105 transition-transform">
                Start Now
              </button>
              <span className="text-xs font-bold text-secondary">850 Seekers Active</span>
            </div>
          </div>
          <div className="hidden sm:block w-32 h-32 rounded-full bg-secondary/20 flex items-center justify-center border-4 border-secondary/40 animate-pulse">
            <Flame size={64} className="text-secondary" />
          </div>
        </GlassCard>
      </div>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-headline font-bold">Recommended Evolutions</h3>
          <button className="text-sm font-bold text-primary flex items-center space-x-1 hover:underline">
            <span>Explore All</span>
            <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <WorkoutCard 
            title="Neural Flow Yoga" 
            duration="45 min" 
            calories="250 Cal" 
            level="Beginner" 
            image="https://picsum.photos/seed/yoga/600/400"
            type="primary"
          />
          <WorkoutCard 
            title="Void Strength" 
            duration="60 min" 
            calories="450 Cal" 
            level="Intermediate" 
            image="https://picsum.photos/seed/strength/600/400"
            type="secondary"
          />
          <WorkoutCard 
            title="Ethereal Cardio" 
            duration="30 min" 
            calories="380 Cal" 
            level="Advanced" 
            image="https://picsum.photos/seed/cardio/600/400"
            type="tertiary"
          />
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-headline font-bold mb-6">Recent Activities</h3>
        <GlassCard>
          <div className="space-y-4">
            {[
              { name: 'Core Synthesis', time: 'Today, 08:30 AM', duration: '20 min', cal: '120 Cal', icon: <Dumbbell size={18} /> },
              { name: 'Morning Flow', time: 'Yesterday, 07:15 AM', duration: '30 min', cal: '180 Cal', icon: <Clock size={18} /> },
              { name: 'Power Manifestation', time: '2 days ago', duration: '45 min', cal: '400 Cal', icon: <Flame size={18} /> },
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-white/10 text-on-surface-variant">
                    {activity.icon}
                  </div>
                  <div>
                    <h4 className="font-bold">{activity.name}</h4>
                    <p className="text-xs text-on-surface-variant">{activity.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <span className="text-on-surface-variant">{activity.duration}</span>
                  <span className="font-bold text-primary">{activity.cal}</span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>
    </div>
  );
};
