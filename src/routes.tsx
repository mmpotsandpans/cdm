import React from "react";
import { Route, Switch } from "react-router-dom";
import { Memorial } from "./views/People/Memorial/Memorial";
import { PeopleBreakdown } from "./views/People/People";
import { Redirect } from "./views/Redirect/Redirect";
import { Resources } from "./views/Resources/Resources";

export const Routes = () => (
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
          <iframe title='graphs' width="100%" height="1068" src="https://datastudio.google.com/embed/reporting/cb88e51e-5a0c-4333-9675-4a6a224b9c2e/page/aDL8B" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
        </Route>
        <Route path="/">
          <PeopleBreakdown />
        </Route>
      </Switch>
)