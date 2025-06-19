import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';

const RewardScreen = ({ route }) => {
  const { user } = route.params;
  const [selectedReward, setSelectedReward] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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

  const openModal = (reward) => {
    setSelectedReward(reward);
    setModalVisible(true);
  };

  const handleClaim = () => {
    if (user.points >= selectedReward.cost) {
      Alert.alert('Success', `You claimed: ${selectedReward.title}`);
    } else {
      Alert.alert('Not enough points', `You need ${selectedReward.cost} points.`);
    }
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.rewardBox} onPress={() => openModal(item)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.rewardTitle}>{item.title}</Text>
      <Text style={styles.rewardCost}>{item.cost} pts</Text>
    </TouchableOpacity>
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

      {/* Reward Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedReward && (
              <>
                <Text style={styles.modalTitle}>{selectedReward.title}</Text>
                <Text style={styles.modalText}>
                  Required: {selectedReward.cost} pts
                </Text>
                <Text style={styles.modalText}>
                  You have: {user.points ?? 0} pts
                </Text>
                <View style={styles.modalButtons}>
                  <TouchableOpacity
                    style={[styles.modalButton, { backgroundColor: '#4CAF50' }]}
                    onPress={handleClaim}
                  >
                    <Text style={styles.modalButtonText}>Claim</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.modalButton, { backgroundColor: '#888' }]}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.modalButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 8,
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 10,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
