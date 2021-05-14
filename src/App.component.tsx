import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Loading } from './components';
import { userDefinitions } from './definitions';
import { userEvents } from './events';

const IdentificationPageLazy = lazy(() => import('./pages/identification/Identification.page'));

const Test = () => <p>test</p>;

const App = () => {
  const [userName, setUserName] = useState<userDefinitions.UserName>();

  useEffect(() => {
    userEvents.setUserName(setUserName);
  }, []);

  useEffect(() => {
    if (userName) {
      return userEvents.sendUserNameOnRequest(userName);
    }
  }, [userName]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        {userName ? (
          <Switch>
            <Route path="/" component={Test} />
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
