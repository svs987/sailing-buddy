import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

const getAuthorisationCode = async () => {
    var authorisationCode;
    const authorisationCodeKey = Constants.manifest.extra.authorisationCodeKey;
    console.log("authorisationCodeKey: ", authorisationCodeKey); 
    authorisationCode =    await SecureStore.getItemAsync(authorisationCodeKey);
    return authorisationCode;
}

export { getAuthorisationCode };
