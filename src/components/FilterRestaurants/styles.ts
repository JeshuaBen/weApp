import { Feather, MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
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
