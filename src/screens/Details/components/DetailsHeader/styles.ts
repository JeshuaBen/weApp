import { Feather, MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import theme from "../../../../styles/theme";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native";

export const Container = styled.ImageBackground`
  width: 100%;
  align-items: center;
  height: 250px;
  padding-top: 16px;
`;

export const HeaderButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px 0px 16px;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
`;

export const GoBackButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
`;

export const Back = styled(Feather).attrs({
  name: "chevron-left",
  size: 30,
  color: theme.colors.gray800,
})``;
