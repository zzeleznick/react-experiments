import React from 'react'
import { render } from 'react-dom'
// bring in `browserHistory` instead of `hashHistory`
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import Home from './modules/Home'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Zach from './modules/Zach'

render((
  <Router history={browserHistory}>
    {/* add the routes here */}
    <Route path="/" component={App}>
        {/* make these routes children of `App` */}
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/repos" component={Repos}/>
         <Route path="/repos/:userName/:repoName" component={Repo}/>
        <Route path="/zz" component={Zach}/>
        <Route path="*" component={Home}/>
    </Route>
  </Router>
), document.getElementById('app'))

// render(<App/>, document.getElementById('app'))