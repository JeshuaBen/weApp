import { StatusBar } from "expo-status-bar";
import { Header } from "../../components/Header";
import * as S from "./styles";
import { HomeContentWrapper } from "../../components/HomeContentWrapper";
import { RestaurantCard } from "../../components/RestaurantCard";

export interface RandomData {
  id: number;
  url: string;
  name: string;
  restaurantType: string;
  currency: string;
  timezone: string;
}

export const Home: React.FC = () => {
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
      url: "https://cdn.dev.wdtek.xyz/5ea884ff432c0893e5d4de33/restaurants/5ebd79ea7dd83e712eebd892.jpg",
      name: "Atenas Snacks",
      restaurantType: "Comida típica Grega",
      currency: "EUR",
      timezone: "Europe/Lisbon",
    },

    {
      id: 3,
      url: "https://cdn.dev.wdtek.xyz/5ea884ff432c0893e5d4de33/restaurants/5ebd79ea7dd83e712eebd892.jpg",
      name: "Atenas Snacks",
      restaurantType: "Comida típica Grega",
      currency: "EUR",
      timezone: "Europe/Lisbon",
    },

    {
      id: 4,
      url: "https://cdn.dev.wdtek.xyz/5ea884ff432c0893e5d4de33/restaurants/5ebd79ea7dd83e712eebd892.jpg",
      name: "Atenas Snacks",
      restaurantType: "Comida típica Grega",
      currency: "EUR",
      timezone: "Europe/Lisbon",
    },

    {
      id: 5,
      url: "https://cdn.dev.wdtek.xyz/5ea884ff432c0893e5d4de33/restaurants/5ebd79ea7dd83e712eebd892.jpg",
      name: "Atenas Snacks",
      restaurantType: "Comida típica Grega",
      currency: "EUR",
      timezone: "Europe/Lisbon",
    },
  ];

  return (
    <S.Container>
      <Header />
      <StatusBar style="light" translucent />

      <S.HomeContent>
        <HomeContentWrapper totalRestaurants={randomData.length} />
        <S.RestaurantList
          data={randomData}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <RestaurantCard
              url={item.url}
              name={item.name}
              restaurantType={item.restaurantType}
              currency={item.currency}
              timezone={item.timezone}
            />
          )}
        />
      </S.HomeContent>
    </S.Container>
  );
};
