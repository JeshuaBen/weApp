import { TouchableOpacityProps } from "react-native";
import { Restaurant } from "../../dtos/RestaurantDTO";

export interface IRestaurantCard extends TouchableOpacityProps {
  data: Restaurant;
  toggleFavorite(): void;
  disabled?: boolean;
}
