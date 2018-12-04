module.exports = {
  graphqlUrl: process.env.REACT_APP_API_URL || 'http://localhost:5001/graphql',
  graphqlWsUrl:
    process.env.REACT_APP_WS_API_URL || 'ws://localhost:5000/subscriptions'
}
