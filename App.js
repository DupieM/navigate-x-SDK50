import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PhotosScreen from './screens/PhotosScreen';
import PrivateScreen from './screens/PrivateScreen';
import DevelopmentScreen from './screens/DevelopmentScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // Add navigation here
      // <HomeScreen />
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}/> 
        <Tab.Screen name="Photos" component={PhotosScreen}/>
        <Tab.Screen name="Private" component={PrivateScreen}/>
        <Tab.Screen name="Development" component={DevelopmentScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

