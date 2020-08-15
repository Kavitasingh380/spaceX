import React from 'react'
import { createHashHistory } from 'history';
import { HashRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import spaceX from '../modules/spaceX';

import createStore from '../store/createStore'

class App extends React.Component {
  constructor(){
    super()
    this.state={}
  }
  shouldComponentUpdate () {
    return false
  }  
  render () {
    const store = createStore();
    return (
      <Provider store={store}>
        <HashRouter >
          <div>
            <Route exact path="/" component={spaceX} />
          </div>
        </HashRouter >
      </Provider>
    )
  }
}

export default App
