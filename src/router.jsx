import React from 'react';
import PropTypes from 'prop-types';
import {
  Route, Switch, Redirect, routerRedux,
} from 'dva/router';

import Students from './routes/Students/Students';

import { getPath } from './utils/pathManager';
import Groups from './routes/Groups';
import Exams from './routes/Exams';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact>
          <Redirect to={getPath('students')} />
        </Route>
        <Route path={getPath('students')} exact component={Students} />
        <Route path={getPath('groups')} exact component={Groups} />
        <Route path={getPath('exams')} exact component={Exams} />
      </Switch>
    </ConnectedRouter>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default RouterConfig;
