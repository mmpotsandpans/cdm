import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { PeopleBreakdown } from './views/People/People';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav> */}

          <Switch>
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
