import React from 'react';
import Register from './Components/Auth/Register';
import Main from './Components/Common/Main';
import Dashboard from './Components/Dashboard';
import { Route,Switch } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Forgot from './Components/Auth/Forgot';
import Profile from './Components/Common/Profile';
export default function App() {
  return (
    <React.Fragment>
      {/* <Main/> */}
      {/* <Register/> */}
       <Route>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/forgot" component={Forgot}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/main" component={Main}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </Route>
    </React.Fragment>
  )
}
