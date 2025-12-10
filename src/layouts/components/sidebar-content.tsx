import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Layout, Type, Component, Moon, Sun, Search } from 'lucide-react';
import { Button } from '@/components/button/button.component';
import { Input } from '@/components/input/input.component';

interface ComponentItem {
  name: string;
  path: string;
}

interface SidebarContentProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
  filteredComponents: ComponentItem[];
}

export function SidebarContent({
  isDarkMode,
  setIsDarkMode,
  searchQuery,
  setSearchQuery,
  searchInputRef,
  filteredComponents,
}: SidebarContentProps) {
  return (
    <>
      <div className="p-6 border-b border-border/40">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold flex items-center gap-2 tracking-tight">
            <div className="">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="bg"
                    x1="8"
                    y1="8"
                    x2="56"
                    y2="56"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#050816" />
                    <stop offset="1" stopColor="#101625" />
                  </linearGradient>
                </defs>

                <path
                  d="M16 8C11.5817 8 8 11.5817 8 16V48C8 52.4183 11.5817 56 16 56H48C52.4183 56 56 52.4183 56 48V24L44 8H16Z"
                  fill="url(#bg)"
                />

                <path
                  d="M44 8L56 24H48C45.7909 24 44 22.2091 44 20V8Z"
                  fill="#12192B"
                />

                <rect
                  x="18"
                  y="26"
                  width="8"
                  height="16"
                  rx="3"
                  fill="#4FF2C9"
                  fillOpacity="0.95"
                />

                <rect
                  x="28"
                  y="22"
                  width="10"
                  height="22"
                  rx="3.5"
                  fill="#7C5CFF"
                  fillOpacity="0.98"
                />

                <rect
                  x="40"
                  y="28"
                  width="8"
                  height="14"
                  rx="3"
                  fill="#1E9BFF"
                  fillOpacity="0.9"
                />

                <circle cx="48" cy="20" r="2" fill="#4FF2C9" />
              </svg>
            </div>
            <span>UI Lib</span>
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            ref={searchInputRef}
            placeholder="Search..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            className="pl-8 h-9 bg-muted/50 border-none focus-visible:ring-1"
          />
          <div className="absolute right-2 top-2.5 text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5 bg-background">
            ⌘K
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        <div>
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
            Getting Started
          </h2>
          <div className="space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200',
                  isActive
                    ? 'bg-brand-primary/10 text-brand-primary translate-x-1'
                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground hover:translate-x-1'
                )
              }
            >
              <Layout className="w-4 h-4" />
              Introduction
            </NavLink>
            <NavLink
              to="/tokens"
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200',
                  isActive
                    ? 'bg-brand-primary/10 text-brand-primary translate-x-1'
                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground hover:translate-x-1'
                )
              }
            >
              <Type className="w-4 h-4" />
              Design Tokens
            </NavLink>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
            Components
          </h2>
          <div className="space-y-1">
            {filteredComponents.length > 0 ? (
              filteredComponents.map((component) => (
                <NavLink
                  key={component.path}
                  to={component.path}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200',
                      isActive
                        ? 'bg-brand-primary/10 text-brand-primary translate-x-1'
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground hover:translate-x-1'
                    )
                  }
                >
                  <Component className="w-4 h-4" />
                  {component.name}
                </NavLink>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-muted-foreground italic">
                No components found
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-border/40 bg-muted/20">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-xs shadow-md">
            JN
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate">Juan Noh</p>
            <p className="text-xs text-muted-foreground truncate">
              Pro License
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
