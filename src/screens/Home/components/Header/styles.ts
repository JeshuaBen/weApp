import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { Feather, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 100%;

  height: 143px;
  justify-content: center;
  padding: 32px 24px 32px 24px;

  background-color: ${({ theme }) => theme.colors.blue600};
  position: relative;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextLogo = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.white};
`;

export const FavoriteButton = styled(TouchableOpacity)``;

export const Favorite = styled(MaterialIcons).attrs({
  name: "star",
  size: 26,
  color: "#F9A603",
})``;

export const FilterWrapper = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: -60px;
`;

export const Filter = styled.TextInput`
  height: 45px;
  padding-left: 12px;
  flex: 1;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FilterButton = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  border-radius: 12px;
  margin-left: 20px;
  background-color: ${({ theme }) => theme.colors.gold};
  align-items: center;
  justify-content: center;
`;

export const Search = styled(MaterialIcons).attrs({
  name: "search",
  size: 18,
  color: "#fff",
})``;
