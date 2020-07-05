import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Hyperlink from 'react-native-hyperlink'
import * as Linking from 'expo-linking';
import { deleteTrip } from './logic/deleteTrip';
import { text_truncate } from './logic/TextTruncate';

/**
 * 
 */

const InviteLine = (props) => {
	const [show, setShow] = React.useState(false);
	const [lines, setLines] = React.useState(1);
	const months = [
		'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
	];

	const theDate = new Date(props.item.date);

	const onChange = (event) => {
		setShow(!show);
		if (lines === 1) {
			setLines(10);
		}
		else {
			setLines(1);
		}
	};

	const shortDateText = (date) => {
		var month;
		//	const month = new Intl.DateTimeFormat('default', { month: 'short' }).format(date);
		if (Platform.OS === 'ios') {
			month = date.toLocaleDateString('default', { month: 'short' });
			console.log('iOS');
		}
		else {
			console.log('Android');
			month = months[date.getMonth()];

		}
		return month;

	}

	const handleEmail = (url, text) => {
		Linking.canOpenURL(url).then(supported => {
			if (supported) {
				Linking.openURL(encodeURI(url + '?subject=' + text_truncate(props.item.tripDescription, 30)))
					.then(response => {
						console.log('Successfully opened url');
					})
					.catch(err => alert('Error opening url: ' + err));
			} else {
				console.log('Cant open url', url);
			}
		});

	};

	return (
		<View>
			<TouchableOpacity style={styles.lineItem}
				onPress={onChange}>
				<View style={styles.dateBox}>
					<Text>{theDate.getDate()}</Text>
					<Text>{shortDateText(theDate)}</Text>
				</View>
				<View style={{ flex: 1 }}>
					<View style={styles.skipperVesselBox}>
						<Text style={styles.skipperName}>{props.item.skipperName}</Text>
						<Text style={styles.vesselName}>{props.item.vesselName}</Text>
					</View>
					<Text numberOfLines={lines} style={styles.tripDescription}>{props.item.tripDescription}</Text>
				</View>
			</TouchableOpacity>
			{show && (
				<View style={styles.contactDetails}>
					<Hyperlink onPress={handleEmail} linkStyle={{ color: '#2980b9' }}>
						<Text style={styles.vesselName}>{props.item.contactDetails}</Text>
					</Hyperlink>
				</View>
			)}
			{show && props.delete && (
				<View>
					<Button onPress={() => { deleteTrip(props.item.id, props.setLoading) }} title="Delete" />
				</View>

			)}

		</View>

	)
}

const styles = StyleSheet.create({
	lineItem: {
		paddingVertical: 5,
		flexDirection: 'row',
		borderTopWidth: 1,
		borderTopColor: '#777'
	},
	dateBox: {
		alignItems: 'center',
		paddingRight: 10,
		borderRightWidth: 1,
		borderRightColor: 'red',
	},
	skipperVesselBox: {
		flex: 1,
		paddingLeft: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	skipperName: {
		fontWeight: 'bold',
	},
	vesselName: {
		color: '#888'
	},
	contactDetails: {
		color: '#888',
		paddingVertical: 5,
		borderTopWidth: 1,
		borderTopColor: '#ccc'
	},
	tripDescription: {
		paddingLeft: 10,

	}
});

export { InviteLine };

