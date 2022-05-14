import React, { Component, useCallback, useMemo, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const ARTICLES = [
  { id: '1', uri: require('./assets/1.png') },
  { id: '2', uri: require('./assets/2.png') },
  { id: '3', uri: require('./assets/3.jpg') },
  { id: '4', uri: require('./assets/4.png') },
  { id: '5', uri: require('./assets/5.png') },
];

const ReanimatedSwipeDeck = () => {
  const [index, setIndex] = useState(0);
  const positionY = useSharedValue(0);
  const swipedCardPositionY = useSharedValue(-SCREEN_HEIGHT);

  const increase = (value) => {
    setIndex(value);
    positionY.value = 0;
  };

  const decrease = (value) => {
    setIndex(value);
    swipedCardPositionY.value = -SCREEN_HEIGHT;
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {},
    onActive: (event, ctx) => {
      if (event.translationY > 0 && index > 0) {
        swipedCardPositionY.value = -SCREEN_HEIGHT + event.translationY;
      } else {
        positionY.value = event.translationY;
      }
    },
    onFinish: (event) => {
      if (index > 0 && event.translationY > 50 && event.velocityY > 1200) {
        swipedCardPositionY.value = withTiming(0, { duration: 400 }, () => {
          runOnJS(decrease)(index - 1);
        });
      } else if (
        -event.translationY > 50 &&
        -event.velocityY > 1200 &&
        index < ARTICLES.length - 1
      ) {
        positionY.value = withTiming(-SCREEN_HEIGHT, { duration: 400 }, () => {
          runOnJS(increase)(index + 1);
        });
      } else {
        swipedCardPositionY.value = withTiming(-SCREEN_HEIGHT);
        positionY.value = withTiming(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: 0 },
        {
          translateY: positionY.value,
        },
      ],
    };
  }, []);

  const rSwipedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: 0 },
        {
          translateY: swipedCardPositionY.value,
        },
      ],
    };
  }, []);

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={{ flex: 1 }}>
        {ARTICLES.map((item, i) => {
          if (i == index - 1) {
            return (
              <Animated.View
                key={item.id}
                style={[
                  {
                    flex: 1,
                    position: 'absolute',
                    height: SCREEN_HEIGHT,
                    width: SCREEN_WIDTH,
                    backgroundColor: 'white',
                  },
                  rSwipedStyle,
                ]}
              >
                <View style={{ flex: 2, backgroundColor: 'black' }}>
                  <Image
                    source={ARTICLES[i].uri}
                    style={{ flex: 1, height: null, width: null, resizeMode: 'center' }}
                  />
                </View>
                <View style={{ flex: 3, padding: 5 }}>
                  <Text>
                    Labore irure excepteur deserunt qui. Occaecat do consequat velit adipisicing
                    consequat reprehenderit incididunt duis irure ea consequat ipsum Lorem dolor.
                    Culpa consectetur nisi officia excepteur anim mollit nostrud ut voluptate. Quis
                    velit dolore fugiat veniam eu labore adipisicing ipsum incididunt ad amet. Do
                    veniam adipisicing veniam commodo exercitation officia et commodo Lorem nostrud
                    culpa tempor dolor. Labore irure excepteur deserunt qui. Occaecat do consequat
                    velit adipisicing consequat reprehenderit incididunt duis irure ea consequat
                    ipsum Lorem dolor. Culpa consectetur nisi officia excepteur anim mollit nostrud
                    ut voluptate. Quis velit dolore fugiat veniam eu labore adipisicing ipsum
                    incididunt ad amet. Do veniam adipisicing veniam commodo exercitation officia et
                    commodo Lorem nostrud culpa tempor dolor. Labore irure excepteur deserunt qui.
                    Occaecat do consequat velit adipisicing consequat reprehenderit incididunt duis
                    irure ea consequat ipsum Lorem dolor. Culpa consectetur nisi officia excepteur
                    anim mollit nostrud ut voluptate. Quis velit dolore fugiat veniam eu labore
                    adipisicing ipsum incididunt ad amet. Do veniam adipisicing veniam commodo
                    exercitation officia et commodo Lorem nostrud culpa tempor dolor.
                  </Text>
                </View>
              </Animated.View>
            );
          } else if (i < index) {
            return null;
          }
          if (i == index) {
            return (
              <Animated.View
                key={item.id}
                style={[
                  {
                    flex: 1,
                    position: 'absolute',
                    height: SCREEN_HEIGHT,
                    width: SCREEN_WIDTH,
                    backgroundColor: 'white',
                  },
                  rStyle,
                ]}
              >
                <View style={{ flex: 2, backgroundColor: 'black' }}>
                  <Image
                    source={ARTICLES[i].uri}
                    style={{ flex: 1, height: null, width: null, resizeMode: 'center' }}
                  />
                </View>
                <View style={{ flex: 3, padding: 5 }}>
                  <Text>
                    Labore irure excepteur deserunt qui. Occaecat do consequat velit adipisicing
                    consequat reprehenderit incididunt duis irure ea consequat ipsum Lorem dolor.
                    Culpa consectetur nisi officia excepteur anim mollit nostrud ut voluptate. Quis
                    velit dolore fugiat veniam eu labore adipisicing ipsum incididunt ad amet. Do
                    veniam adipisicing veniam commodo exercitation officia et commodo Lorem nostrud
                    culpa tempor dolor. Labore irure excepteur deserunt qui. Occaecat do consequat
                    velit adipisicing consequat reprehenderit incididunt duis irure ea consequat
                    ipsum Lorem dolor. Culpa consectetur nisi officia excepteur anim mollit nostrud
                    ut voluptate. Quis velit dolore fugiat veniam eu labore adipisicing ipsum
                    incididunt ad amet. Do veniam adipisicing veniam commodo exercitation officia et
                    commodo Lorem nostrud culpa tempor dolor. Labore irure excepteur deserunt qui.
                    Occaecat do consequat velit adipisicing consequat reprehenderit incididunt duis
                    irure ea consequat ipsum Lorem dolor. Culpa consectetur nisi officia excepteur
                    anim mollit nostrud ut voluptate. Quis velit dolore fugiat veniam eu labore
                    adipisicing ipsum incididunt ad amet. Do veniam adipisicing veniam commodo
                    exercitation officia et commodo Lorem nostrud culpa tempor dolor.
                  </Text>
                </View>
              </Animated.View>
            );
          } else {
            return (
              <View
                key={item.id}
                style={{
                  flex: 1,
                  position: 'absolute',
                  height: SCREEN_HEIGHT,
                  width: SCREEN_WIDTH,
                  backgroundColor: 'white',
                }}
              >
                <View style={{ flex: 2, backgroundColor: 'black' }}>
                  <Image
                    source={ARTICLES[i].uri}
                    style={{ flex: 1, height: null, width: null, resizeMode: 'center' }}
                  />
                </View>
                <View style={{ flex: 3, padding: 5 }}>
                  <Text>
                    Labore irure excepteur deserunt qui. Occaecat do consequat velit adipisicing
                    consequat reprehenderit incididunt duis irure ea consequat ipsum Lorem dolor.
                    Culpa consectetur nisi officia excepteur anim mollit nostrud ut voluptate. Quis
                    velit dolore fugiat veniam eu labore adipisicing ipsum incididunt ad amet. Do
                    veniam adipisicing veniam commodo exercitation officia et commodo Lorem nostrud
                    culpa tempor dolor. Labore irure excepteur deserunt qui. Occaecat do consequat
                    velit adipisicing consequat reprehenderit incididunt duis irure ea consequat
                    ipsum Lorem dolor. Culpa consectetur nisi officia excepteur anim mollit nostrud
                    ut voluptate. Quis velit dolore fugiat veniam eu labore adipisicing ipsum
                    incididunt ad amet. Do veniam adipisicing veniam commodo exercitation officia et
                    commodo Lorem nostrud culpa tempor dolor. Labore irure excepteur deserunt qui.
                    Occaecat do consequat velit adipisicing consequat reprehenderit incididunt duis
                    irure ea consequat ipsum Lorem dolor. Culpa consectetur nisi officia excepteur
                    anim mollit nostrud ut voluptate. Quis velit dolore fugiat veniam eu labore
                    adipisicing ipsum incididunt ad amet. Do veniam adipisicing veniam commodo
                    exercitation officia et commodo Lorem nostrud culpa tempor dolor.
                  </Text>
                </View>
              </View>
            );
          }
        }).reverse()}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default ReanimatedSwipeDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  index: {
    position: 'absolute',
    zIndex: 1000,
    bottom: 100,
  },
});
