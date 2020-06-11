import Constants from 'expo-constants';

const getSkipperInvites = (authCode) => {
    let url = Constants.manifest.extra.apiUrl;
    console.log('in getSkipperInvites. AuthCode is: ', authCode);
    if (authCode) {
        url += '?AuthCode=' + authCode;
    }
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
};
console.log('in getSkipperInvites. url is: ', url);

    return fetch(url, requestOptions);

};

export {getSkipperInvites};