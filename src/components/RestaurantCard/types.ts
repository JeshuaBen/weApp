import { TouchableOpacityProps } from "react-native";

export interface IRestaurantCard extends TouchableOpacityProps {
  url?: string;
  name: string;
  restaurantType: string;
  currency: string;
  timezone: string;
}
