import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/modal/modal.component';
import { Button } from '@/components/button/button.component';
import { Input } from '@/components/input/input.component';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Modal',
  component: Dialog,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Abrir Modal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Título del Modal</DialogTitle>
          <DialogDescription>
            Este es un ejemplo básico de un modal.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p>El contenido puede ser cualquier cosa.</p>
        </div>
        <DialogFooter>
          <Button type="submit">Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const FormExample: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Crear Cuenta</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crear Cuenta</DialogTitle>
          <DialogDescription>
            Ingresa los datos para crear una nueva cuenta.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="email" className="text-right text-sm">
              Email
            </label>
            <Input id="email" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right text-sm">
              Username
            </label>
            <Input id="username" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Crear cuenta</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
