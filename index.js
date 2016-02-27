import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Zach from './modules/Zach'

render((
  <Router history={hashHistory}>
    {/* add the routes here */}
    <Route path="/" component={App}>
        {/* make these routes children of `App` */}
        <Route path="/about" component={About}/>
        <Route path="/repos" component={Repos}/>
         <Route path="/repos/:userName/:repoName" component={Repo}/>
        <Route path="/zz" component={Zach}/>
    </Route>
  </Router>
), document.getElementById('app'))

// render(<App/>, document.getElementById('app'))