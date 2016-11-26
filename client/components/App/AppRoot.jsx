import React from 'react'
import { hashHistory, Router, Route, IndexRoute } from 'react-router'

import App from './App'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Info from '../Pages/Info'
import Terms from '../Pages/Terms'

class AppRoot extends React.Component{
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={App}>
          <IndexRoute component={ Home }>Home</IndexRoute>
          <Route path="/about" component={ About }>About</Route>
          <Route path="/contact" component={ Contact }>Contact</Route>
          <Route path="/info" component={ Info }>Info</Route>
          <Route path="/terms" component={ Terms }>Terms</Route>
        </Route>
      </Router>
    );
  }
}

export default AppRoot
