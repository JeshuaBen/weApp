import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DetailsHeader } from "./components/DetailsHeader";
import * as S from "./styles";
import { RootStackParamList } from "../../routes/stack.routes";
import { DetailsContent } from "./components/DetailsContent";

type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;

export const Details = ({ navigation }: DetailsProps) => {
  return (
    <S.Container>
      <DetailsHeader
        handleGoBack={() => navigation.goBack()}
        url="https://cdn.dev.wdtek.xyz/5ea884ff432c0893e5d4de33/restaurants/5fc10b6c4e2318d7a791b9d9.webp"
      />

      <DetailsContent />
    </S.Container>
  );
};
