import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screen components
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import QRScreen from './screens/QRScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewScreen from './screens/NewScreen'; // This will be shown after login

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen 
          name="NewScreen" 
          component={NewScreen} 
          options={{ title: 'Dashboard' }} 
        />
        <Stack.Screen name="QR" component={QRScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Optional styling (not used in this file directly)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
