import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}`,
  credentials: 'include', // This is correct
});

// Add this auth link to handle tokens if needed
const authLink = setContext((_, { headers }) => {
  // Get the token from cookies if needed
  return {
    headers: {
      ...headers,
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  credentials: 'include', // Add this
});