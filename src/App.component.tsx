import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import DefaultLayout from './layouts/default/Default.layout';
import { Loading } from './components';
import { userDefinitions } from './definitions';
import { userEvents } from './events';
import { routeConfig } from './configs';

const HomePageLazy = lazy(() => import('./pages/home/Home.page'));
const IdentificationPageLazy = lazy(() => import('./pages/identification/Identification.page'));
const TasksPageLazy = lazy(() => import('./pages/tasks/tasks.page'));

const App = () => {
  const [userName, setUserName] = useState<userDefinitions.UserName>('test user name'); // TODO:Mert remove

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
              <Route path={routeConfig.routes.tasks} component={TasksPageLazy} />
              <Route path="/" component={() => <Redirect to={routeConfig.routes.tasks} />} />
            </Switch>
          </DefaultLayout>
        ) : (
          <Switch>
            <Route exact path="/" component={() => <IdentificationPageLazy setUserName={setUserName} />} />
          </Switch>
        )}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
