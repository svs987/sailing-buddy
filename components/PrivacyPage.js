import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

/**
 * 
 */
const PrivacyPage = ({navigation}) => {


	return (
        <View style={styles.container}>
            <ScrollView style={styles.body}>
				<Text> {`Privacy Policy
This app collects the following types of data:

1: Data entered by users. Users create an invitation to go sailing (a Trip Invitation) by typing in their name, the name of their vessel, a description of the trip, their contact details and the intended date of the trip.
In order for crew to view trips, this data is stored centrally and displayed to users from the same yacht club only.
If a skipper deletes an invitation, the data is deleted and is not retained centrally.
When the date of the trip is passed then the system automatically deletes the trip data.

2: Authorisation data. The App can only be used by members of participating yacht clubs. When a user is authorised to use the App, we store the authorisation code, a user name and e-mail address and the name of the user's yacht club.
The authorisation code and the yacht club name are required for the functioning of the app. 
The user's name and e-mail address will only be used to communicate with the user in case of a query about the content that they have placed on the app.

3: Logging data. This data records when a user took an action, i.e. to create, view or delete a trip. This data is used by the developers of Sailing Buddy in order to diagnose any potential problems with the app.
Logging data is retained for 30 days from the point of creation.

All data is held securely and only accessible to developers of the App. We will not share any of this data with any third parties unless we are required to by law.

You can revoke your consent for us to use your data (which was given to us when you accepted the Terms and Conditions) either by asking your participating yacht club that you be removed from the app, or by e-mailing us at info@stonivale.co.uk

As noted above, you can delete your trip data at any time. If you want us to delete your authorisation data then you can either ask your participating yacht club or email us at info@stonivale.co.uk.
`}
 </Text>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
});

export { PrivacyPage };
