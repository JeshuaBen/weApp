import { Feather, MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

  align-items: center;
`;

export const InfoWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  margin-bottom: 12px;
  gap: 6px;

  width: 70%;
`;

export const FavoriteInfo = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_700};
  color: ${({ theme }) => theme.colors.gray800};
`;

export const InfoComplement = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.gray500};
  text-align: center;
`;

export const Favorite = styled(MaterialIcons).attrs({
  name: "star",
  size: 16,
  color: theme.colors.gray500,
})``;

export const FavoriteRestaurants = styled.ScrollView`
  width: 100%;
  padding: 12px 24px 12px 24px;
`;
