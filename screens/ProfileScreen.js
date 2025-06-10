// screens/ProfileScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../AuthContext';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const auth = useContext(AuthContext);

  // Handle missing context gracefully
  if (!auth) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Error: Auth context is not available.</Text>
      </View>
    );
  }

  const { logout } = auth;

  const handleLogout = () => {
    logout();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Your Profile</Text>
      <Button title="Logout" onPress={handleLogout} color="#d9534f" />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 22,
    marginBottom: 20,
  },
});
