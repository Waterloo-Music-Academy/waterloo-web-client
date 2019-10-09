import React, {Component} from 'react';
import { Router, Route, BrowserRouter } from "react-router-dom";
import HomePage from './home/HomePage';
import ArticlePage from './article/ArticlePage';

class Root extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route path="/" component={HomePage} />
          <Route path="/news/:id" component={ArticlePage} />
        </BrowserRouter>
      </div>
    )
  }
}

export default Root;
