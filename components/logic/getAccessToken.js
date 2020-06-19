import Constants from 'expo-constants';

const getAccessToken = () => {
    console.log('in getAccessToken. ');
    const url = Constants.manifest.extra.getAccessTokenUrl;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: Constants.manifest.extra.getAccessTokenBody,

    };
     console.log('in getAccessToken. url is: ', url);
    console.log('requestOptions are: ', requestOptions);

    return fetch(url, requestOptions);

};

export { getAccessToken };