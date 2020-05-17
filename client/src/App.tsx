import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Circuits from './pages/circuits';
import Constructors from './pages/constructors';
import Drivers from './pages/drivers';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row
`

const Menu = styled.div`
  width: 200px;
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1
`;

const App:React.FC = () => {
  return (
    <Router>
      <Wrapper>

        <Menu>
          <ul>
            <li><Link to="/circuits">Circuits</Link></li>
            <li><Link to="/constructors">Constructors</Link></li>
            <li><Link to="/drivers">Drivers</Link></li>
          </ul>
        </Menu>

        <Content>
        
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
          
        </Content>
      </Wrapper>
    </Router>

  );
}

export default App;
