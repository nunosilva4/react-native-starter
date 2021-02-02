import * as React from "react";
import 'react-native-gesture-handler';
import Home from './app/views/Home.js';
import Contact from './app/views/Contact.js';
import Video from './app/views/Video.js';
import VideoDetail from './app/views/VideoDetail.js';
import Register from './app/views/Register.js';
import Login from './app/views/Login.js';
import Quiz from './app/views/Quiz.js';
import QuizFinish from './app/views/QuizFinish.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Contact' component={Contact}/>
        <Stack.Screen name='Video' component={Video}/>
        <Stack.Screen name='VideoDetail' component={VideoDetail}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Quiz' component={Quiz}/>
        <Stack.Screen name='QuizFinish' component={QuizFinish}/>
      </Stack.Navigator>      
    </NavigationContainer>
  );
}