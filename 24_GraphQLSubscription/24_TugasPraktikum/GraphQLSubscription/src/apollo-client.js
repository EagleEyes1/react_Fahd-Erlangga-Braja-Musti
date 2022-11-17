import { ApolloClient, InMemoryCache } from "@apollo/client";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
    uri: "https://growing-grub-91.hasura.app/v1/graphql",
    headers: {
        "x-hasura-admin-secret": "LfCpAw86Suq8zvdIAO1qgy9db46VgC8yeVn13pGwWJTd2hVYR8pllMRsGBYBCHLJ",
    },
});

const wsLink = new GraphQLWsLink(
    createClient({
        url: "ws://growing-grub-91.hasura.app/v1/graphql",
        connectionParams: {
            headers: {
                "x-hasura-admin-secret": "LfCpAw86Suq8zvdIAO1qgy9db46VgC8yeVn13pGwWJTd2hVYR8pllMRsGBYBCHLJ",
            },
        },
    })
);

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === "OperationDefinition" && definition.operation === "subscription";
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;
