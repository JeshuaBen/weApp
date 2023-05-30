import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import theme from "../../../../styles/theme";

export const Container = styled.View`
  border-radius: 16px;

  padding: 4px 12px 4px 0px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Language = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const Icon = styled(MaterialCommunityIcons).attrs({
  name: "silverware-fork-knife",
  size: 20,
  color: theme.colors.gray800,
})``;
