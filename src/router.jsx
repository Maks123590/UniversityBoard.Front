import React from 'react';
import PropTypes from 'prop-types';
import {
  Route, Switch, Redirect, routerRedux,
} from 'dva/router';

import Students from './routes/Students/Students';

import { getPath } from './utils/pathManager';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact>
          <Redirect to={getPath('students')} />
        </Route>
        <Route path={getPath('students')} exact component={Students} />
      </Switch>
    </ConnectedRouter>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default RouterConfig;
