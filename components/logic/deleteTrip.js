import Constants from 'expo-constants';
import {getAuthorisationCode} from './GetAuthorisationCode';
import { getAccessToken } from './getAccessToken';


const deleteTrip = (theId, setLoading) => {
    console.log('Deleting', theId);
    var jwtBearerToken = null;

    getAccessToken()
    .then(accessResponse => {
        console.log("Turning access token to json... ");
        return accessResponse.json();
    })
    .then(accessData => {
        console.log('Access data is: ', accessData);
        jwtBearerToken = accessData.access_token;
        return getAuthorisationCode();
    })
        .then(authCode => {
            console.log('In deleteTrip. authCode: ', authCode);
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json',
                'authorization': 'Bearer ' + jwtBearerToken,
            },
                body: JSON.stringify({
                    id: theId,
                    authorisationCode: authCode,
                })
            };
            console.log('requestOptions:', JSON.stringify({ requestOptions }));
            return fetch(Constants.manifest.extra.apiUrl, requestOptions)


        })
        .then(response => response.json())
        .then(() => setLoading(true))						//force a reload of the list
        .catch(err => console.log('There was an error:' + err)); //return to the home page once the response has been received.

};

export { deleteTrip };