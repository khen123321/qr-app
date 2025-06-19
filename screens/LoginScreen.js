import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.8.36:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('token', data.token);

        // ✅ Navigate to AppNavigator with user data
        navigation.navigate('AppNavigator', { user: data.user });
      } else {
        Alert.alert('Login failed', data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Login error', 'Something went wrong.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>P-Lament</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <View style={styles.button}>
        <Button title="Login" onPress={handleLogin} color="#6200ee" />
      </View>

      <View style={styles.button}>
        <Button
          title="Go to Signup"
          onPress={() => navigation.navigate('Signup')}
          color="#03dac6"
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4ff',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 12,
    borderRadius: 8,
  },
  button: {
    marginBottom: 10,
  },
});
