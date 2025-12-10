export function IntroductionPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Introducción
      </h1>
      <p className="text-xl text-muted-foreground leading-relaxed">
        Bienvenido al{' '}
        <strong className="text-foreground">Sistema de Diseño UI</strong>. Esta
        es una biblioteca completa de componentes React accesibles,
        reutilizables y componibles, diseñada para agilizar tu flujo de trabajo
        de desarrollo.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <div className="p-6 border border-border rounded-xl bg-card text-card-foreground shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Tokens de Diseño</h3>
          <p className="text-muted-foreground">
            Construido sobre una base robusta de variables CSS para colores,
            tipografía y espaciado. Totalmente personalizable y listo para modo
            oscuro.
          </p>
        </div>
        <div className="p-6 border border-border rounded-xl bg-card text-card-foreground shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Componentes</h3>
          <p className="text-muted-foreground">
            Una colección creciente de componentes pulidos, desde botones
            básicos hasta tablas de datos complejas.
          </p>
        </div>
      </div>
    </div>
  );
}
