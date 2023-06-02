import { FlatList, FlatListProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { RandomData } from ".";
import { RestaurantData } from "../../store/ducks/restaurants/types";
import { Restaurant } from "../../dtos/RestaurantDTO";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HomeContent = styled.View`
  padding: 24px;
  flex: 1;
`;

export const ActivityIndicatorWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const RestaurantList = styled(
  FlatList as new (props: FlatListProps<Restaurant>) => FlatList<Restaurant>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 12,
  },
})``;
