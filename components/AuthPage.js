import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native';
import { handleAuthCode } from './logic/handleAuthCode';
import { CheckBox } from 'react-native-elements';
import { store } from '../state/store';


const AuthPage = ({ navigation }) => {
    const [authorisationCode, onChangeAuthorisationCode] = useState('');
    const isAuthorised = useContext(store);
    const { dispatch } = isAuthorised;
    let [, setState] = useState();

    console.log('Render!');
    console.log('isAuthorised: ', isAuthorised.state.authenticated);

    const handleValidation = async () => {
        res = await handleAuthCode(authorisationCode);
        console.log('return from handleAuthCode', res);
        if (res) {
            dispatch({ type: 'SET_AUTHENTICATED' });
            if (isAuthorised.state.termsaccepted == 'ACCEPTED') {
                dispatch({ type: 'SET_AUTH_PAGE_COMPLETED' }); //We can move on to the main app
            } else {
                dispatch({type: 'SET_TERMS_NOT_ACCEPTED'}); // Show that the terms and conditions need to be accepted
            }
        } else {
            dispatch({ type: 'VALIDATION_FAILED' });
        }
    }

    return (
        <View>
            <Text>Welcome to Sailing Buddy</Text>
            <Text>Please enter the authorisation code sent to you by your yacht club</Text>
            <TextInput
                placeholder="Authorisation code"
                style={styles.inputbox}
                onChangeText={text => onChangeAuthorisationCode(text)}
            />
            {isAuthorised.state.authenticated == 'VALIDATION_FAILED' &&
                <View>
                    <Text style={styles.authorisationError}>Error validating authorisation code. </Text>
                    <Text style={styles.authorisationError}>Please check that you have entered the correct code.</Text>
                    <Text style={styles.authorisationError}>If you continue to have problems please contact your Yacht Club</Text>
                </View>
            }
            <Text>Please review the terms and conditions</Text>
            <Button onPress={() => {
                console.log('T&C button pressed');
                return navigation.navigate('TandC')
            }} title="Terms and Conditions" />

            <CheckBox
                title='I have reviewed and accept the Terms and Conditions for this App'
                checked={isAuthorised.state.termsaccepted == 'ACCEPTED'}
                onPress={() => dispatch({ type: 'TOGGLE_TERMS_ACCEPTED' })}

            />
            {isAuthorised.state.termsaccepted == 'NOT_ACCEPTED_FAIL' &&
                <View>
                    <Text style={styles.authorisationError}>Please check the box to confirm that you have read and accept the terms and conditions</Text>
                </View>
            }
            <Button onPress={() => { handleValidation() }} title="Validate Code" />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        paddingTop: 100,
        paddingHorizontal: 20,

    },
    inputbox: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    authorisationError: {
        color: 'red',
    }
});


export { AuthPage };