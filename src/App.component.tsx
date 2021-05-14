import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Loading } from './components';
import { userDefinitions } from './definitions';
import { userEvents } from './events';

import DefaultLayout from './layouts/default/Default.layout';

const IdentificationPageLazy = lazy(() => import('./pages/identification/Identification.page'));
const HomePageLazy = lazy(() => import('./pages/home/Home.page'));

const App = () => {
  const [userName, setUserName] = useState<userDefinitions.UserName>('username'); // TODO:Mert remove

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
            <Route path="/" component={HomePageLazy} />
          </Switch>
        ) : (
          <DefaultLayout>
            <Switch>
              <Route path="/" component={IdentificationPageLazy} />
            </Switch>
          </DefaultLayout>
        )}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
