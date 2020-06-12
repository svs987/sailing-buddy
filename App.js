import React, {useState, useReducer, createContext} from 'react';
import { StyleSheet, View } from 'react-native';
import { CreateInvitePage } from './components/CreateInvitePage';
import {HomePage} from './components/HomePage';
import {AuthPage} from './components/AuthPage';
import {TandCPage} from './components/TandCPage';
import {ViewInvitesPage} from './components/ViewInvitesPage'; 
import {MainSkipperPage} from './components/MainSkipperPage'; 
import {TopBar} from './components/TopBar';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthenticationContext = createContext(null);

 
export default function App() {
  const [currentPage, onChangePage] = React.useState(1);
  const authenticationReducer = (state, action) => {
    if (action.type=='SET_AUTHENTICATED') {
      return 'AUTHENTICATED';
    } else {
      return 'NOT_AUTHENTICATED';
    }

  }

  const [isAuthorised, dispatchAuthorised] = useReducer(authenticationReducer, 'NOT_AUTHENTICATED');
  

	const Stack = createStackNavigator();

	return (
    isAuthorised=='NOT_AUTHENTICATED' ? (
      <AuthenticationContext.Provider value={dispatchAuthorised}>
      <NavigationContainer initialRouteName="Authorise">
      <Stack.Navigator>
      <Stack.Screen
          name="Authorise"
          component={AuthPage}
          options={{ title: 'SailingBuddy' }}
        />
			<Stack.Screen
          name="TandC"
          component={TandCPage}
          options={{ title: 'Terms and Conditions' }}
        />
      </Stack.Navigator>
      </NavigationContainer>
      </AuthenticationContext.Provider>
    ) : ( 
		<NavigationContainer initialRouteName="Home">
			<Stack.Navigator>
			<Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'SailingBuddy' }}
        />
			<Stack.Screen
          name="TandC"
          component={TandCPage}
          options={{ title: 'Terms and Conditions' }}
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
    )
	);
}

const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	  },
	});

export { AuthenticationContext };

	