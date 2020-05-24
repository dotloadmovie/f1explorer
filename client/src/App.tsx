import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Circuits from './pages/Circuits';
import Constructors from './pages/Constructors';
import Drivers from './pages/Drivers';
import {Main} from './layouts/main/Main';



const App:React.FC = () => {
  return (
    <Router>
      <Main>
        <Switch>
          <Route exact path="/">
            <p>Home</p>
          </Route>

          <Route path="/circuits">
            <Circuits />
          </Route>
          <Route path="/constructors">
            <Constructors />
          </Route>
          <Route path="/drivers">
            <Drivers />
          </Route>
        </Switch>
        </Main>
    </Router>

  );
}

export default App;
