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
        <Route path="/">
          <PeopleBreakdown />
        </Route>
      </Switch>
)