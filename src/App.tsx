import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/routes/app.routes';

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-primary border-t-transparent" />
          </div>
        }
      >
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
