import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { SkipperInvitePage } from './components/SkipperInvitePage';
import {HomePage} from './components/HomePage';
import {ViewInvitesPage} from './components/ViewInvitesPage'; 
import {TopBar} from './components/TopBar';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
export default function App() {
	const [currentPage, onChangePage] = React.useState(1);

	const Stack = createStackNavigator();

	return (
		<NavigationContainer initialRouteName="Home">
			<Stack.Navigator>
			<Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'SailingBuddy' }}
        />
		<Stack.Screen
          name="SkipperInvite"
          component={SkipperInvitePage}
          options={{ title: 'Skipper' }}
        />
		<Stack.Screen
          name="ViewInvites"
          component={ViewInvitesPage}
          options={{ title: 'Crew' }}
        />
			</Stack.Navigator>
			</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	  },
	});


	