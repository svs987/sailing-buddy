import Constants from 'expo-constants';

const getAccessToken = async () => {
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
    const accessResponse = await fetch(url, requestOptions);
    console.log("Turning access token to json... ");
    const accessData = await accessResponse.json();
    console.log('Access data retrieved');

    return accessData.access_token;
};

export { getAccessToken };