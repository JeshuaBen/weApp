import { Header } from "../../components/Header";
import * as S from "./styles";

export const Home: React.FC = () => {
  return (
    <S.Container>
      <Header totalRestaurants={12} />
    </S.Container>
  );
};
