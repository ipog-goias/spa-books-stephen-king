import React, { lazy, Suspense } from 'react';

const LazyBookList = lazy(() => import('./BookList'));

const BookList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBookList {...props} />
  </Suspense>
);

export default BookList;
