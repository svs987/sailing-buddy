import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AuthPage } from './AuthPage';
import { handleAuthCode} from './logic/handleAuthCode';

/**
 * 
 */
const HomePage = ({navigation}) => {
	const [isAuthorised, setAuthorised] = React.useState(false);


	return (
		<View style={styles.container}>
		{!isAuthorised &&
			<View>
				<AuthPage setAuthorised = {setAuthorised} handleAuthorisationCode = {handleAuthCode} />
			</View>
		}
		{isAuthorised &&
				<View style={styles.body}>
					<Text>If you're a skipper and you want to invite crew to sail with you, press Skipper</Text>
					<Button onPress={() => navigation.navigate('MainSkipper')} title="Skipper" />  	    	  
						<Text>If you're a crew and you want to find a boat to sail on, press Crew</Text>
						<Button onPress={() => navigation.navigate('ViewInvites')} title="Crew" />  	    	  
				</View>
		}
		</View>
	)

}

const styles = StyleSheet.create({
	  container: {
		flex: 1,
		paddingHorizontal: 20,
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

export { HomePage };
