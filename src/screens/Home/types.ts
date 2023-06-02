import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/stack.routes";
import { RestaurantData } from "../../store/ducks/restaurants/types";

interface StateProps {
  restaurants: RestaurantData;
  loading: boolean;
}

interface DispatchProps {
  loadRequest(offset: number, limit: number): void;
  loadSuccess(data: RestaurantData): void;
  loadFailure(): void;
}

type Props = StateProps & DispatchProps;

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home"> &
  Props;

export interface LoadMoreDataProps {
  offset: number;
  limit: number;
}
