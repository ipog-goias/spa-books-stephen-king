import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList/BookList';
import BookDetail from './components/BookDetail/BookDetail';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/book/:id" component={BookDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
