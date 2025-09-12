import { Suspense } from 'react';
import { AppRouter } from './providers';
import { PageLoader } from '@/widgets/PageLoader';

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <AppRouter />
    </Suspense>
  );
}

export default App;
