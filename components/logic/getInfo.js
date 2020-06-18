import Constants from 'expo-constants';
/* This code does a get both on the skipper invites endpoint and on the authorisation codes endpoint. The logic
is identical, only the endpoint is different 
*/

const getInfo = (url, jwtBearerToken, authCode) => {
    console.log('in getInfo. AuthCode is: ', authCode);
    if (authCode) {
        url += '?AuthCode=' + authCode;
    }
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + jwtBearerToken},
    };
    console.log('in getInfo. url is: ', url);
    console.log ('jwtBearer token is: ', jwtBearerToken)

    return fetch(url, requestOptions);

};

export { getInfo };