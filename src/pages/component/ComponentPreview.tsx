import { useComponentPage } from './ComponentPage.context';

export function ComponentPreview() {
  const { previewContent } = useComponentPage();

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/10 text-xs font-bold text-brand-primary">
            1
          </span>
          <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        </div>
      </div>

      <div className="relative border border-border rounded-xl overflow-hidden shadow-sm">
        <div className="h-10 border-b border-border bg-muted/30 flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-400/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20 border border-yellow-400/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/20 border border-green-400/50"></div>
          </div>
        </div>

        <div className="p-12 md:p-20 flex items-center justify-center min-h-[400px] bg-background relative">
          <div
            className="absolute inset-0 z-0 opacity-[0.5]"
            style={{
              backgroundImage:
                'radial-gradient(var(--color-border) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          <div className="relative z-10 w-full flex justify-center">
            {previewContent}
          </div>
        </div>
      </div>
    </section>
  );
}
