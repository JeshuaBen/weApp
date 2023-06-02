import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import Favorites from "../screens/Favorites";

export type RootStackParamList = {
  Home: undefined;
  Details: { id: string };
  Favorites: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const StackRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={Details as any} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  );
};
