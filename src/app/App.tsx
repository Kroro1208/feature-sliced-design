import { Suspense } from 'react';
import { AppRouter } from './providers';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppRouter />
    </Suspense>
  );
}

export default App;
