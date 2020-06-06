// app.config.js

export default ({ config }) => {
    console.log(config.name); // prints 'My App'
    return {
      ...config,
      extra: {
        apiUrl: 'https://f882j66vc0.execute-api.us-east-1.amazonaws.com/default/skipperInviteHandler',
        fact: 'kittens are cool',
        },
    };
  };
