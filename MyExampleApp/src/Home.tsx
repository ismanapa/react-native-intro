import React from 'react';
import { SafeAreaView, Image, Text, Button } from 'react-native';


export const Home: React.FC = () => {
  return (
    <SafeAreaView >
      <Image
        source={require('../assets/piggy.png')} />

      <Text>Plain Poker</Text>

      <Text>An app to estimate your awesome projects</Text>

      <Button
        onPress={() => { }}
        title="Estimate" />
    </SafeAreaView>
  )
};