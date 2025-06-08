import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const NewScreen = ({ navigation, route }) => {
  const { user } = route.params;

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pointsText}>Points: {user.points ?? 0}</Text>

      <Button title="QR Code" onPress={() => navigation.navigate('QR', { user })} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile', { user })} />
      <Button title="Logout" color="#B00020" onPress={handleLogout} />
    </View>
  );
};

export default NewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    padding: 30,
  },
  pointsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
