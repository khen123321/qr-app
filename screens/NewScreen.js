// screens/NewScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const NewScreen = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.pointsText}>Points: {user.points ?? 0}</Text>

      <TouchableOpacity
        style={styles.qrButton}
        onPress={() => navigation.navigate('QR', { user })}
      >
        <MaterialCommunityIcons name="qrcode" size={40} color="#000" />
      </TouchableOpacity>

      {/* Bottom Menu Icons */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Profile', { user })}
        >
          <MaterialCommunityIcons name="account-circle" size={28} color="#007aff" />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Reward', { user })}
        >
          <FontAwesome5 name="gift" size={24} color="#28a745" />
          <Text style={styles.menuText}>Rewards</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Transaction', { user })}
        >
          <MaterialCommunityIcons name="history" size={28} color="#6c757d" />
          <Text style={styles.menuText}>Transactions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  pointsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  qrButton: {
    position: 'absolute',
    bottom: 90,
    alignSelf: 'center',
    backgroundColor: '#e0e0e0',
    padding: 16,
    borderRadius: 50,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 12,
    marginTop: 4,
  },
});
