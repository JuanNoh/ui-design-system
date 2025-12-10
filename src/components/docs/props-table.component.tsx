interface PropDefinition {
  prop: string;
  type: string;
  default: string;
  description: string;
}

interface PropsTableProps {
  data: PropDefinition[];
}

export function PropsTable({ data }: PropsTableProps) {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="py-2 px-4 font-medium text-foreground">Prop</th>
            <th className="py-2 px-4 font-medium text-foreground">Type</th>
            <th className="py-2 px-4 font-medium text-foreground">Default</th>
            <th className="py-2 px-4 font-medium text-foreground">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.prop}
              className="border-b border-border/50 last:border-none hover:bg-muted/50"
            >
              <td className="py-2 px-4 font-mono text-brand-primary">
                {item.prop}
              </td>
              <td className="py-2 px-4 font-mono text-muted-foreground">
                {item.type}
              </td>
              <td className="py-2 px-4 font-mono text-muted-foreground">
                {item.default}
              </td>
              <td className="py-2 px-4 text-foreground">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
