import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;
  padding: 0px 20px 0px 20px;
  gap: 12px;
  flex-wrap: wrap;
`;

export const RestaurantsWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const RestaurantsName = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};

  color: ${({ theme }) => theme.colors.blue600};
  text-align: left;
`;

export const Separator = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray300};
  height: 1px;
`;

export const Information = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.blue600};
  font-size: ${RFValue(18)}px;
`;

export const FavoriteButton = styled(TouchableOpacity)`
  border-radius: 999px;

  padding: 2px;
`;

export const Favorite = styled(MaterialIcons).attrs({
  name: "star",
  size: 30,
  color: "#F9A603",
})``;

export const CuisinesWrapper = styled.View`
  flex-direction: row;
  gap: 16px;

  flex-wrap: wrap;
`;
