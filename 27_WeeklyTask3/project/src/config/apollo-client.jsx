import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://natural-boar-47.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret": "Dnv34K0vqfp7yYLZhiCCxwL2rkJo43eaz5UnHDgRauzUBpTyVqUDw5eOZxsJ3Iyp"
    }
});

export default client