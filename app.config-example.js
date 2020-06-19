// app.config.js

export default ({ config }) => {
    console.log(config.name); // prints 'My App'

    return {
      ...config,
      extra: {
        apiUrl: '---Replace this with the url of your skipper api---',
        authCodeUrl: '---Replace this with the url of your auth code api---',
        authorisationCodeKey: "---Reaplce this with the Key to your Authorisation Code in the secure store",
        getAccessTokenUrl: "---Replace this with the url of the service that provides your access token ---",
        getAccessTokenBody: '---Replace this with the body info for the service that provides your access token ---',
        authorisationCodeApiKey: "---Replace this with the value of the api key for the Aurhtorisation Code API---",
        environment: ' ---String displayed in the header so you can tell which environment you are testing in---',
        },
    };
  };
