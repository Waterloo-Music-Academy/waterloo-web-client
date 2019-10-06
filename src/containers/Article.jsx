import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';

class Article extends React.Component {
  render() {
    const article = this.props.article;
    return (
      <h1>{article.title}</h1>
    );
  }
}

export default createFragmentContainer(Article, {
  article: graphql`
    fragment Article_article on ArticleNode {
        title
        body
    }
  `
});
