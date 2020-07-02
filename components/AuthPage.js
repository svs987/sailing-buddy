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
        try {
            const res = await handleAuthCode(authorisationCode);
            console.log('return from handleAuthCode', res);
            if (res) {
                dispatch({ type: 'SET_AUTHENTICATED' });
                if (isAuthorised.state.termsaccepted == 'ACCEPTED') {
                    dispatch({ type: 'SET_AUTH_PAGE_COMPLETED' }); //We can move on to the main app
                } else {
                    dispatch({ type: 'SET_TERMS_NOT_ACCEPTED' }); // Show that the terms and conditions need to be accepted
                }
            } else {
                dispatch({ type: 'VALIDATION_FAILED' });
            }
        } catch {
            console.log('Error in handleValidation');
        };
    }

    return (
        <View style={styles.body}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>Welcome to Sailing Buddy</Text>
            </View>
            <View>
                <Text style={styles.inputBoxHeading}>Please enter the authorisation code sent to you by your yacht club</Text>
                <TextInput
                    placeholder="Authorisation code"
                    style={styles.inputbox}
                    onChangeText={text => onChangeAuthorisationCode(text)}
                />
            </View>
            {isAuthorised.state.authenticated == 'VALIDATION_FAILED' &&
                <View>
                    <Text style={styles.authorisationError}>Error validating authorisation code. </Text>
                    <Text style={styles.authorisationError}>Please check that you have entered the correct code.</Text>
                    <Text style={styles.authorisationError}>If you continue to have problems please contact your Yacht Club</Text>
                </View>
            }
            <View>
                <Text style={styles.inputBoxHeading}>Please review the terms and conditions</Text>
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
            </View>
            <Button onPress={() => { handleValidation() }} title="Validate Code" />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleBox: {
        paddingVertical: 20,
    },
    body: {
        flex: 1,
        paddingHorizontal: 20,

    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    inputbox: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    inputBoxHeading: {
		paddingVertical: 10,
	},

    authorisationError: {
        color: 'red',
    }
});


export { AuthPage };