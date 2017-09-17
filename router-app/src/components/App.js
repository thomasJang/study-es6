import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../routes/Home';
import About from '../routes/About';
import Posts from '../routes/Posts';
import NoMatch from '../routes/NoMatch';
import Header from '../components/Header';

import './App.css';

const App = () => {
    return (
        <Router>
          <div>
            <Header/>
            <div className="body">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about/:username" component={About}/>
                <Route path="/posts" component={Posts}/>
                <Route component={NoMatch}/>
              </Switch>
            </div>
          </div>
        </Router>
    );
};

export default App;
