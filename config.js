module.exports = {
  graphqlUrl:
    process.env.REACT_APP_API_URL || 'http://localhost:5000/graphql',
  graphqlWsUrl:
    process.env.REACT_APP_WS_API_URL || 'ws://localhost:5000/subscriptions',
  gcmSenderId: process.env.GCM_SENDER_ID || '453609108319'
}
