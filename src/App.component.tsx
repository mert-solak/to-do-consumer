import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DefaultLayout from './layouts/default/Default.layout';
import { Loading } from './components';
import { userDefinitions } from './definitions';
import { userEvents } from './events';

const HomePageLazy = lazy(() => import('./pages/home/Home.page'));
const IdentificationPageLazy = lazy(() => import('./pages/identification/Identification.page'));
const TasksPageLazy = lazy(() => import('./pages/tasks/tasks.page'));

const App = () => {
  const [userName, setUserName] = useState<userDefinitions.UserName>(); // TODO:Mert remove

  useEffect(() => {
    userEvents.setUserName(setUserName);
  }, []);

  useEffect(() => {
    if (userName) {
      return userEvents.sendUserNameOnRequest(userName);
    }

    return () => {};
  }, [userName]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        {userName ? (
          <DefaultLayout userName={userName}>
            <Switch>
              <Route exact path="/tasks" component={TasksPageLazy} />
              <Route exact path="/" component={HomePageLazy} />
            </Switch>
          </DefaultLayout>
        ) : (
          <Switch>
            <Route exact path="/" component={IdentificationPageLazy} />
          </Switch>
        )}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
