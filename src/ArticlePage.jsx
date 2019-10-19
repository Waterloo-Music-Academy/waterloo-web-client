import React from 'react';
import {QueryRenderer} from 'react-relay';
import environment from './relayEnvironment';
import Article from './Article';
import { articleQuery } from './queries';

class ArticlePage extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={articleQuery}
        variables={{
          id: btoa("ArticleNode:"+this.props.match.params.id)
        }}
        render={({err, props}) => {
          if (err) {
            return err
          } else if (props) {
            console.log(btoa("ArticleNode:"+this.props.match.params.id));
            return <Article article={props.article} />
          }

          return <p>Loading... {this.props.match.params.id}</p>
        }}
      />
    )
  }
}

export default ArticlePage;
