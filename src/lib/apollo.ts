import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rlp4k7191001wgayad3rz3/master',
  // uri: 'http://localhost/graphql',
  cache: new InMemoryCache()
})