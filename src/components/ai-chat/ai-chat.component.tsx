import * as React from 'react';
import {
  Sparkles,
  X,
  Send,
  Bot,
  Hammer,
  Code2,
  Zap,
  Layout,
} from 'lucide-react';
import { Button } from '@/components/button/button.component';
import { Input } from '@/components/input/input.component';
import { cn } from '@/lib/utils';

export function AIChat() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<
    { role: 'user' | 'assistant'; content: string | React.ReactNode }[]
  >([
    {
      role: 'assistant',
      content:
        "Hi! I'm your AI UI Builder. What component do you want to create today?",
    },
  ]);
  const [inputValue, setInputValue] = React.useState('');
  const [isGenerating, setIsGenerating] = React.useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [...prev, { role: 'user', content: inputValue }]);
    setInputValue('');
    setIsGenerating(true);

    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: (
            <div className="space-y-3">
              <p>
                I've generated that for you! Here is the component and the code:
              </p>
              <div className="rounded-lg border border-border overflow-hidden bg-background">
                <div className="p-6 flex items-center justify-center bg-muted/20 border-b border-border min-h-[150px]">
                  {/* Mock Result */}
                  <div className="p-4 bg-card rounded-lg shadow-sm border border-border">
                    <h3 className="font-semibold mb-2">Login</h3>
                    <div className="space-y-2">
                      <input
                        className="w-full px-3 py-2 border rounded text-sm"
                        placeholder="Email"
                      />
                      <input
                        className="w-full px-3 py-2 border rounded text-sm"
                        type="password"
                        placeholder="Password"
                      />
                      <button className="w-full bg-brand-primary text-white py-2 rounded text-sm font-medium">
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-muted p-3 text-xs font-mono text-muted-foreground flex justify-between items-center">
                  <span>LoginCard.tsx</span>
                  <Button size="sm" variant="ghost" className="h-6 text-xs">
                    Copy Code
                  </Button>
                </div>
              </div>
            </div>
          ),
        },
      ]);
    }, 1500);
  };

  return (
    <>
      {/* Trigger Button - "Magic AI Button" */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'h-14 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 pr-6 pl-4',
            isOpen
              ? 'w-14 pl-0 pr-0 justify-center bg-muted text-muted-foreground hover:bg-muted/80'
              : 'bg-linear-to-r from-brand-primary to-brand-accent hover:opacity-90 text-white'
          )}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <div className="bg-white/20 p-1.5 rounded-full">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-semibold text-base">AI Builder</span>
            </>
          )}
        </Button>
      </div>

      {/* Chat Window - "AI Builder Interface" */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-[400px] md:w-[450px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200 h-[600px]">
          {/* Header */}
          <div className="p-4 border-b border-border bg-muted/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">AI UI Builder</h3>
                <p className="text-xs text-muted-foreground">
                  Build components in seconds
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="px-2 py-0.5 bg-brand-primary/10 text-brand-primary text-[10px] font-bold rounded-full uppercase tracking-wider">
                Beta
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  'flex gap-3 max-w-[90%]',
                  msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''
                )}
              >
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center shrink-0',
                    msg.role === 'user'
                      ? 'bg-muted text-muted-foreground'
                      : 'bg-brand-primary/10 text-brand-primary'
                  )}
                >
                  {msg.role === 'user' ? (
                    <div className="text-xs font-bold">You</div>
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                </div>
                <div
                  className={cn(
                    'p-3 rounded-2xl text-sm',
                    msg.role === 'user'
                      ? 'bg-brand-primary text-brand-primary-foreground rounded-tr-none'
                      : 'bg-muted/50 text-foreground rounded-tl-none border border-border/50'
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isGenerating && (
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>
                <div className="p-3 rounded-2xl rounded-tl-none bg-muted/50 border border-border/50 text-sm flex items-center gap-2 text-muted-foreground">
                  <Hammer className="w-3 h-3 animate-bounce" />
                  Generating component...
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-background">
            <div className="relative">
              <Input
                placeholder="Describe the component you want to build..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="pr-10 py-6 shadow-sm"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1 h-10 w-10 rounded-lg"
                onClick={handleSend}
                disabled={!inputValue.trim() || isGenerating}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="mt-2 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button className="text-[10px] px-2 py-1 bg-muted rounded-full text-muted-foreground hover:bg-muted/80 whitespace-nowrap transition-colors flex items-center gap-1">
                <Zap className="w-3 h-3" /> Login Form
              </button>
              <button className="text-[10px] px-2 py-1 bg-muted rounded-full text-muted-foreground hover:bg-muted/80 whitespace-nowrap transition-colors flex items-center gap-1">
                <Code2 className="w-3 h-3" /> Pricing Card
              </button>
              <button className="text-[10px] px-2 py-1 bg-muted rounded-full text-muted-foreground hover:bg-muted/80 whitespace-nowrap transition-colors flex items-center gap-1">
                <Layout className="w-3 h-3" /> Dashboard Layout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
