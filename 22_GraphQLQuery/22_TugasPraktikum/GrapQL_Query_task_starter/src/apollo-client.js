import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://growing-grub-91.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret": "LfCpAw86Suq8zvdIAO1qgy9db46VgC8yeVn13pGwWJTd2hVYR8pllMRsGBYBCHLJ"
    }
});

export default client