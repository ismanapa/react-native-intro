import React from 'react';
import { SafeAreaView, Image, Text, Button, StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  background: {
    backgroundColor: '#041c2c',
    height: '100%',
    padding: 16,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  logo: {
    borderRadius: 200,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subTitle: {
    flex: 1,
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  }
});

export const Home: React.FC = () => {
  return (
    <SafeAreaView style={HomeStyles.background}>

      <Image
        style={HomeStyles.logo}
        source={require('../assets/piggy.png')} />

      <Text style={HomeStyles.title}>Plain Poker</Text>

      <Text style={HomeStyles.subTitle}>An app to estimate your awesome projects</Text>

      <Button
        color={'#00b5f1'}
        onPress={() => { }}
        title="Estimate" />
    </SafeAreaView>
  )
};