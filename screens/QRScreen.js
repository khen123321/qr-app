import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRScreen = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user.username}!</Text>
      <Text style={styles.subtitle}>Here's your unique QR Code:</Text>

      <View style={styles.qrContainer}>
        <QRCode value={user.qrCodeData} size={200} />
      </View>

      <Text style={styles.qrText}>{user.qrCodeData}</Text>
    </View>
  );
};

export default QRScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 20 },
  qrContainer: { backgroundColor: 'white', padding: 10, borderRadius: 10, marginBottom: 20 },
  qrText: { fontSize: 12, color: 'gray', marginBottom: 20 },
});
0