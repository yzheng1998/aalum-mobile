import ApolloClient from 'apollo-client'
import { AsyncStorage } from 'react-native'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { setContext } from 'apollo-link-context'
import { split } from 'apollo-link'

import config from '../config'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: config.graphqlUrl
})

const subscriptionClient = new SubscriptionClient(config.graphqlWsUrl, {
  reconnect: true
})

const wsLink = new WebSocketLink(subscriptionClient)

const networkLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: token
      }
    }
  }

  return {
    headers
  }
})

export const client = new ApolloClient({
  link: authLink.concat(networkLink),
  cache,
  uri: config.graphqlUrl
})
