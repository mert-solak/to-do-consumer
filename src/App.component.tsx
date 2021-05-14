import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Loading } from './components';

const IdentificationPageLazy = lazy(() => import('./pages/identification/Identification.page'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" component={IdentificationPageLazy} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
