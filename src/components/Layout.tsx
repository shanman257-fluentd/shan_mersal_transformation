import React from 'react';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Flag, 
  Dumbbell, 
  Utensils, 
  Droplets, 
  User,
  Bell,
  Settings,
  Plus
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { TabType } from '@/src/types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
    { id: 'goals', label: 'Goals', icon: Flag },
    { id: 'exercise', label: 'Exercise', icon: Dumbbell },
    { id: 'nutrition', label: 'Nutrition', icon: Utensils },
    { id: 'hydration', label: 'Hydration', icon: Droplets },
    { id: 'profile', label: 'Profile', icon: User },
  ] as const;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-primary/10 px-6 py-4 flex justify-between items-center">
        <div className="text-primary font-headline font-extrabold tracking-tighter text-2xl text-gradient">
          AetherPulse
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['Dashboard', 'Insights', 'Community'].map((item) => (
            <button 
              key={item}
              className="text-on-surface-variant font-headline font-bold text-lg tracking-tight hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-primary hover:text-secondary transition-colors">
            <Bell size={24} />
          </button>
          <button className="text-primary hover:text-secondary transition-colors">
            <Settings size={24} />
          </button>
          <div className="w-10 h-10 rounded-full border border-primary/20 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/user123/100/100" 
              alt="User" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </nav>

      <div className="flex pt-20 flex-1">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 border-r border-primary/10 bg-background/40 backdrop-blur-2xl sticky top-20 h-[calc(100vh-80px)] py-8 px-4">
          <div className="flex flex-col space-y-2 flex-grow">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group",
                  activeTab === item.id 
                    ? "bg-primary/10 text-primary border-l-4 border-tertiary shadow-[0_0_15px_rgba(255,183,125,0.3)]" 
                    : "text-on-surface-variant hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon size={20} className={cn("transition-transform group-hover:translate-x-1", activeTab === item.id && "fill-current")} />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-auto p-4 glass-card rounded-xl border border-primary/10">
            <p className="text-xs text-on-surface-variant mb-2">Ready for more?</p>
            <button className="w-full py-2 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-lg text-sm font-bold shadow-lg hover:brightness-110 transition-all">
              Upgrade to Pro
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-10 overflow-x-hidden">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-background/80 backdrop-blur-xl border-t border-primary/10 px-6 py-3 flex justify-around items-center">
        {navItems.slice(0, 4).map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "flex flex-col items-center space-y-1",
              activeTab === item.id ? "text-primary" : "text-on-surface-variant"
            )}
          >
            <item.icon size={20} />
            <span className="text-[10px] font-bold uppercase">{item.label.slice(0, 4)}</span>
          </button>
        ))}
      </nav>

      {/* FAB */}
      <button className="fixed right-6 bottom-24 md:bottom-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary shadow-2xl flex items-center justify-center active:scale-90 transition-transform">
        <Plus size={32} />
      </button>
    </div>
  );
};
