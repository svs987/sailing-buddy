import Constants from 'expo-constants';
import { getAuthorisationCode } from './GetAuthorisationCode';
import { getAccessToken } from './getAccessToken';


const deleteTrip = async (theId, setLoading) => {
    try {
        console.log('Deleting...', theId);
        var jwtBearerToken = null;

        jwtBearerToken = await getAccessToken();
        const authCode = await getAuthorisationCode();
        console.log('Deleting...In deleteTrip. Got authCode ');
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + jwtBearerToken,
            },
            body: JSON.stringify({
                id: theId,
                authorisationCode: authCode,
            })
        };
        const response = await fetch(Constants.manifest.extra.apiUrl, requestOptions);
        await response.json();
        setLoading(true);						//force a reload of the list
        console.log('Deleting...call returned successfully');
    }
    catch {
        console.log('Deleting...There was an error:');
        alert('Item could not be deleted. Please check your network connections and try again later');
    } //return to the home page once the response has been received.

};

export { deleteTrip };