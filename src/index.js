import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.css';

import store from './store';
import Page from './pages/page';
import * as serviceWorker from './serviceWorker';
import './index.css';

const example = (props) => {
  return (
    <Provider store={store}>
      <Page {...props} />
    </Provider>
  );
};

ReactDOM.render(
  <Router>
    <Route path="/" render={example}/>
    <Route />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
