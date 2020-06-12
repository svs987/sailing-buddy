import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native';
import { handleAuthCode } from './logic/handleAuthCode';
import { AuthenticationContext } from '../App';

const AuthPage = ({ navigation }) => {
    const [authorisationCode, onChangeAuthorisationCode] = React.useState('');
    const [authorisationError, setAuthorisationError] = React.useState(false);
    const dispatch = useContext(AuthenticationContext);



    return (
        <View>
            <Text>Welcome to Sailing Buddy</Text>
            <Text>Please enter the authorisation code sent to you by your yacht club</Text>
            <TextInput
                placeholder="Authorisation code"
                style={styles.inputbox}
                onChangeText={text => onChangeAuthorisationCode(text)}
            />
            {authorisationError &&
                <View>
                    <Text style={styles.authorisationError}>Error validating authorisation code. </Text>
                    <Text style={styles.authorisationError}>Please check that you have entered the correct code.</Text>
                    <Text style={styles.authorisationError}>If you continue to have problems please contact your Yacht Club</Text>
                </View>
            }
            <Text>Please view the terms and conditions</Text>
            <Button onPress={() => {
                console.log('T&C button pressed');
                return navigation.navigate('TandC')
            }} title="Terms and Conditions" />
            <Button onPress={() => { handleAuthCode(authorisationCode, dispatch, setAuthorisationError) }} title="Validate Code" />
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