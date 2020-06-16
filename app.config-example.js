// app.config.js

export default ({ config }) => {
    console.log(config.name); // prints 'My App'

    return {
      ...config,
      extra: {
        apiUrl: '---Replace this with the url of your skipper api---',
        authCodeUrl: '---Replace this with the url of your auth code api---',
        authorisationCodeKey: "---Reaplce this with the Key to your Authorisation Code in the secure store",
        fact: 'kittens are cool',
        },
    };
  };
