import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router';

const DocsLayout = lazy(() =>
  import('@/layouts/DocsLayout').then((module) => ({
    default: module.DocsLayout,
  }))
);
const IntroductionPage = lazy(() =>
  import('@/pages/introduction/IntroductionPage').then((module) => ({
    default: module.IntroductionPage,
  }))
);
const DesignTokensPage = lazy(() =>
  import('@/pages/design-tokens/DesignTokensPage').then((module) => ({
    default: module.DesignTokensPage,
  }))
);
const ComponentPage = lazy(() =>
  import('@/pages/component/ComponentPage').then((module) => ({
    default: module.ComponentPage,
  }))
);

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DocsLayout />}>
        <Route index element={<IntroductionPage />} />
        <Route path="tokens" element={<DesignTokensPage />} />
        <Route path="components/:name" element={<ComponentPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
