import React, { useEffect } from 'react';
// import before other components
import './utils/i18n'
import './App.scss';
import {
  NavLink,
  HashRouter,
  useLocation,
} from "react-router-dom";
import { AppBar, createMuiTheme, Divider, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import { t } from 'ttag'
import { Language } from './components/Language/Language';
import { getLocale } from './utils/i18n';
import { Routes } from './routes';
import { Sidebar } from './components/Sidebar/Sidebar';

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
  '/about': 'About',
  '/graphs': 'Graphs',
  '/': ''
}

const App = () => {
  useEffect(() => {
    document.querySelector('body')?.classList.remove('loading')
    document.documentElement.style.overflowY = 'auto'
  }, [])
  return <div className="App">
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Views />
      </HashRouter>
    </ThemeProvider>
  </div>
}

const locale = getLocale()
const Views = () => {
  const routerLocation = useLocation()
  useEffect(() => {
    const pageName = pageNames[routerLocation.pathname]
    const title = pageName ? `${pageName} : ${siteName}` : siteName
    document.title = title
    if (process.env.NODE_ENV !== 'development') {
      (window as any).gtag('event', 'page_view', {
        page_title: title,
        page_path: window.location.pathname + window.location.search + window.location.hash,
        locale
      })
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
      <Routes />
      <Sidebar />
    </div>
  );
}

export default App;
