import React from 'react';
import Header from './components/Header';
import './App.css';
import LoginPage from './components/LoginPage';

import Search from './components/SearchPage';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Router>
    </div>
  );
}

export default App;
