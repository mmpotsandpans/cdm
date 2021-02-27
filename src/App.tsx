import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { PeopleBreakdown } from './views/People/People';
import { Memorial } from './views/People/Memorial/Memorial';
import { AppBar, Divider, Toolbar, Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">
                <NavLink to="/" exact={true}>စာရင်း</NavLink>
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography variant="h6">
                <NavLink to="/memorial">စုပေါင်းမှတ်တမ်းများ</NavLink>
              </Typography>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route path="/memorial">
              <Memorial />
            </Route>
            <Route path="/">
              <PeopleBreakdown />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
