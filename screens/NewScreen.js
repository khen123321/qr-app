import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {user.username || 'User'}!</Text>

      <View style={styles.card}>
        <Text style={styles.pointsLabel}>Your Points</Text>
        <Text style={styles.pointsValue}>{user.points ?? 0}</Text>
      </View>

      {/* Add more sections below like recent activity, announcements, etc. */}
    </View>
  );
};

export default NewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4ff',
    padding: 20,
    justifyContent: 'flex-start',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    alignItems: 'center',
  },
  pointsLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  pointsValue: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#6200ee',
  },
});
