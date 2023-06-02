import * as S from "./styles";
import { IRestaurantCard } from "./types";
import { Text } from "react-native";

export const RestaurantCard: React.FC<IRestaurantCard> = ({
  url,
  name,
  restaurantType,
  currency,
  timezone,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      <S.RestaurantInfoWrapper>
        <S.RestaurantImage
          source={{
            uri:
              url ??
              "https://cwdaust.com.au/wpress/wp-content/uploads/2015/04/placeholder-restaurant.png",
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
