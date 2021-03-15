import React, { useEffect } from 'react';
// import before other components
import './utils/i18n'
import './App.scss';
import {
  Switch,
  Route,
  NavLink,
  HashRouter,
  useLocation,
} from "react-router-dom";
import { PeopleBreakdown } from './views/People/People';
import { Memorial } from './views/People/Memorial/Memorial';
import { AppBar, createMuiTheme, Divider, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import { Redirect } from './views/Redirect/Redirect';
import { t } from 'ttag'
import { Language } from './components/Language/Language';
import { Resources } from './views/Resources/Resources';

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

const siteName = 'Fallen Heroes of Myanmar'
const pageNames: any = {
  '/memorial': 'Memorial',
  '/form': 'Form',
  '/resources': 'Resources',
  '/': ''
}

const App = () => {
  return <div className="App">
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Views />
      </HashRouter>
    </ThemeProvider>
  </div>
}
const Views = () => {
  const routerLocation = useLocation()
  useEffect(() => {
    const pageName = pageNames[routerLocation.pathname] 
    document.title = pageName ? `${pageName} : ${siteName}` : siteName
    if (process.env.NODE_ENV !== 'development') {
      (window as any).gtag('send', {
        hitType: 'pageview',
        page: window.location.pathname + window.location.search + window.location.hash,
        title: document.title
      });
    }
  }, [routerLocation])
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <NavLink to="/" exact={true}>{t`နွေဦးတော်လှန်ရေးအာဇာနည်များ`}</NavLink>
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="h6">
            <NavLink to="/memorial">{t`စုပေါင်းမှတ်တမ်းများ`}</NavLink>
          </Typography>
          <Language />
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/memorial">
          <Memorial />
        </Route>
        <Route path='/form'>
          <Redirect url='https://forms.gle/dZ4wKV2gFoPhTRff9' />
        </Route>
        <Route path='/resources'>
          <Resources />
        </Route>
        <Route path="/">
          <PeopleBreakdown />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
