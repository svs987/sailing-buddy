import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native';
import { handleAuthCode } from './logic/handleAuthCode';
import { CheckBox } from 'react-native-elements';
import { store } from '../state/store';


const AuthPage = ({ navigation }) => {
    const [authorisationCode, onChangeAuthorisationCode] = useState('');
    const [tandCAccepted, setTandCAccepted] = useState(false);
    const isAuthorised = useContext(store);
    const { dispatch } = isAuthorised;
    let  [,setState]=useState();
    
    console.log('Render!');
    console.log('isAuthorised: ', isAuthorised.state.authenticated);
    
    return (
        <View>
            <Text>Welcome to Sailing Buddy</Text>
            <Text>Please enter the authorisation code sent to you by your yacht club</Text>
            <TextInput
                placeholder="Authorisation code"
                style={styles.inputbox}
                onChangeText={text => onChangeAuthorisationCode(text)}
            />
            {isAuthorised.state.authenticated=='VALIDATION_FAILED' &&
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
                checked = {tandCAccepted}
                onPress={() => setTandCAccepted(!tandCAccepted)}
                
            />
            <Button onPress={() => { handleAuthCode(authorisationCode, dispatch ) }} title="Validate Code" />
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