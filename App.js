import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AnimatedScreen from './src/screens/AnimatedScreen';
import ReanimatedScreen from './src/screens/ReanimatedScreen';
import AnimatedCarouselScreen from './src/screens/AnimatedCarouselScreen';
import AnimatedSwipeDeckScreen from './src/screens/AnimatedSwipeDeckScreen';
import ReanimatedCarouselScreen from './src/screens/ReanimatedCarouselScreen';
import ReanimatedSwipeDeckScreen from './src/screens/ReanimatedSwipeDeckScreen';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AnimatedScreen" component={AnimatedScreen} />
        <Stack.Screen name="ReanimatedScreen" component={ReanimatedScreen} />

        {/* Animated API */}
        <Stack.Screen
          name="AnimatedCarouselScreen"
          component={AnimatedCarouselScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="AnimatedSwipeDeckScreen" component={AnimatedSwipeDeckScreen} />
        {/* Animated API */}

        {/* Reanimated API */}
        <Stack.Screen
          name="ReanimatedCarouselScreen"
          component={ReanimatedCarouselScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ReanimatedSwipeDeckScreen"
          component={gestureHandlerRootHOC(ReanimatedSwipeDeckScreen)}
        />
        {/* Reanimated API */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
