import { StatusBar } from "expo-status-bar";
import { Header } from "./components/Header";
import * as S from "./styles";
import { HomeContentWrapper } from "./components/HomeContentWrapper";
import { RestaurantCard } from "../../components/RestaurantCard";
import { RootStackParamList } from "../../routes/stack.routes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export interface RandomData {
  id: number;
  url: string;
  name: string;
  restaurantType: string;
  currency: string;
  timezone: string;
}

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const Home = ({ navigation }: HomeProps) => {
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
              onPress={() => handleRestaurantDetails(String(item.id))}
            />
          )}
        />
      </S.HomeContent>
    </S.Container>
  );
};
