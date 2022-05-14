import React, { useState } from 'react';
import { Button, TextInput, View, Text, SafeAreaView, Alert } from 'react-native';

const AnimatedScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text testID="title" style={{ fontSize: 26, textAlign: 'center' }}>
          Hello Animated
        </Text>
        <Button
          title="Go to Animated Carousel"
          onPress={() => navigation.navigate('AnimatedCarouselScreen')}
        />
        <Button
          title="Go to Animated Swiper Deck"
          onPress={() => navigation.navigate('AnimatedSwipeDeckScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default AnimatedScreen;
