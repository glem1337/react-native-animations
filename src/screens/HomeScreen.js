import React, { useState } from 'react';
import { Button, TextInput, View, Text, SafeAreaView, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go to Animated" onPress={() => navigation.navigate('AnimatedScreen')} />
        <Button title="Go to Reanimated" onPress={() => navigation.navigate('ReanimatedScreen')} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
