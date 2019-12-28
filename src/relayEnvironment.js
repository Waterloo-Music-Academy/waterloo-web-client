import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';

const endpoint = process.env.NODE_ENV === 'development' ? 'http://debian:8000/graphql' : '';

function fetchQuery(operation,
                    variables,
                    cacheConfig,
                    uploadables) {
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    }),
  }).then(res => {
    return res.json();
  })
}

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

const environment = new Environment({
  network,
  store
});

export default environment;
