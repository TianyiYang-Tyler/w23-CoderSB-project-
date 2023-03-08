import HomeScreen from "./screens/HomeScreen";
import Game from "./screens/Game";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
