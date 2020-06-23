import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { InviteLine } from './InviteLine';
import Constants from 'expo-constants';
import { getInfo } from './logic/getInfo';
import { getAccessToken } from './logic/getAccessToken';

/**
 * 
 */
const ViewInvitesPage = ({ onChoose }) => {
	const [isLoading, setLoading] = React.useState(true);
	const [skipperInvites, setSkipperInvites] = React.useState();
	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	};


	const compareInvites = (a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);

		return (dateA - dateB);
	}

	useEffect(() => {
		console.log("Fetching skipper invites...");
		getAccessToken()
			.then(accessResponse => {
				console.log("Turning access token to json... ");
				return accessResponse.json();
			})
			.then(accessData => {
				return getInfo(Constants.manifest.extra.apiUrl, 'authorization', 'Bearer ' + accessData.access_token)
			})
			.then(response => response.json())
			.then(data => {
				data.Items.sort(compareInvites);
				setSkipperInvites(data);
				setLoading(false);
				console.log('Data:', data);
			})
			.catch((error) => { 
				console.log('Error in ViewInvitesPage.useEffect', error);
				alert('Cannot access trips list. Please check your network connection and try again');
			})
 
	}, []); // the blank array param means that this will not be reloaded because of setting the state




	return (
		<View style={styles.container}>
			{isLoading && (<Text>Fetching invites</Text>)}

			{!isLoading && (
				<View style={styles.results}>
					<Text style={styles.hint}>Touch an entry to see the contact details</Text>
					<FlatList
						data={skipperInvites.Items}
						renderItem={({ item }) => <InviteLine key={item.id} item={item} delete={false} />}
						keyExtractor={item => item.id}
					/>
				</View>

			)}
			<View style={styles.backButton}>
			</View>
		</View>
	)

}

// 			  		        <Text key={item.skipperName}>{item.skipperName} {item.vesselName} {item.date}</Text>


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	results: {
		flex: 1,
		paddingTop: 10,
	},
	hint: {
		paddingBottom: 30,
	},
	backButton: {
		paddingBottom: 20,
	},

});

export { ViewInvitesPage };
