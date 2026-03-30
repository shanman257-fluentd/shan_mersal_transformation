import React from 'react';
import { cn } from '@/src/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  glow = false,
  glowColor = 'rgba(162, 201, 255, 0.1)'
}) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300",
        glow && "shadow-2xl",
        className
      )}
      style={glow ? { boxShadow: `0 0 40px ${glowColor}` } : {}}
    >
      {children}
    </div>
  );
};
