import App from '@/app/App.tsx';
import '@/app/styles/index.scss';
import '@/shared/config/i18n/i18n.ts';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from './app/providers';
import { ErrorBoundary } from './app/providers/ErrorBoundary/ui/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
