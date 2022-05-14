import React, { useState } from 'react';
import { Button, TextInput, View, Text, SafeAreaView, Alert } from 'react-native';

const ReanimatedScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text testID="title" style={{ fontSize: 26, textAlign: 'center' }}>
          Hello Reanimated
        </Text>
        <Button
          title="Go to Reanimated Carousel"
          onPress={() => navigation.navigate('ReanimatedCarouselScreen')}
        />
        <Button
          title="Go to Reanimated Swiper Deck"
          onPress={() => navigation.navigate('ReanimatedSwipeDeckScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ReanimatedScreen;
