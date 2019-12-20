import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserProtocol, queryMiddleware } from 'farce';
import {
  createFarceRouter,
  createRender
} from 'found';
import { Resolver } from 'found-relay';

import './static/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import routeConfig from './routes.config';
import environment from './relayEnvironment';


const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig,
  render: createRender({})
});
ReactDOM.render(<Router resolver={new Resolver(environment)} />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
