import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

/**
 * 
 */
const InfoPage = ({ navigation }) => {


	return (
		<View style={styles.container}>
			<View style={styles.body}>
				<Text style={styles.text}>View our privacy policy</Text>
				<Button onPress={() => navigation.navigate('Privacy')} title="Privacy Policy" />
				<Text style={styles.text}>View our terms and conditions</Text>
				<Button onPress={() => navigation.navigate('TandC')} title="Terms and Conditions" />
			</View>
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
	text: {
		paddingVertical: 5,
	},

});

export { InfoPage };
