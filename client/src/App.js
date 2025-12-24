// import necessary modules and components
import './App.css';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react'
import DisplayData from './DisplayData';

// main App component
function App() {

  // create Apollo Client
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'http://localhost:4000/graphql'
    })
  });

  // wrap the application with ApolloProvider
  return <ApolloProvider client={client}>
    <div className="App">
      <DisplayData />
    </div>
  </ApolloProvider>
}

// export the App component
export default App;
