import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {ApolloProvider} from 'react-apollo';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {createGraphQLClient} from '../../createGraphQLClient';
import StudentListPage from './StudentListPage';
import StudentProfilePage from './StudentProfilePage';
import AddStudentPage from './AddStudentPage';

const graphQLClient = createGraphQLClient();

export default function init() {
  setTimeout(function() {
    ReactDOM.render(
      <ApolloProvider client={graphQLClient}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/plugins/xformation-petclinic-panel/page/students"
              component={StudentListPage}
            />
            <Route
              path="/plugins/xformation-petclinic-panel/page/studentsprofile"
              component={StudentProfilePage}
            />
            <Route
              path="/plugins/xformation-petclinic-panel/page/addstudent"
              component={AddStudentPage}
            />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>,
      document.getElementById('mount')
    );
  }, 10);
}
