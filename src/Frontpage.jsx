import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from './relayEnvironment';
import graphql from 'babel-plugin-relay/macro';

export default class Frontpage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}
