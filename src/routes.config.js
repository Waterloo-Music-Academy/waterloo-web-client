import {
  Route,
  makeRouteConfig
} from 'found';
import App from './App';
import Article from './news/Article'
import React from 'react';
import { graphql } from 'graphql';
import Articles from './news/Articles';

const routeConfig = makeRouteConfig(
  <Route
    path="/"
    Component={App}
  >
    <Route path="news">
      <Route
        Component={Articles}
        query={graphql`
            query routes_Articles_Query {
                articles {
                    edges {
                        node {
                            ...Article_article
                        }
                    }
                }
            }
        `}
      />
      <Route
        path=":id"
        Component={Article}
        query={graphql`
            query routes_Article_Query($id:ID!) {
                article(id: $id) {
                    ...Article_article
                }
            }
        `}
        />
    </Route>
  </Route>
);

export default routeConfig;
