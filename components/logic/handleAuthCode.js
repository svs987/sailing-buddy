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

const handleAuthCode = async (authorisationCode, setAuthorised,setAuthorisationError) => {
    const valid = await checkAuthCode(authorisationCode);
    if (valid) {
        SecureStore.setItemAsync(Constants.manifest.extra.authorisationCodeKey, authorisationCode)
            .then(res => { setAuthorised(true) })
            .catch(err => { console.log('There was an error:' + err);
                            setAuthorisationError(true)});
    } else {
        setAuthorisationError(true);
    }

};

export { handleAuthCode };