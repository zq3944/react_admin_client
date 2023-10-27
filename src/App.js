import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

/*
应用的根组件
 */
export default class App extends Component {


  render () {
    return (
      <BrowserRouter>
        <Switch> {/*只匹配其中一个*/}
          <Route path='/login' component={Login}></Route>
<<<<<<< Updated upstream
          <Route path='/////' component={Admin}></Route>
          <Route path='/login2' component={Login}></Route>
          <Route path='/123' component={Admin}></Route>
=======
          <Route path='asdf' component={Admin}></Route>
>>>>>>> Stashed changes
        </Switch>
      </BrowserRouter>
    )
  }
}