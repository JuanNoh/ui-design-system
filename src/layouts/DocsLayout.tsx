import * as React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AIChat } from '@/components/ai-chat/ai-chat.component';
import { SidebarContent } from '@/layouts/components/sidebar-content';
import { MobileHeader } from '@/layouts/components/mobile-header';

const components = [
  { name: 'Alert', path: '/components/alert' },
  { name: 'Avatar', path: '/components/avatar' },
  { name: 'Breadcrumbs', path: '/components/breadcrumbs' },
  { name: 'Button', path: '/components/button' },
  { name: 'Card', path: '/components/card' },
  { name: 'Checkbox', path: '/components/checkbox' },
  { name: 'Dialog', path: '/components/dialog' },
  { name: 'Drawer', path: '/components/drawer' },
  { name: 'Input', path: '/components/input' },
  { name: 'Pagination', path: '/components/pagination' },
  { name: 'Popover', path: '/components/popover' },
  { name: 'Select', path: '/components/select' },
  { name: 'Skeleton', path: '/components/skeleton' },
  { name: 'Stepper', path: '/components/stepper' },
  { name: 'Switch', path: '/components/switch' },
  { name: 'Table', path: '/components/table' },
  { name: 'Textarea', path: '/components/textarea' },
  { name: 'Tooltip', path: '/components/tooltip' },
  { name: 'Tabs', path: '/components/tabs' },
];

export function DocsLayout() {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredComponents = React.useMemo(() => {
    return components.filter((component) =>
      component.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans transition-colors duration-300">
      <MobileHeader
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden pt-16 flex flex-col animate-in slide-in-from-left-10 duration-200">
          <SidebarContent
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            searchInputRef={searchInputRef}
            filteredComponents={filteredComponents}
          />
        </div>
      )}

      <aside className="w-72 border-r border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 hidden md:flex flex-col fixed h-full z-50">
        <SidebarContent
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchInputRef={searchInputRef}
          filteredComponents={filteredComponents}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 p-8 lg:p-12 max-w-6xl mx-auto w-full pt-24 md:pt-12">
        <Outlet />
      </main>

      {/* AI Chat Widget */}
      <AIChat />
    </div>
  );
}
