/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { InitialView, UploadView } from './src/screens';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="initalView" component={InitialView}  options={{ headerShown: false}} />
        <Stack.Screen name="uploadView" component={UploadView}  options={{ headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;