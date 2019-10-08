import React, {Component} from 'react';
import {Router, Route} from "react-router-dom";
import HomePage from './home/HomePage';
import ArticlePage from './article/ArticlePage';

class Root extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Route path="/" component={HomePage} />
          <Route path="/news/:id" component={ArticlePage} />
        </Router>
      </div>
    )
  }
}

export default Root;
