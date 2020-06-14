import * as SecureStore from 'expo-secure-store';
import Constants from 'expo-constants';
import { getInfo } from './getInfo';


const checkAuthCode = async (authorisationCode) => {
    const url = Constants.manifest.extra.authCodeUrl;
    console.log('url: ', url);

    const response = await getInfo(url, authorisationCode);
    const jsonResponse = await response.json();
    console.log('response:', jsonResponse);
    if (jsonResponse && jsonResponse.Item && jsonResponse.Item.id) //If the query returns a non-empty item then there must be a matching code in the authorisation database
        return true;
    else
        return false;
}

const handleAuthCode = async (authorisationCode) => {
    const valid = await checkAuthCode(authorisationCode);
    var result = false;
    console.log('result for checkAuthCode', valid);
    if (valid) {
        try {
            await SecureStore.setItemAsync(Constants.manifest.extra.authorisationCodeKey, authorisationCode)
            console.log('AuthCode stored');
            result = true;
        }
        catch {
            console.log('There was an error:' + err);
        }
    }
    return result;

};

export { handleAuthCode };