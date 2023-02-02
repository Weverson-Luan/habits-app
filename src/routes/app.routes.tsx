import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import { Home } from "../screens/home";
import { Habit } from "../screens/habit";
import { New } from "../screens/new";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="New" component={New} />
      <Screen name="Habit" component={Habit} />
    </Navigator>
  );
};

export { AppRoutes };
