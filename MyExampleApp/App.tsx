import React from 'react';
import { Home } from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ValuesList } from './src/ValuesList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Values" component={ValuesList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
