import * as S from "./styles";
import { IHomeContentWrapper } from "./types";

export const HomeContentWrapper: React.FC<IHomeContentWrapper> = ({
  totalRestaurants,
}) => {
  return (
    <S.Container>
      <S.HomeTitle>Restaurantes</S.HomeTitle>
      <S.TotalRestaurantsWrapper>
        <S.TotalRestaurants>{totalRestaurants}</S.TotalRestaurants>
      </S.TotalRestaurantsWrapper>
    </S.Container>
  );
};
