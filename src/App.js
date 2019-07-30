import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './Components/Apollo/ApolloCilent';
import './style.css';

import Home from './Components/Shared/Home';
import Sample from './Components/Sample/Sample';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <Router>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/Sample" component={Sample}/>
        </Router>
      </Fragment>
    </ApolloProvider>
  )
}

export default App;