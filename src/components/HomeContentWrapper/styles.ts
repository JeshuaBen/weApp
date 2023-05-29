import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const HomeTitle = styled.Text`
  color: ${({ theme }) => theme.colors.blue600};
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const TotalRestaurantsWrapper = styled.View`
  border-radius: 999px;
  padding: 1px 16px;
  background-color: ${({ theme }) => theme.colors.blue600};
  align-items: center;
  justify-content: center;
`;

export const TotalRestaurants = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;
