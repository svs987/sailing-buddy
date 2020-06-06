import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
/**
 * 
 */

const TopBar = () => {
		return (
				<View style={styles.heading}>
				<Text style={{color:'blue', fontSize: 24, fontWeight: 'bold',}}>Sailing Buddy</Text>
				</View>

	)
}
	
	const styles = StyleSheet.create({
		  heading: {
			  height: 80	,
			  backgroundColor: '#eef',
			  alignItems: 'center',
			  paddingTop: 40
			  ,
		  },
		});
	
	export {TopBar};

