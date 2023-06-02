import * as S from "./styles";
import { IRestaurantCard } from "./types";
import { Text } from "react-native";

export const RestaurantCard: React.FC<IRestaurantCard> = ({
  data,
  toggleFavorite,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      <S.RestaurantInfoWrapper>
        <S.RestaurantImage
          source={{
            uri:
              data?.image?.url ??
              "https://cwdaust.com.au/wpress/wp-content/uploads/2015/04/placeholder-restaurant.png",
          }}
          resizeMode="contain"
        />
        <S.Details>
          <S.RestaurantName>{data?.name}</S.RestaurantName>
          <S.RestaurantType>{data?.mealType}</S.RestaurantType>
          <S.CurrencyWrapper>
            <S.Timezone>{data?.timezone}</S.Timezone>
            <Text>-</Text>
            <S.CurrencyType>{data?.currencyCode}</S.CurrencyType>
          </S.CurrencyWrapper>
        </S.Details>
      </S.RestaurantInfoWrapper>

      <S.FavoriteButton onPress={toggleFavorite}>
        {data.isFavorite ? <S.FilledFavorite /> : <S.Favorite />}
      </S.FavoriteButton>
    </S.Container>
  );
};
