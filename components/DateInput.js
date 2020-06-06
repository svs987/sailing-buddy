import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
/**
 * 
 */
const DateInput = (props) => {
	
	const [show, setShow] = useState(false);

	const showDatepicker = () => {
	    setShow(true);
	  };
	  
	  console.log(props.date);
	  

	return (
			<View>
				<TouchableOpacity style={styles.button} onPress={()=>{setShow(true);}}>
			<Text style={styles.dateStyle}>{props.date.toLocaleDateString()}</Text>
			</TouchableOpacity>
			{show && (
					<View>
					<DateTimePicker
						testID="dateTimePicker"
						value={props.date}
						minimumDate={new Date()}
						mode="date"
						is24Hour={true}
						display="default"
						onChange={props.onChange}
					/>
					<Button onPress={()=>{setShow(false);}} title="Done" />
					</View>
			)}
			</View>

)
}

const styles = StyleSheet.create({
	 button: {
		    alignItems: "center",
		    padding: 10
		  },
	  dateStyle: {
		  fontSize: 18,
		  color: '#4187ff',
	  }
	});

export {DateInput};

