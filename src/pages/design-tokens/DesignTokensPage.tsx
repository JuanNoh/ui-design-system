export function DesignTokensPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Tokens de Diseño
        </h1>
        <p className="text-muted-foreground text-lg">
          Los valores visuales centrales que impulsan el sistema de diseño.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Colores</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-20 rounded-lg bg-brand-primary shadow-sm"></div>
            <p className="text-sm font-medium">Primario</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-lg bg-brand-accent shadow-sm"></div>
            <p className="text-sm font-medium">Acento</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-lg bg-success shadow-sm"></div>
            <p className="text-sm font-medium">Éxito</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-lg bg-error shadow-sm"></div>
            <p className="text-sm font-medium">Error</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tipografía</h2>
        <div className="space-y-4 border border-border rounded-lg p-6">
          <h1 className="text-4xl font-extrabold">Encabezado 1</h1>
          <h2 className="text-3xl font-bold">Encabezado 2</h2>
          <h3 className="text-2xl font-semibold">Encabezado 3</h3>
          <p className="text-base">
            Texto del cuerpo. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <p className="text-sm text-muted-foreground">
            Texto pequeño / Silenciado. Usado para leyendas e información
            secundaria.
          </p>
        </div>
      </section>
    </div>
  );
}
