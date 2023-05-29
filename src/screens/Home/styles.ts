import { FlatList, FlatListProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { RandomData } from ".";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HomeContent = styled.View`
  padding: 24px;
  flex: 1;
`;

export const RestaurantList = styled(
  FlatList as new (props: FlatListProps<RandomData>) => FlatList<RandomData>
).attrs({
  showsVerticalScrollIndicator: false,
})``;
