import React from 'react';
import './styles/App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Week1 from './pages/Week1';
import Week2 from './pages/Week2';
import Week3 from './pages/Week3';
import Dictionary from './pages/Dictionary';
import SammysAdventuresPart1 from "./pages/SammysAdventuresPart1";
import Navi from "./Navi";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
      <React.Fragment>
          <Navi />
          <Sidebar />
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/dictionary" component={Dictionary}/>
              <Route path="/week1" component={Week1}/>
              <Route path="/week2" component={Week2}/>
              <Route path="/week3" component={Week3}/>
              <Route path="/sammy1" component={SammysAdventuresPart1}/>
              <Route component={Error}/>
          </Switch>
      </React.Fragment>
  );
}

export default App;
