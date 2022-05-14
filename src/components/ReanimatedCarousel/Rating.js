import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Rating({ rating }) {
  return (
    <View style={styles.rating}>
      <Text style={styles.ratingNumber}>{rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingNumber: { marginRight: 4, fontFamily: 'Menlo', fontSize: 14 },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
});
