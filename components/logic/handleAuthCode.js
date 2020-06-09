import * as SecureStore from 'expo-secure-store';
import Constants from 'expo-constants';


const handleAuthCode = (authorisationCode, setAuthorised) => {
    SecureStore.setItemAsync(Constants.manifest.extra.authorisationCodeKey, authorisationCode)
        .then(res => { setAuthorised(true) })
        .catch(err => console.log('There was an error:' + err));

};

export { handleAuthCode };