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
