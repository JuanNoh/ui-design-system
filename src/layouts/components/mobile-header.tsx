import { Menu, X } from 'lucide-react';
import { Button } from '@/components/button/button.component';

interface MobileHeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

export function MobileHeader({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileHeaderProps) {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 h-16 border-b border-border/40 bg-background/95 backdrop-blur z-50 flex items-center justify-between px-4">
      <div className="font-bold flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white">
          <span className="font-bold text-xs">UI</span>
        </div>
        <span>UI Lib</span>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
