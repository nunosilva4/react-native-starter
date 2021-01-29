import * as React from "react";
import 'react-native-gesture-handler';
import Home from './app/views/Home.js';
import Contact from './app/views/Contact.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Contact' component={Contact}/>
      </Stack.Navigator>      
    </NavigationContainer>
  );
}