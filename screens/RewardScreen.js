import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const RewardScreen = ({ route }) => {
  const { user } = route.params;

  const rewards = [
    {
      id: '1',
      title: '₱50 Discount Voucher',
      cost: 100,
      image: 'https://via.placeholder.com/150x100.png?text=₱50+Voucher',
    },
    {
      id: '2',
      title: 'Free Drink',
      cost: 150,
      image: 'https://via.placeholder.com/150x100.png?text=Free+Drink',
    },
    {
      id: '3',
      title: '₱100 Gift Card',
      cost: 200,
      image: 'https://via.placeholder.com/150x100.png?text=₱100+Gift+Card',
    },
    {
      id: '4',
      title: 'Free Delivery',
      cost: 80,
      image: 'https://via.placeholder.com/150x100.png?text=Free+Delivery',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.rewardBox}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.rewardTitle}>{item.title}</Text>
      <Text style={styles.rewardCost}>{item.cost} pts</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎁 Rewards</Text>
      <Text style={styles.points}>You have {user.points ?? 0} points!</Text>

      <FlatList
        data={rewards}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RewardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  points: {
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 40,
  },
  rewardBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    marginHorizontal: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rewardCost: {
    marginTop: 4,
    fontSize: 14,
    color: '#888',
  },
});
