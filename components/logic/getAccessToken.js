import Constants from 'expo-constants';

var accessData = null;

const isExpired = () => {
    return (new Date).getTime() > accessData.expireTime;
}

const getAccessToken = async () => {
    console.log('in getAccessToken. ');
    if (!accessData || isExpired()) {
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
        accessData = await accessResponse.json();
        console.log('Access data retrieved: ', accessData);
        accessData.expireTime = (new Date).getTime() + accessData.expires_in*900; //Ensure we ask for the token again before it expires
    }

    return accessData.access_token;
};

export { getAccessToken };