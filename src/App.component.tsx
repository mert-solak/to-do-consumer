import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Loading } from './components';

// const AuthLazy = lazy(() => import('./pages/Auth/Auth'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>{/* <Route path="/" component={AuthLazy} /> */}</Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
