export interface PropDefinition {
  prop: string;
  type: string;
  default: string;
  description: string;
}

export const componentData: Record<
  string,
  { description: string; props: PropDefinition[] }
> = {
  Alert: {
    description: 'Muestra un aviso para llamar la atención del usuario.',
    props: [
      {
        prop: 'variant',
        type: "'default' | 'destructive' | 'info' | 'success' | 'warning'",
        default: "'default'",
        description: 'El estilo visual de la alerta.',
      },
      {
        prop: 'showIcon',
        type: 'boolean',
        default: 'true',
        description: 'Si se debe mostrar el icono de estado.',
      },
      {
        prop: 'dismissible',
        type: 'boolean',
        default: 'false',
        description: 'Si la alerta puede ser descartada por el usuario.',
      },
      {
        prop: 'className',
        type: 'string',
        default: '-',
        description: 'Clases CSS adicionales.',
      },
    ],
  },
  Button: {
    description: 'Muestra un botón o un componente que parece un botón.',
    props: [
      {
        prop: 'variant',
        type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
        default: "'default'",
        description: 'El estilo visual del botón.',
      },
      {
        prop: 'size',
        type: "'default' | 'sm' | 'lg' | 'icon'",
        default: "'default'",
        description: 'El tamaño del botón.',
      },
      {
        prop: 'asChild',
        type: 'boolean',
        default: 'false',
        description: 'Si se debe renderizar como un componente hijo (Slot).',
      },
      {
        prop: 'isLoading',
        type: 'boolean',
        default: 'false',
        description: 'Muestra un indicador de carga.',
      },
    ],
  },
  Input: {
    description:
      'Muestra un campo de entrada de formulario o un componente que parece un campo de entrada.',
    props: [
      {
        prop: 'type',
        type: 'string',
        default: "'text'",
        description: 'El tipo de entrada HTML.',
      },
      {
        prop: 'placeholder',
        type: 'string',
        default: '-',
        description: 'Texto de marcador de posición.',
      },
      {
        prop: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Deshabilita la entrada.',
      },
      {
        prop: 'size',
        type: "'default' | 'sm' | 'lg'",
        default: "'default'",
        description: 'El tamaño de la entrada.',
      },
    ],
  },
  Avatar: {
    description:
      'Un elemento de imagen con un respaldo para representar al usuario.',
    props: [
      {
        prop: 'size',
        type: "'default' | 'sm' | 'lg'",
        default: "'default'",
        description: 'El tamaño del avatar.',
      },
      {
        prop: 'className',
        type: 'string',
        default: '-',
        description: 'Clases CSS adicionales.',
      },
    ],
  },
  Card: {
    description:
      'Muestra una tarjeta con encabezado, contenido y pie de página.',
    props: [
      {
        prop: 'className',
        type: 'string',
        default: '-',
        description: 'Clases CSS adicionales.',
      },
    ],
  },
  Select: {
    description: 'Muestra una lista de opciones para que el usuario elija.',
    props: [
      {
        prop: 'value',
        type: 'string',
        default: '-',
        description: 'El valor controlado del select.',
      },
      {
        prop: 'onValueChange',
        type: '(value: string) => void',
        default: '-',
        description: 'Manejador de eventos llamado cuando cambia el valor.',
      },
      {
        prop: 'defaultValue',
        type: 'string',
        default: '-',
        description: 'El valor predeterminado del select.',
      },
      {
        prop: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Evita que el usuario interactúe con el select.',
      },
    ],
  },
  Modal: {
    description:
      'Una ventana superpuesta sobre la ventana principal u otra ventana de diálogo.',
    props: [
      {
        prop: 'open',
        type: 'boolean',
        default: '-',
        description: 'El estado abierto controlado del diálogo.',
      },
      {
        prop: 'onOpenChange',
        type: '(open: boolean) => void',
        default: '-',
        description:
          'Manejador de eventos llamado cuando cambia el estado abierto.',
      },
      {
        prop: 'defaultOpen',
        type: 'boolean',
        default: 'false',
        description: 'El estado abierto predeterminado del diálogo.',
      },
    ],
  },
  Tooltip: {
    description:
      'Una ventana emergente que muestra información relacionada con un elemento cuando el elemento recibe el foco del teclado o el mouse pasa sobre él.',
    props: [
      {
        prop: 'content',
        type: 'ReactNode | string',
        default: '-',
        description: 'El contenido a mostrar en el tooltip.',
      },
      {
        prop: 'delayDuration',
        type: 'number',
        default: '700',
        description:
          'La duración desde que el mouse entra en el disparador hasta que se abre el tooltip.',
      },
    ],
  },
  Toast: {
    description: 'Un mensaje sucinto que se muestra temporalmente.',
    props: [
      {
        prop: 'variant',
        type: "'default' | 'destructive' | 'success'",
        default: "'default'",
        description: 'El estilo visual del toast.',
      },
      {
        prop: 'title',
        type: 'string',
        default: '-',
        description: 'El título del toast.',
      },
      {
        prop: 'description',
        type: 'string',
        default: '-',
        description: 'La descripción del toast.',
      },
    ],
  },
  Table: {
    description: 'Un componente de tabla responsivo.',
    props: [
      {
        prop: 'className',
        type: 'string',
        default: '-',
        description: 'Clases CSS adicionales.',
      },
    ],
  },
  Stepper: {
    description:
      'Un componente para mostrar el progreso a través de una secuencia de pasos.',
    props: [
      {
        prop: 'steps',
        type: 'Step[]',
        default: '[]',
        description: 'Matriz de objetos de paso con etiqueta y descripción.',
      },
      {
        prop: 'currentStep',
        type: 'number',
        default: '0',
        description: 'El índice del paso actual.',
      },
    ],
  },
  Skeleton: {
    description:
      'Úselo para mostrar un marcador de posición mientras se carga el contenido.',
    props: [
      {
        prop: 'className',
        type: 'string',
        default: '-',
        description: 'Clases CSS adicionales.',
      },
    ],
  },
  Pagination: {
    description:
      'Paginación con navegación de página, enlaces siguiente y anterior.',
    props: [
      {
        prop: 'count',
        type: 'number',
        default: '1',
        description: 'El número total de páginas.',
      },
      {
        prop: 'page',
        type: 'number',
        default: '1',
        description: 'La página actual.',
      },
      {
        prop: 'onPageChange',
        type: '(page: number) => void',
        default: '-',
        description: 'Manejador de eventos llamado cuando cambia la página.',
      },
    ],
  },
  Popover: {
    description:
      'Muestra contenido enriquecido en un portal, activado por un botón.',
    props: [
      {
        prop: 'trigger',
        type: 'ReactNode',
        default: '-',
        description: 'El elemento que activa el popover.',
      },
      {
        prop: 'content',
        type: 'ReactNode',
        default: '-',
        description: 'El contenido a mostrar en el popover.',
      },
      {
        prop: 'side',
        type: "'top' | 'right' | 'bottom' | 'left'",
        default: "'bottom'",
        description: 'El lado preferido del disparador para renderizar.',
      },
    ],
  },
  Drawer: {
    description:
      'Un componente de cajón que se desliza desde el borde de la pantalla.',
    props: [
      {
        prop: 'open',
        type: 'boolean',
        default: '-',
        description: 'El estado abierto controlado del cajón.',
      },
      {
        prop: 'onOpenChange',
        type: '(open: boolean) => void',
        default: '-',
        description:
          'Manejador de eventos llamado cuando cambia el estado abierto.',
      },
      {
        prop: 'side',
        type: "'top' | 'right' | 'bottom' | 'left'",
        default: "'right'",
        description: 'La dirección desde la que se desliza el cajón.',
      },
    ],
  },
  Switch: {
    description:
      'Un control que permite al usuario alternar entre marcado y no marcado.',
    props: [
      {
        prop: 'checked',
        type: 'boolean',
        default: '-',
        description: 'El estado marcado controlado del interruptor.',
      },
      {
        prop: 'onCheckedChange',
        type: '(checked: boolean) => void',
        default: '-',
        description:
          'Manejador de eventos llamado cuando cambia el estado marcado.',
      },
      {
        prop: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Evita que el usuario interactúe con el interruptor.',
      },
    ],
  },
  Textarea: {
    description:
      'Muestra un área de texto de formulario o un componente que parece un área de texto.',
    props: [
      {
        prop: 'placeholder',
        type: 'string',
        default: '-',
        description: 'Texto de marcador de posición.',
      },
      {
        prop: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Deshabilita el área de texto.',
      },
    ],
  },
  Checkbox: {
    description:
      'Un control que permite al usuario alternar entre marcado y no marcado.',
    props: [
      {
        prop: 'checked',
        type: 'boolean | "indeterminate"',
        default: 'false',
        description:
          'El estado marcado controlado de la casilla de verificación.',
      },
      {
        prop: 'onCheckedChange',
        type: '(checked: boolean | "indeterminate") => void',
        default: '-',
        description:
          'Manejador de eventos llamado cuando cambia el estado marcado.',
      },
      {
        prop: 'disabled',
        type: 'boolean',
        default: 'false',
        description:
          'Evita que el usuario interactúe con la casilla de verificación.',
      },
    ],
  },
  RadioGroup: {
    description:
      'Un conjunto de botones marcables, conocidos como botones de opción, donde no se puede marcar más de uno a la vez.',
    props: [
      {
        prop: 'value',
        type: 'string',
        default: '-',
        description: 'El valor controlado del grupo de opciones.',
      },
      {
        prop: 'onValueChange',
        type: '(value: string) => void',
        default: '-',
        description: 'Manejador de eventos llamado cuando cambia el valor.',
      },
      {
        prop: 'defaultValue',
        type: 'string',
        default: '-',
        description: 'El valor predeterminado del grupo de opciones.',
      },
    ],
  },
  Breadcrumbs: {
    description:
      'Muestra la ruta al recurso actual utilizando una jerarquía de enlaces.',
    props: [
      {
        prop: 'items',
        type: 'BreadcrumbItem[]',
        default: '[]',
        description: 'Matriz de elementos de migas de pan.',
      },
      {
        prop: 'separator',
        type: 'ReactNode',
        default: '<ChevronRight />',
        description: 'Elemento separador personalizado.',
      },
    ],
  },
  Tabs: {
    description:
      'Un conjunto de secciones de contenido en capas, conocidas como paneles de pestañas, que se muestran una a la vez.',
    props: [
      {
        prop: 'defaultValue',
        type: 'string',
        default: '-',
        description:
          'El valor de la pestaña que debe estar activa cuando se renderiza inicialmente.',
      },
      {
        prop: 'value',
        type: 'string',
        default: '-',
        description: 'El valor controlado de la pestaña a activar.',
      },
      {
        prop: 'onValueChange',
        type: '(value: string) => void',
        default: '-',
        description: 'Manejador de eventos llamado cuando cambia el valor.',
      },
    ],
  },
};
