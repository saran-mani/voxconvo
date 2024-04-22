import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from './src/screens/IndexScreen';
import PromptScreen from "./src/screens/PromptScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Index" component={IndexScreen}options={{headerShown:false}} />
        <Stack.Screen name="Prompt" component={PromptScreen}options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


