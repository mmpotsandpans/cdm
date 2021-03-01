import React from 'react';
import './App.scss';
import {
  Switch,
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";
import { PeopleBreakdown } from './views/People/People';
import { Memorial } from './views/People/Memorial/Memorial';
import { AppBar, createMuiTheme, Divider, ThemeProvider, Toolbar, Typography } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Pyidaungsu',
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
  },
})
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HashRouter>
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
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
