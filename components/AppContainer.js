import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
import { getAuthorisationCode } from './logic/GetAuthorisationCode';
import { checkAuthCode } from './logic/handleAuthCode';



const AppContainer = () => {
  const context = useContext(store);
  const { dispatch } = context;
  const [loading, setLoading] = useState(true);

  const Stack = createStackNavigator();

  useEffect(() => {
    getAuthorisationCode()
      .then(authCode => {
        console.log('In useEffect. authCode: ', authCode);
        if (authCode) {
          return checkAuthCode(authCode);
      } else {
        return false;
      }
      })
      .then(res => {
        if (res) {
          dispatch({ type: 'SET_AUTH_PAGE_COMPLETED' }); //We can move on to the main app without showing the auth page
          
        }
        setLoading(false);
      })
      .catch(err => { console.log("Error checking auth code: ", err) });

  }, []);

  const isAuthPageCompleted = () => {
    console.log('context:', context);
    return context.state.authPageCompleted == 'COMPLETED';
  };

  const render = () => {
    var res = (
      <View style={styles.loadingPage} >
        <Text>Loading</Text>

      </View>
    );
    if (!loading) {
      res = !isAuthPageCompleted() ? (
        <NavigationContainer initialRouteName="Authorise">
          <Stack.Navigator>
            <Stack.Screen
              name="Authorise"
              component={AuthPage}
              options={{ title: 'SailingBuddy' + Constants.manifest.extra.environment }}
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
                options={{ title: 'SailingBuddy' + Constants.manifest.extra.environment }}
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
        );
    }
    return (res

    );


  }


  return (render());
}

const styles = StyleSheet.create({
  loadingPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});


export { AppContainer };