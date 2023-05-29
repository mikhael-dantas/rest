// component that provides the context to the app, includding apollo client provider
"use client"
import React from 'react';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export const Providers: React.FC<
    React.PropsWithChildren
> = ({ children }) => {
    const client = new ApolloClient({
        uri: "http://localhost:3041/graphql",
        // uri: 'https://backend:3041/graphql',
        cache: new InMemoryCache(),
      });
    return (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
    )
};
