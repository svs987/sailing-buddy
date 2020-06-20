import React, { useState } from 'react';

import { StyleSheet, Text, KeyboardAvoidingView, View } from 'react-native';
import { TextInput, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateInput } from './DateInput';
import { getAuthorisationCode } from './logic/GetAuthorisationCode';
import Constants from 'expo-constants';
import { getAccessToken } from './logic/getAccessToken';

/**
 * 
 */
const CreateInvitePage = ({ navigation }) => {
	const [skipperName, onChangeSkipperText] = React.useState('Captain Skipper');
	const [vesselName, onChangeVesselText] = React.useState('Titanic');
	const [contactDetails, onChangeContactDetails] = React.useState('');
	const [tripDescription, onChangeTripDescription] = React.useState('');
	const [date, setDate] = useState(new Date());
	const [show, setShow] = useState(false);

	const showDatepicker = () => {
		setShow(true);
	};

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === 'ios');
		setDate(currentDate);
	};

	const sendInvitation = (authorisationCode) => {
		console.log('sending Invitation');
		getAccessToken()
			.then(accessResponse => {
				console.log("Turning access token to json... ");
				return accessResponse.json();
			})
			.then(accessData => {
				console.log('Access data is: ', accessData);
				const requestOptions = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'authorization': 'Bearer ' + accessData.access_token
					},
					body: JSON.stringify({
						skipperName: skipperName,
						vesselName: vesselName,
						contactDetails: contactDetails,
						date: date,
						tripDescription: tripDescription,
						authorisationCode: authorisationCode,
					})
				};
				return fetch(Constants.manifest.extra.apiUrl, requestOptions);
			})
			.then(response => response.json())
			.catch(err => console.log('There was an error:' + err)); //return to the home page once the response has been received.

	};


	const submit = () => {
		getAuthorisationCode()
			.then(authCode => sendInvitation(authCode))
			.then(() => navigation.navigate('MainSkipper', { reload: true }))
			.catch(err => console.log('There was an error:' + err));

	};


	return (
		<KeyboardAwareScrollView
			resetScrollToCoords={{ x: 0, y: 0 }}
			contentContainerStyle={styles.container}
			scrollEnabled={true}
		>
			<Text style={styles.inputBoxHeading}>I am going sailing on:</Text>
			<DateInput date={date} onChange={onChange} />
			<Text style={styles.inputBoxHeading}>My name is:</Text>
			<TextInput
				placeholder="Skipper name"
				style={styles.inputbox}
				onChangeText={text => onChangeSkipperText(text)}
			/>
			<Text style={styles.inputBoxHeading}>The name of my vessel is:</Text>
			<TextInput
				placeholder="Vessel name"
				style={styles.inputbox}
				onChangeText={text => onChangeVesselText(text)}
			/>
			<Text style={styles.inputBoxHeading}>The description of the trip is (e.g. Day Racing, Weekend Cruise):</Text>
			<TextInput
				placeholder="Trip Description..."
				style={styles.contactDetails}
				onChangeText={text => onChangeTripDescription(text)}
				multiline={true}
			/>
			<Text style={styles.inputBoxHeading}>My contact details are:</Text>
			<TextInput
				placeholder="Contact details..."
				style={styles.contactDetails}
				onChangeText={text => onChangeContactDetails(text)}
				multiline={true}
			/>

			<Button onPress={submit} title="Send invitation" />
			<View style={{ height: 60 }} />
		</KeyboardAwareScrollView>
	)

}

const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		paddingHorizontal: 20,
	},
	inputbox: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
	},
	contactDetails: {
		height: 80,
		borderColor: 'gray',
		borderWidth: 1,

	},
	inputBoxHeading: {
		paddingVertical: 10,
	}
});

export { CreateInvitePage };
