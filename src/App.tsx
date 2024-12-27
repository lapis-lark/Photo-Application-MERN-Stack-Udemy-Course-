import { useState } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App;
