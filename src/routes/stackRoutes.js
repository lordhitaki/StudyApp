import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../pages/splashScreen';
import Index from '../pages/index';

import Register from '../pages/account/register';
import Login from '../pages/account/login';
import ProfilePic from '../pages/account/register/profilePicSelect';

import Screen from '../pages/home/';
import Details from '../pages/home/details';
// import WatchList from '../pages/home/watchList';
import Player from '../pages/player';
import UsernameScreen from '../pages/account/register/usernameScreen';
import PasswordScreen from '../pages/account/register/passwordScreen';
import SuccessScreen from '../pages/account/register/successScreen';
import AgeScreen from '../pages/account/register/ageScreen';

import Settings from '../pages/home/more/settings';
import Account from '../pages/home/more/account';
import ParentalControl from '../pages/home/more/parentalControl';
import Privacity from '../pages/home/more/privacity';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Index"
        component={Index}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Screen"
        component={Screen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="WatchList"
        component={WatchList}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ParentalControl"
        component={ParentalControl}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Privacity"
        component={Privacity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Player"
        component={Player}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfilePic"
        component={ProfilePic}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UsernameScreen"
        component={UsernameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PasswordScreen"
        component={PasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AgeScreen"
        component={AgeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
