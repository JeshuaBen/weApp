import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/stack.routes";
import { RestaurantData } from "../../store/ducks/restaurants/types";

interface StateProps {
  restaurants: RestaurantData;
  loading: boolean;
}

interface DispatchProps {
  loadRequest(): void;
  loadSuccess(data: RestaurantData): void;
  loadFailure(): void;
}

type Props = StateProps & DispatchProps;

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home"> &
  Props;
