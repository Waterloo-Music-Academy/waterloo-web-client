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
    data: graphql`
        fragment ArticleList_articles on RootQuery
        @argumentDefinitions(
            count: {type: "Int", defaultValue: 10}
            cursor: {type: "String"}
        ) {
            articles(
                first: $count
                after: $cursor
            ) @connection(key: "ArticleList_articles") {
                edges {
                    node {
                        id
                        ...Article_article
                    }
                }
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
            ...ArticleList_articles @arguments(count: $count, cursor: $cursor)
        }
    `
  }
);

export default ArticleListContainer;
