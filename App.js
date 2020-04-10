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
import { InitialView, UploadView, ResultView } from './src/screens';
import { Icon } from 'react-native-elements';
import config from './src/config';


const Stack = createStackNavigator();

const uploadViewHeaderOptions = { 
  headerShown: true, 
  headerTitle: null, 
  headerStyle: {
    backgroundColor: config.colors.black, 
    borderWidth: 0,
    shadowColor:'transparent' 
  },
  headerTintColor: config.colors.green,
  headerBackTitle:'Volver'
}
const resultViewHeaderOptions = { 
  headerShown: true, 
  headerTitle: null, 
  headerStyle: {
    backgroundColor: config.colors.black, 
    borderWidth: 0,
    shadowColor:'transparent',
  },
  headerTintColor: config.colors.green,
  headerBackTitle:'Volver',
  
}



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="initalView" component={InitialView}  options={{ headerShown: false}} />
        <Stack.Screen name="uploadView" component={UploadView}  options={uploadViewHeaderOptions} />
        <Stack.Screen name="resultView" component={ResultView}  options={resultViewHeaderOptions} initialParams />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;