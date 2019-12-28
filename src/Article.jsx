import React, {Component} from 'react';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const ArticleContainer = createFragmentContainer(
  class Article extends Component {
    render() {
      const article = this.props.article;

      if (this.props.error) {
        return <div>{this.props.error.message}</div>
      } else if (this.props) {
        return (
          <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
          </div>
        )
      }

      return <div>Loading...</div>
    }
  }
  , {
  article: graphql`
      fragment Article_article on ArticleNode {
          createdAt
          title
          standfirst
          body
          authors {
              edges {
                  node {
                      name
                  }
              }
          }
      }
  `
});

export default ArticleContainer;
