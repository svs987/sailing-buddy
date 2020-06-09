import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { InviteLine } from './InviteLine';
import Constants from 'expo-constants';

/**
 * 
 */
const MainSkipperPage = ({ navigation, route }) => {
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

        console.log("isLoading: ", isLoading);
        console.log('route.params: ', route.params)
        if (isLoading || (route && route.params && route.params?.reload)) {
            console.log("Fetching skipper invites...");
            fetch(Constants.manifest.extra.apiUrl, requestOptions)
                .then(response => response.json())
                .then(data => {
                    data.Items.sort(compareInvites);
                    setSkipperInvites(data);
                    setLoading(false);
                    route.params = false;
                    console.log('Data:', data);
                })
                .catch((error) => { console.log(error) })
        }

    });




    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate('SkipperInvite')} title="Create New Trip" />
            {isLoading && (<Text>Fetching invites</Text>)}

            {!isLoading && (
                <View style={styles.results}>
                    <Text style={styles.hint}>Touch an entry to see the full details and for the option to delete the trip</Text>
                    <FlatList
                        data={skipperInvites.Items}
                        renderItem={({ item }) => <InviteLine key={item.id} item={item} delete={true} setLoading={setLoading} />}
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
        paddingHorizontal: 20,

    },
    hint: {
        paddingBottom: 30,
    },
    backButton: {
        paddingBottom: 20,
    },

});

export { MainSkipperPage };
