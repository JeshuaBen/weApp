import { Restaurant } from "../../../../dtos/RestaurantDTO";

export interface IDetailsContent {
  data: Restaurant;
  toggleFavorite(id: string): void;
}
