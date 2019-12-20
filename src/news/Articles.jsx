import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'graphql';

class Articles extends React.Component {
  render() {
    return (
      <h1>This is the news app home page.</h1>
    )
  }
}

export default createFragmentContainer(Articles,
  {
    articles: graphql`
        
    `
  })
