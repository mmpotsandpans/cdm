import CircularProgress from "@material-ui/core/CircularProgress";
import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const About = lazy(() => import('./views/About/About'))
const Api = lazy(() => import('./views/Api/Api'))
const Misinformation = lazy(() => import('./views/Misinformation/Misinformation'))
const Memorial = lazy(() => import('./views/People/Memorial/Memorial'))
const PeopleBreakdown = lazy(() => import('./views/People/People'))
const Redirect = lazy(() => import('./views/Redirect/Redirect'))
const Resources = lazy(() => import('./views/Resources/Resources'))


export const Routes = () => (
  <Suspense fallback={<CircularProgress color="secondary" style={{marginTop: '2em'}} />}>
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
        <Route path='/graphs'>
          <iframe title='graphs' width="100%" height="1068" src="https://datastudio.google.com/embed/reporting/cb88e51e-5a0c-4333-9675-4a6a224b9c2e/page/aDL8B" frameBorder="0" style={{border:0, maxHeight: '95vh', overflowY: 'auto'}} allowFullScreen></iframe>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/api'>
          <Api />
        </Route>
        <Route path='/misinformation'>
          <Misinformation />
        </Route>
        <Route path="/">
          <PeopleBreakdown />
        </Route>
      </Switch>
    </Suspense>
)