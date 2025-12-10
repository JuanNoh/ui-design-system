import * as React from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/button/button.component';
import { useComponentPage } from './ComponentPage.context';

export function ComponentCode() {
  const { componentName } = useComponentPage();
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = () => {
    const code = `import { ${componentName} } from "@/components/${componentName}";\n\nexport function Example() {\n  return <${componentName} />;\n}`;
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/10 text-xs font-bold text-brand-primary">
            2
          </span>
          <h2 className="text-xl font-semibold tracking-tight">Code</h2>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="h-8 px-3 text-xs"
        >
          {isCopied ? (
            <>
              <Check className="mr-2 h-3.5 w-3.5 text-green-500" />
              Copied
            </>
          ) : (
            <>
              <Copy className="mr-2 h-3.5 w-3.5" />
              Copy Code
            </>
          )}
        </Button>
      </div>
      <div className="relative rounded-xl border border-border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
        <pre className="text-foreground">
          {`import { ${componentName} } from "@/components/${componentName}";

export function Example() {
  return (
    <${componentName} />
  );
}`}
        </pre>
      </div>
    </section>
  );
}
