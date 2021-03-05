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
import { Redirect } from './views/Redirect/Redirect';

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
                <Route path='/form'>
                  <Redirect url='https://forms.gle/dZ4wKV2gFoPhTRff9' />
                </Route>
                <Route path='/list'>
                  <Redirect url='https://docs.google.com/spreadsheets/d/1g5fnoIRgKa68ewRh9PS0lpz704SE5xUdVEqS4LVbBl0/edit?usp=sharing' />
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