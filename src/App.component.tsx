import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import DefaultLayout from './layouts/default/Default.layout';
import { Loading, CustomSnackbar } from './components';
import { userDefinitions } from './definitions';
import { loadingEvents, snackbarEvents, userEvents } from './events';
import { routeConfig } from './configs';

const IdentificationPageLazy = lazy(() => import('./pages/identification/Identification.page'));
const TasksPageLazy = lazy(() => import('./pages/tasks/tasks.page'));

const App = () => {
  const [userName, setUserName] = useState<userDefinitions.UserName>('test user name'); // TODO:Mert remove
  const [isLoading, setIsLoading] = useState<boolean>(false); // TODO:Mert remove

  useEffect(() => {
    if (userName) {
      return userEvents.sendUserNameOnRequest(userName);
    }

    return () => {};
  }, [userName]);

  useEffect(() => {
    loadingEvents.setIsLoading(setIsLoading);
  }, []);

  return (
    <BrowserRouter>
      <CustomSnackbar listenErrors={snackbarEvents.setErrorMessage} />
      <Loading isOpen />

      <Suspense fallback={!isLoading && <Loading isOpen />}>
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
