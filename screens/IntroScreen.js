import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const { width } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Welcome to P-Lament',
    text: 'Scan QR codes, earn rewards, and manage your activity easily.',
    image: require('../assets/slide1.png'),
  },
  {
    key: '2',
    title: 'Earn & Redeem',
    text: 'Collect points by scanning and exchange them for cool stuff!',
    image: require('../assets/slide2.png'),
  },
  {
    key: '3',
    title: 'Stay Updated',
    text: 'Check your profile, rewards, and transaction history anytime.',
    image: require('../assets/slide3.png'),
  },
];

const IntroScreen = ({ navigation }) => {
  const handleDone = () => {
    navigation.replace('Signup');
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const renderSkipButton = () => (
    <View style={styles.leftButton}>
      <Text style={styles.buttonText}>Skip</Text>
    </View>
  );

  const renderNextButton = () => (
    <View style={styles.rightButton}>
      <Text style={styles.buttonText}>Next</Text>
    </View>
  );

  const renderDoneButton = () => (
    <View style={styles.rightButton}>
      <Text style={styles.buttonText}>Done</Text>
    </View>
  );

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={handleDone}
      showSkipButton
      renderSkipButton={renderSkipButton}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
    />
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: width * 0.8,
    height: 300,
    marginBottom: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6200ee',
    textAlign: 'center',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#6200ee',
    fontWeight: '600',
  },
  leftButton: {
    marginLeft: 20,
    padding: 10,
    bottom: 30,
  },
  rightButton: {
    marginRight: 30,
    padding: 10,
    bottom: 30,
    
  },
});
