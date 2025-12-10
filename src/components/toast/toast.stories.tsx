import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider } from '@/components/toast/toast.component';
import { useToast } from '@/components/toast/toast.hooks';

const ToastDemo = () => {
  const { success, error, warning, info } = useToast();

  return (
    <div className="flex flex-col items-start gap-4 p-8 border border-dashed border-neutral-300 rounded-lg bg-neutral-50/50">
      <div className="space-y-1">
        <h3 className="font-semibold text-neutral-900">Toast</h3>
        <p className="text-sm text-neutral-500">
          Haz clic en los botones para disparar notificaciones.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() =>
            success(
              'Cambios guardados',
              'Tu perfil ha sido actualizado correctamente.'
            )
          }
          className="px-3 py-2 bg-white border border-neutral-200 rounded-md text-sm font-medium hover:bg-neutral-50 shadow-sm text-green-700"
        >
          Disparar Success
        </button>

        <button
          onClick={() =>
            error('Error de conexión', 'No pudimos conectar con el servidor.')
          }
          className="px-3 py-2 bg-white border border-neutral-200 rounded-md text-sm font-medium hover:bg-neutral-50 shadow-sm text-red-700"
        >
          Disparar Error
        </button>

        <button
          onClick={() =>
            warning(
              'Almacenamiento lleno',
              'Te queda menos del 10% de espacio.'
            )
          }
          className="px-3 py-2 bg-white border border-neutral-200 rounded-md text-sm font-medium hover:bg-neutral-50 shadow-sm text-amber-700"
        >
          Disparar Warning
        </button>

        <button
          onClick={() =>
            info('Nueva actualización', 'La versión 2.0 ya está disponible.')
          }
          className="px-3 py-2 bg-white border border-neutral-200 rounded-md text-sm font-medium hover:bg-neutral-50 shadow-sm text-blue-700"
        >
          Disparar Info
        </button>
      </div>
    </div>
  );
};

const meta: Meta<typeof ToastProvider> = {
  title: 'Components/Toast',
  component: ToastProvider,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <ToastProvider position="bottom-right">
        <div className="h-[300px] w-full flex items-center justify-center">
          <Story />
        </div>
      </ToastProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ToastDemo />,
};

export const PositionTopRight: Story = {
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <ToastProvider position="top-right">
        <div className="h-[300px] w-full flex items-center justify-center">
          <Story />
        </div>
      </ToastProvider>
    ),
  ],
  render: () => <ToastDemo />,
};
