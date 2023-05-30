import { StatusBar } from "expo-status-bar";
import * as S from "./styles";
import { FavoritesHeader } from "./components/FavoritesHeader";
import { RandomData } from "../Home";
import { RestaurantCard } from "../../components/RestaurantCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/stack.routes";
import { useTheme } from "styled-components";

type FavoriteProps = NativeStackScreenProps<RootStackParamList, "Favorites">;

export const Favorites = ({ navigation }: FavoriteProps) => {
  const theme = useTheme();

  const randomData: RandomData[] = [
    {
      id: 1,
      url: "https://cdn.dev.wdtek.xyz/5ea884ff432c0893e5d4de33/restaurants/5ebd79ea7dd83e712eebd892.jpg",
      name: "Atenas Snacks",
      restaurantType: "Comida típica Grega",
      currency: "EUR",
      timezone: "Europe/Lisbon",
    },
    {
      id: 2,
      url: "https://cdn.dev.wdtek.xyz/5ea884ff432c0893e5d4de33/restaurants/5ebd7ae07dd83e0177ebd893.jpeg",
      name: "Atenas Snacks",
      restaurantType: "Comida típica Grega",
      currency: "EUR",
      timezone: "Europe/Lisbon",
    },

    {
      id: 3,
      url: "https://cdn.dev.wdtek.xyz/5ea884ff432c0893e5d4de33/restaurants/5ec289f4a702587e06b8ba19.webp",
      name: "Atenas Snacks",
      restaurantType: "Comida típica Grega",
      currency: "EUR",
      timezone: "Europe/Lisbon",
    },

    {
      id: 4,
      url: "https://cdn.dev.wdtek.xyz/5fa57ea24e61d445b51f8a31/restaurants/5fa57fcb4e61d433cd1f8a33.webp",
      name: "Atenas Snacks",
      restaurantType: "Comida típica Grega",
      currency: "EUR",
      timezone: "Europe/Lisbon",
    },

    {
      id: 5,
      url: "https://cdn.dev.wdtek.xyz/5ea884ff432c0893e5d4de33/restaurants/5fc10b6c4e2318d7a791b9d9.webp",
      name: "Atenas Snacks",
      restaurantType: "Comida típica Grega",
      currency: "EUR",
      timezone: "Europe/Lisbon",
    },
  ];

  const handleRestaurantDetails = (id: string) => {
    navigation.navigate("Details", { id });
  };

  return (
    <S.Container>
      <StatusBar style="dark" />
      <FavoritesHeader handleGoBack={() => navigation.goBack()} />

      <S.InfoWrapper>
        <S.FavoriteInfo>Restaurantes favoritos</S.FavoriteInfo>
        <S.InfoComplement>
          Todos os restaurantes com <S.Favorite /> são seus favoritos. Toque no
          card para navegar para os detalhes.
        </S.InfoComplement>
      </S.InfoWrapper>
      <S.FavoriteRestaurants>
        {randomData.map((restaurant) => (
          <RestaurantCard
            url={restaurant.url}
            name={restaurant.name}
            restaurantType={restaurant.restaurantType}
            currency={restaurant.currency}
            timezone={restaurant.timezone}
            onPress={() => handleRestaurantDetails(String(restaurant.id))}
          />
        ))}
      </S.FavoriteRestaurants>
    </S.Container>
  );
};
