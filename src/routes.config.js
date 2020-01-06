import {
  Route,
  makeRouteConfig
} from 'found';
import App from './App';
import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import MainPage from './MainPage';
import ArticleContainer from './Article'
import ArticleListContainer from './ArticleList';

const routeConfig = makeRouteConfig(
  <Route
    path="/"
    Component={App}
  >
    <Route Component={MainPage} />
    <Route path="news">
      <Route
        Component={ArticleListContainer}
        query={graphql`
            query routes_ArticleList_Query(
            $count: Int!
            $cursor: String
        ) {
            articles(first: $count, before:$cursor) @connection(key: "ArticleList_articles") {
                ...ArticleList_articles
            }
        }
        `}
        prepareVariables={() => {
          return {
            count: 3,
            cursor: ''
          }
        }}
      />
      <Route
        path=":id"
        Component={ArticleContainer}
        query={graphql`
            query routes_Article_Query($id:ID!) {
                article(id: $id) {
                    ...Article_article
                }
            }
        `}
        prepareVariables={(params) => {
          return {
            id: btoa(`ArticleNode:${params.id}`)
          }
        }}
      />
    </Route>
  </Route>
);

export default routeConfig;
