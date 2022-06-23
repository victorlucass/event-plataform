import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q0nw5p302601w714rv2wh8/master',
  cache: new InMemoryCache()
})