import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Hyperlink from 'react-native-hyperlink'
import * as Linking from 'expo-linking';
/**
 * 
 */

const InviteLine = (props) => {
	const [show, setShow] = React.useState(false);
	const [lines, setLines] = React.useState(1);

		const theDate=new Date(props.item.date);

		const onChange = (event) => {
		    setShow(!show);
		    if (lines===1){
				setLines(10);
			}
				else {
					setLines(1);
				}
		  };

		  const handleEmail = (url,text) => {
			  console.log('url is:', url);
			  console.log('text is:', text);
			  Linking.canOpenURL(url).then(supported => {
				if (supported) {
					Linking.openURL(url);
				} else {
				console.log('Cant open url', url);
			}});

		  };

		return (
				<View>
				<TouchableOpacity style={styles.lineItem}
				onPress={onChange}>
				<View style={styles.dateBox}>
  		        <Text>{theDate.getDate()}</Text>
  		        <Text>{theDate.toLocaleString('default', { month: 'short' })}</Text>
  		        </View>
  		      <View style={{flex:1}}>
				<View style={styles.skipperVesselBox}>
					<Text style={styles.skipperName}>{props.item.skipperName}</Text>
					<Text style={styles.vesselName}>{props.item.vesselName}</Text>
					</View>
					<Text numberOfLines={lines} style={styles.tripDescription}>{props.item.tripDescription}</Text>
			  </View>  
  		        </TouchableOpacity>
  		      {show && (
  					<View style={styles.contactDetails}>
					<Hyperlink onPress={ handleEmail } linkStyle={ { color: '#2980b9' }}>
  	  		       		 <Text style={styles.vesselName}>{props.item.contactDetails}</Text> 
				    </Hyperlink>				
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
	
	export {InviteLine};

