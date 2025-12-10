import { Button } from '@/components/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/alert';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/card';
import { Input } from '@/components/input/input.component';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/table';
import { Tooltip } from '@/components/tooltip';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from '@/components/pagination';
import { Skeleton } from '@/components/skeleton';
import { Popover } from '@/components/popover';

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/breadcrumbs/breadcrumbs.component';
import { Stepper } from '@/components/stepper';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select/select.component';
import { Switch } from '@/components/switch/switch.component';
import { Textarea } from '@/components/textarea/textarea.component';
import { Checkbox } from '@/components/checkbox/checkbox.component';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/components/avatar/avatar.component';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@/components/modal/modal.component';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ComponentRegistry: Record<string, any> = {
  Button: <Button>Click me</Button>,
  Input: (
    <div className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <label className="text-sm font-medium">Default Input</label>
        <Input placeholder="Type something..." />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Password Input</label>
        <Input type="password" placeholder="Password" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Disabled Input</label>
        <Input disabled placeholder="Disabled" />
      </div>
    </div>
  ),
  Alert: (
    <div className="space-y-4 w-full">
      <Alert variant="info">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>
          New features are available in the dashboard.
        </AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your profile has been updated successfully.
        </AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Your subscription is about to expire.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
      <Alert variant="info" dismissible>
        <AlertTitle>Dismissible</AlertTitle>
        <AlertDescription>You can close this alert.</AlertDescription>
      </Alert>
      <Alert variant="info" showIcon={false}>
        <AlertTitle>No Icon</AlertTitle>
        <AlertDescription>
          This alert has no icon but keeps the color.
        </AlertDescription>
      </Alert>
    </div>
  ),
  Card: (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
  Table: (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Task 1</TableCell>
          <TableCell>Done</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  Tooltip: (
    <Tooltip content="This is a tooltip">
      <Button variant="outline">Hover me</Button>
    </Tooltip>
  ),
  Pagination: (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  Skeleton: (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
  Popover: (
    <Popover
      trigger={<Button variant="outline">Open Popover</Button>}
      content={<div className="p-4">Popover Content</div>}
    />
  ),
  Drawer: (
    <div className="p-4 border border-dashed rounded text-center text-muted-foreground">
      Drawer demo requires state (click "Preview" in sidebar)
    </div>
  ),
  Breadcrumbs: (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  Stepper: (
    <Stepper
      currentStep={2}
      steps={[
        { id: 1, label: 'Step 1' },
        { id: 2, label: 'Step 2' },
        { id: 3, label: 'Step 3' },
      ]}
    />
  ),
  Select: (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  ),
  Switch: (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <label htmlFor="airplane-mode">Airplane Mode</label>
    </div>
  ),
  Textarea: <Textarea placeholder="Type your message here." />,
  Checkbox: (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
  Avatar: (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://i.pravatar.cc/100?u=juan-noh"
          alt="Juan Noh"
        />
        <AvatarFallback>JN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
    </div>
  ),
  Dialog: (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
