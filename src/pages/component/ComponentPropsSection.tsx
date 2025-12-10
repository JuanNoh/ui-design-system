import { PropsTable } from '@/components/docs/props-table.component';
import { useComponentPage } from './ComponentPage.context';

export function ComponentPropsSection() {
  const { metadata } = useComponentPage();
  const propsData = metadata?.props;

  if (!propsData) return null;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/10 text-xs font-bold text-brand-primary">
          3
        </span>
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
      </div>
      <div className="rounded-xl border border-border overflow-hidden">
        <PropsTable data={propsData} />
      </div>
    </section>
  );
}
