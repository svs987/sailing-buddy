import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

const getAuthorisationCode = () => {
    var authorisationCode;
    const authorisationCodeKey = Constants.manifest.extra.authorisationCodeKey;
    console.log("authorisationCodeKey: ", authorisationCodeKey);    
    return SecureStore.getItemAsync(authorisationCodeKey);
}

export { getAuthorisationCode };
