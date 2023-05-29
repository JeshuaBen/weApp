import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const AdressWrapper = styled.View`
  width: 100%;
  border-radius: 10px;

  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const IconWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const Icon = styled(Feather).attrs({
  name: "map-pin",
})``;

export const Adress = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(14)}px;
`;

export const City = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.gray800};
`;

export const Country = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.gray800};
`;
