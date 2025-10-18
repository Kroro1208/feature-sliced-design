import { Suspense } from 'react';

import { PageLoader } from '@/widgets/PageLoader';

import { AppRouter } from './providers';

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <AppRouter />
    </Suspense>
  );
}

export default App;
