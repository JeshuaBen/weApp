import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import theme from "../../../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: 220px;
  padding: 36px 24px 0px 12px;
  gap: 12px;
`;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const GoBackButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
`;

export const Back = styled(Feather).attrs({
  name: "chevron-left",
  size: 32,
  color: theme.colors.blue600,
})``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(15)}px;
  flex: 1;
  text-align: center;
`;

export const ImageContainer = styled.ImageBackground`
  width: 100%;
  height: 100%;

  opacity: 0.9;
`;
