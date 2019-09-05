import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Error from './pages/Error'
import SingleRoom from './pages/SingleRoom'
import {Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'


function App() {
  return (
<div>
<NavBar/>
  <Switch>   
  <Route path="/" exact component={Home}/>
  <Route exact path="/rooms" component={Rooms}/>
  <Route path="/rooms/:id" component={SingleRoom}/>
  <Route component={Error}/>
  </Switch>
</div>
  );
}

export default App;
