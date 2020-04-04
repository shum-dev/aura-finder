import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';


import HomePage from './HomePage';
import RepoPage from './RepoPage';
import NotFound from '../components/NotFound';

const Switcher = () => {
  const reposList = useSelector((state) => state.repos);

  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/repos" />} />
      <Route exact path="/repos" component={HomePage} />
      <Route exact path="/repos/:id" render={() => (reposList.length ? <RepoPage /> : <Redirect to="/repos" />)} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Switcher;
