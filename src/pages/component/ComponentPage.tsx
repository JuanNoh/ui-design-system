import { ComponentPreview } from './ComponentPreview';
import { ComponentCode } from './ComponentCode';
import { ComponentPropsSection } from './ComponentPropsSection';
import {
  ComponentPageProvider,
  useComponentPage,
} from './ComponentPage.context';

function ComponentPageContent() {
  const { componentName, metadata } = useComponentPage();

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {componentName}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          {metadata?.description ||
            `Componente ${componentName.toLowerCase()} bellamente diseñado, accesible y personalizable.`}
        </p>
      </div>

      <div className="grid gap-8">
        <ComponentPreview />
        <ComponentCode />
        <ComponentPropsSection />
      </div>
    </div>
  );
}

export function ComponentPage() {
  return (
    <ComponentPageProvider>
      <ComponentPageContent />
    </ComponentPageProvider>
  );
}
