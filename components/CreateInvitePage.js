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

	const sendInvitation = async (authorisationCode) => {
		try {
			var res = false;
			console.log('sending Invitation');
			const accessToken = await getAccessToken();
			const requestOptions = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'authorization': 'Bearer ' + accessToken
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
			const response = await fetch(Constants.manifest.extra.apiUrl, requestOptions);
			console.log('response received');
			res = true;
			await response.json();
			return new Promise((resolve, reject) => {
				resolve(res);
			}
			)
		}
		catch{
			console.log('Error in CreateInvitePage.sendInvitation', error);
			return new Promise((resolve, reject) => {
				reject(`Error in CreateInvitePage.sendInvitation${error}`);
			})
		}


	};


	const submit = () => {
		getAuthorisationCode()
			.then(authCode => {
				console.log('Got authCode, sending invitation');
				return sendInvitation(authCode);
			})
			.then((res) => {
				console.log('res is:', res);
				if (res) {
					navigation.navigate('MainSkipper', { reload: true })
				}
			})
			.catch((error) => {
				console.log('Error in CreateInvitePage.submit', error);
				alert('Cannot save trip. Please check your network connection and try again');
			})

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
