import * as S from "./styles";
import { IRestaurantCard } from "./types";
import { Text } from "react-native";

export const RestaurantCard: React.FC<IRestaurantCard> = ({
  url,
  name,
  restaurantType,
  currency,
  timezone,
}) => {
  return (
    <S.Container>
      <S.RestaurantInfoWrapper>
        <S.RestaurantImage
          source={{
            uri: url,
          }}
          resizeMode="contain"
        />
        <S.Details>
          <S.RestaurantName>{name}</S.RestaurantName>
          <S.RestaurantType>{restaurantType}</S.RestaurantType>
          <S.CurrencyWrapper>
            <S.Timezone>{timezone}</S.Timezone>
            <Text>-</Text>
            <S.CurrencyType>{currency}</S.CurrencyType>
          </S.CurrencyWrapper>
        </S.Details>
      </S.RestaurantInfoWrapper>

      <S.FavoriteButton>
        <S.Favorite />
      </S.FavoriteButton>
    </S.Container>
  );
};
