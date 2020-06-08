import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { CreateInvitePage } from './components/CreateInvitePage';
import {HomePage} from './components/HomePage';
import {ViewInvitesPage} from './components/ViewInvitesPage'; 
import {MainSkipperPage} from './components/MainSkipperPage'; 
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
          component={CreateInvitePage}
          options={{ title: 'New Invite' }}
        />
		<Stack.Screen
          name="ViewInvites"
          component={ViewInvitesPage}
          options={{ title: 'Crew' }}
        />
		<Stack.Screen
          name="MainSkipper"
          component={MainSkipperPage}
          options={{ title: 'Skipper' }}
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


	