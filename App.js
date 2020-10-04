/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Header } from './src/common/Header';

import { HomeScreen } from './src/HomeScreen/HomeScreen';
import NotificationScreen from './src/NotificationScreen/NotificationScreen';
import { FeedbackScreen } from './src/FeedbackScreen/FeedbackScreen';
import { AboutScreen } from './src/AboutScreen/AboutScreen';
// import TestingScreen from "./Testing";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const App = () => {

  return (
    <>
      <Header />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationScreen} />
          <Drawer.Screen name="Feedback" component={FeedbackScreen} />
          <Drawer.Screen name="About app" component={AboutScreen} />
          {/* <Drawer.Screen name="Testing" component={TestingScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
