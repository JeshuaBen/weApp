import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Restaurant } from "../../dtos/RestaurantDTO";
import { RootStackParamList } from "../../routes/stack.routes";

interface StateProps {
  selected: Restaurant;
  loading: boolean;
}

interface DispatchProps {
  getOneRequest(id: string): void;
  getOneSuccess(data: Restaurant): void;
  loadFailure(): void;
  toggleFavorite(id: string): void;
}

type Props = StateProps & DispatchProps;

export type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
> &
  Props;
