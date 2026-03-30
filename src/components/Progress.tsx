import React from 'react';
import { GlassCard } from './GlassCard';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import { Activity, Zap, Heart, Flame, Moon, Droplets, Target, TrendingDown } from 'lucide-react';

const activityData = [
  { day: 'Mon', caloriesIn: 2100, caloriesOut: 2400, active: 45, heart: 72, sleep: 7.5, hydration: 2.5 },
  { day: 'Tue', caloriesIn: 2300, caloriesOut: 2200, active: 55, heart: 75, sleep: 6.8, hydration: 3.0 },
  { day: 'Wed', caloriesIn: 1900, caloriesOut: 2100, active: 30, heart: 70, sleep: 8.1, hydration: 2.2 },
  { day: 'Thu', caloriesIn: 2500, caloriesOut: 2600, active: 65, heart: 78, sleep: 7.2, hydration: 3.5 },
  { day: 'Fri', caloriesIn: 2200, caloriesOut: 2300, active: 50, heart: 74, sleep: 6.5, hydration: 2.8 },
  { day: 'Sat', caloriesIn: 2800, caloriesOut: 2500, active: 80, heart: 82, sleep: 9.0, hydration: 4.0 },
  { day: 'Sun', caloriesIn: 2400, caloriesOut: 2200, active: 60, heart: 76, sleep: 7.7, hydration: 3.2 },
];

const radarData = [
  { subject: 'Activity', A: 120, fullMark: 150 },
  { subject: 'Sleep', A: 98, fullMark: 150 },
  { subject: 'Nutrition', A: 86, fullMark: 150 },
  { subject: 'Hydration', A: 99, fullMark: 150 },
  { subject: 'Mindfulness', A: 85, fullMark: 150 },
  { subject: 'Consistency', A: 65, fullMark: 150 },
];

export const Progress: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className="text-4xl font-headline font-extrabold tracking-tight text-gradient mb-2">Evolution Analytics</h1>
        <p className="text-on-surface-variant">Your neural-tracked progress across the ethereal timeline.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard glow="primary">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-2xl bg-primary/20 text-primary">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Active Score</p>
              <h3 className="text-2xl font-headline font-bold">84/100</h3>
            </div>
          </div>
        </GlassCard>

        <GlassCard glow="secondary">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-2xl bg-secondary/20 text-secondary">
              <Zap size={24} />
            </div>
            <div>
              <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Energy Level</p>
              <h3 className="text-2xl font-headline font-bold">High</h3>
            </div>
          </div>
        </GlassCard>

        <GlassCard glow="tertiary">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-2xl bg-tertiary/20 text-tertiary">
              <Heart size={24} />
            </div>
            <div>
              <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Avg Heart Rate</p>
              <h3 className="text-2xl font-headline font-bold">74 BPM</h3>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-2xl bg-white/10 text-white">
              <Flame size={24} />
            </div>
            <div>
              <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Weekly Burn</p>
              <h3 className="text-2xl font-headline font-bold">16.4k Cal</h3>
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="h-[400px]" glow="primary">
          <h3 className="text-xl font-headline font-bold mb-6 flex items-center space-x-2">
            <Activity size={20} className="text-primary" />
            <span>Activity Intensity</span>
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <defs>
                  <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(11, 19, 38, 0.8)', 
                    borderRadius: '12px', 
                    border: '1px solid rgba(162, 201, 255, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="active" 
                  stroke="var(--color-primary)" 
                  fillOpacity={1} 
                  fill="url(#colorActive)" 
                  strokeWidth={3}
                />
                {/* Goal Line */}
                <Line type="monotone" dataKey={() => 60} stroke="#ff4e00" strokeDasharray="5 5" dot={false} strokeWidth={1} name="Daily Goal" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="h-[400px]" glow="secondary">
          <h3 className="text-xl font-headline font-bold mb-6 flex items-center space-x-2">
            <Heart size={20} className="text-secondary" />
            <span>Heart Rate Variance</span>
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                  domain={['dataMin - 5', 'dataMax + 5']}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(11, 19, 38, 0.8)', 
                    borderRadius: '12px', 
                    border: '1px solid rgba(210, 187, 255, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="heart" 
                  stroke="var(--color-secondary)" 
                  strokeWidth={3}
                  dot={{ r: 4, fill: 'var(--color-secondary)', strokeWidth: 2, stroke: '#0b1326' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="h-[400px]" glow="tertiary">
          <h3 className="text-xl font-headline font-bold mb-6 flex items-center space-x-2">
            <Moon size={20} className="text-tertiary" />
            <span>Sleep Quality</span>
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                  domain={[5, 10]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(11, 19, 38, 0.8)', 
                    borderRadius: '12px', 
                    border: '1px solid rgba(255, 183, 125, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="sleep" 
                  stroke="var(--color-tertiary)" 
                  strokeWidth={3}
                  dot={{ r: 4, fill: 'var(--color-tertiary)', strokeWidth: 2, stroke: '#0b1326' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="h-[400px]" glow="primary">
          <h3 className="text-xl font-headline font-bold mb-6 flex items-center space-x-2">
            <Flame size={20} className="text-primary" />
            <span>Calorie Balance</span>
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(11, 19, 38, 0.8)', 
                    borderRadius: '12px', 
                    border: '1px solid rgba(162, 201, 255, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                />
                <Bar dataKey="caloriesIn" fill="var(--color-secondary)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="caloriesOut" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="h-[400px]" glow="secondary">
          <h3 className="text-xl font-headline font-bold mb-6 flex items-center space-x-2">
            <Droplets size={20} className="text-secondary" />
            <span>Hydration Consistency</span>
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(11, 19, 38, 0.8)', 
                    borderRadius: '12px', 
                    border: '1px solid rgba(210, 187, 255, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                />
                <Bar dataKey="hydration" radius={[4, 4, 0, 0]}>
                  {activityData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.hydration >= 3.0 ? 'var(--color-secondary)' : 'var(--color-secondary-container)'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="h-[400px]" glow="tertiary">
          <h3 className="text-xl font-headline font-bold mb-6 flex items-center space-x-2">
            <Target size={20} className="text-tertiary" />
            <span>Holistic Balance</span>
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar
                  name="Metrics"
                  dataKey="A"
                  stroke="var(--color-tertiary)"
                  fill="var(--color-tertiary)"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <GlassCard glow="primary" className="p-8 border-l-4 border-primary">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-2xl font-headline font-bold text-gradient">Weekly Transformation Summary</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Your activity intensity has increased by <span className="text-primary font-bold">12%</span> compared to last week. 
              The consistency in your hydration levels is particularly impressive, reaching your goal on 5 out of 7 days. 
              Keep pushing—you are <span className="text-secondary font-bold">4.2kg</span> away from your next major milestone.
            </p>
            <div className="flex items-center space-x-4 text-sm font-bold uppercase tracking-widest">
              <span className="flex items-center space-x-2 text-emerald-400">
                <TrendingDown size={16} />
                <span>Weight: -1.2kg</span>
              </span>
              <span className="flex items-center space-x-2 text-primary">
                <Zap size={16} />
                <span>Activity: +15%</span>
              </span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full border-4 border-primary/20 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin duration-[3s]" />
              <div className="text-center">
                <div className="text-3xl font-headline font-bold">84%</div>
                <div className="text-[8px] uppercase tracking-widest font-bold">Overall</div>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
