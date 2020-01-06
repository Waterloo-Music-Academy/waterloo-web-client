import React, { Component } from 'react';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';


const ArticleListContainer = createPaginationContainer(
  class ArticleList extends Component {
    render() {
      return (
        <div>
        </div>
      )
    }
  },
  {
    articles: graphql`
        fragment ArticleList_articles on ArticleNodeEdge {
                node {
                    id
                    ...Article_article
                }
            
        }
    `
  },
  {
    direction: 'forward',
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      };
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
      return {
        count,
        cursor
      };
    },
    query: graphql`
        query ArticleListPaginationQuery(
            $count: Int!
            $cursor: String
        ) {
            articles(first: $count, before: $cursor) @connection(key: "ArticleList_articles") {
                edges {
                    ...ArticleList_articles
                }
            }
        }
    `
  }
);

export default ArticleListContainer;
