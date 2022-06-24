import { ApolloProvider, gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { client } from './lib/apollo';
import { Event } from './pages/Event';
import { Router } from './Router';




function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
