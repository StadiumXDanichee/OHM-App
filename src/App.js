import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/drondin/olympus-graph',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Sidebar />
        <Dashboard />
      </div>
    </ApolloProvider>
  );
}

export default App;
