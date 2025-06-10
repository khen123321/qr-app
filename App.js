// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthProvider } from './AuthContext';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import NewScreen from './screens/NewScreen';
import QRScreen from './screens/QRScreen';
import ProfileScreen from './screens/ProfileScreen';
import RewardScreen from './screens/RewardScreen';
import TransactionScreen from './screens/TransactionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
          <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up' }} />
          <Stack.Screen name="NewScreen" component={NewScreen} options={{ title: 'Dashboard' }} />
          <Stack.Screen name="QR" component={QRScreen} options={{ title: 'Scan QR Code' }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
          <Stack.Screen name="Reward" component={RewardScreen} options={{ title: 'Rewards' }} />
          <Stack.Screen name="Transaction" component={TransactionScreen} options={{ title: 'Transaction History' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
