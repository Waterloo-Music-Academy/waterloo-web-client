import React, {Component} from 'react';
import {Route, BrowserRouter } from "react-router-dom";
import HomePage from './HomePage';
import ArticlePage from './ArticlePage';

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3 className="text-center">Waterloo Music Academy</h3>
            </div>
          </nav>
          <div id="content">
            <div className="container-fluid">
              <Route path="/" component={HomePage} />
              <Route path="/news/:id" component={ArticlePage} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default Root;
