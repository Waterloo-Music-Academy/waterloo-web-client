import React from 'react';
import {QueryRenderer} from 'react-relay';
import environment from '../relayEnvironment';
import Article from './Article';
import graphql from 'babel-plugin-relay/macro';

class ArticlePage extends React.Component {
  render() {
    const articleQuery = graphql`
        query ArticlePageQuery($id:ID!) {
            article(id: $id) {
                ...Article_article 
            }
        }
    `;
    return (
      <QueryRenderer
        environment={environment}
        query={articleQuery}
        variables={this.props.match.params.id}
        render={Article}
      />

    )
  }
}

export default ArticlePage;
