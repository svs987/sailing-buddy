import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

/**
 * 
 */
const HomePage = ({onChoose}) => {

	return (
			<View style={styles.container}>
				<View style={styles.body}>
					<Text>If you're a skipper and you want to invite crew to sail with you, press Skipper</Text>
					<Button onPress={() => onChoose(2)} title="Skipper" />  	    	  
						<Text>If you're a crew and you want to find a boat to sail on, press Crew</Text>
						<Button onPress={() => onChoose(3)} title="Crew" />  	    	  
				</View>
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

export { HomePage };
