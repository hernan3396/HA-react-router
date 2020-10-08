import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const Peli = ({ match }) => {
  return <div>{match.params.nombre}</div>;
};

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li style={{ marginRight: '20px' }}>
          <NavLink activeClassName='active' exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/about'>
            About
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/users/:nombre' component={Peli} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
