import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://192.168.8.36:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Account created!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Signup failed', data.message || 'Try again');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Signup error', 'Something went wrong.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

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
        <Button title="Sign Up" onPress={handleSignup} color="#6200ee" />
      </View>

      <View style={styles.button}>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
          color="#03dac6"
        />
      </View>
    </View>
  );
};

export default SignupScreen;

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
