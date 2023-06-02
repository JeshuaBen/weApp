import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/stack.routes";
import { RestaurantData } from "../../store/ducks/restaurants/types";

interface StateProps {
  restaurants: RestaurantData;
  loading: boolean;
}

interface DispatchProps {
  toggleRestaurants: (id: string) => void;
}

type Props = StateProps & DispatchProps;

export type FavoriteProps = NativeStackScreenProps<
  RootStackParamList,
  "Favorites"
> &
  Props;
