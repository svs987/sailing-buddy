import React, {useState} from 'react';

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import{DateInput} from './DateInput';
import Constants from 'expo-constants';

/**
 * 
 */
const SkipperInvitePage = ({onChoose}) => {
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
		  
	  const submit = () => {
		  const requestOptions = {
				  method: 'POST',
				  headers: { 'Content-Type': 'application/json' },
				  body: JSON.stringify({ skipperName: skipperName,
					  vesselName: vesselName,
					  contactDetails: contactDetails,
					  date: date, 
					  tripDescription: tripDescription,
				 })
		  };
		  fetch(Constants.manifest.extra.apiUrl, requestOptions)
		  .then(response => response.json())
		  .then(() => onChoose(1)); //return to the home page once the response has been received.

	  };

	return (
			<ScrollView style={styles.container}>
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
				
				<Text style={styles.inputBoxHeading}>I am going sailing on:</Text>
				<DateInput date={date} onChange={onChange} />
				<Button onPress={submit} title="Send invitation" />  	    	  
				<Button onPress={() => onChoose(1)} title="Back" />  	    	  
			</ScrollView>
	)

}

const styles = StyleSheet.create({
	  container: {
	    flex: 1,
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

export { SkipperInvitePage };
