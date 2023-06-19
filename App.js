import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { TailwindProvider } from 'tailwindcss-react-native';
import Discover from './screens/Discover';
import ItemsDetails from './screens/ItemsDetails';


const Stack = createStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>    
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}  />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="ItemsDetails" component={ItemsDetails} />
        </Stack.Navigator>
      </NavigationContainer> 
     </TailwindProvider>
  );
}

