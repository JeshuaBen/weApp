import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;

  height: 110px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px 24px 24px 12px;

  margin-bottom: 16px;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 10px;
`;

export const RestaurantInfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RestaurantImage = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 999px;
  margin-right: 16px;
`;

export const Details = styled.View``;

export const RestaurantName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.blue600};
  margin-bottom: 4px;
`;

export const RestaurantType = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const CurrencyWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 2px;
`;

export const CurrencyType = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.green};
`;

export const Timezone = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const FavoriteButton = styled(TouchableOpacity)``;

export const Favorite = styled(Feather).attrs({
  name: "star",
  size: 23,
  color: "#F9A603",
})``;
