import React from 'react';
import {createFragmentContainer} from 'react-relay';
import ReactMarkdown from 'react-markdown';
import { graphql } from 'graphql';

class Article extends React.Component {
  render() {
    const article = this.props.article;

    if (this.props.error) {
      return <div>{this.props.error.message}</div>
    } else if (this.props) {
      return (
        <div>
          <h1>{article.title}</h1>
          <ReactMarkdown source={article.body} />
        </div>
      )
    }

    return <div>Loading...</div>
  }
}

export default createFragmentContainer(Article, {
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