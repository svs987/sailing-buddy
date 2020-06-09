import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native';

const AuthPage = (props) => {
    const [authorisationCode, onChangeAuthorisationCode] = React.useState('');

    

    return (
        <View>
            <Text>Welcome to Sailing Buddy</Text>
            <Text>Please enter the authorisation code sent to you by your yacht club</Text>
            <TextInput
                placeholder="Authorisation code"
                style={styles.inputbox}
                onChangeText={text => onChangeAuthorisationCode(text)}
            />
            <Button onPress={()=>{props.handleAuthorisationCode(authorisationCode, props.setAuthorised)}} title="Log In" />
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
  });


export { AuthPage };