import React from 'react';
import './styles/App.css';
import Navbar from './components/navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Week1 from './pages/Week1';
import Dictionary from './pages/Dictionary';
import LinkList from "./components/Links/LinkList";

function App() {
  return (
      <React.Fragment className="App">
          <Navbar/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/dictionary" component={Dictionary}/>
              <Route path="/week1" component={Week1}/>
              <Route component={Error}/>
          </Switch>
      </React.Fragment>
  );
}

export default App;
