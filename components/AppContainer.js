import React, { useContext } from 'react';
import { CreateInvitePage } from './CreateInvitePage';
import { HomePage } from './HomePage';
import { AuthPage } from './AuthPage';
import { TandCPage } from './TandCPage';
import { ViewInvitesPage } from './ViewInvitesPage';
import { MainSkipperPage } from './MainSkipperPage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from '../state/store';
import Constants from 'expo-constants';


const AppContainer = () => {
  const context = useContext(store);

  const Stack = createStackNavigator();

  const isAuthPageCompleted = () => {
    console.log('context:', context);
    return context.state.authPageCompleted == 'COMPLETED';
  };

  return (
    !isAuthPageCompleted() ? (
      <NavigationContainer initialRouteName="Authorise">
        <Stack.Navigator>
          <Stack.Screen
            name="Authorise"
            component={AuthPage}
            options={{ title: 'SailingBuddy' +  Constants.manifest.extra.environment }}
          />
          <Stack.Screen
            name="TandC"
            component={TandCPage}
            options={{ title: 'Terms and Conditions' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    ) : (
        <NavigationContainer initialRouteName="Home">
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{ title: 'SailingBuddy' +  Constants.manifest.extra.environment }}
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

export { AppContainer };