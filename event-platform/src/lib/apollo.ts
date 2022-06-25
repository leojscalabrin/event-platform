import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ub2xou0slg01t7g215h0ge/master',
    cache: new InMemoryCache()
})