import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Loading } from './components';

const IdentificationPageLazy = lazy(() => import('./pages/identification/Identification.page'));

const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        {userName ? (
          <Switch>
            <Route path="/" component={IdentificationPageLazy} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" component={IdentificationPageLazy} />
          </Switch>
        )}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
