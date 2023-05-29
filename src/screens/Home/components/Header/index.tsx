import { FilterRestaurants } from "../../../../components/FilterRestaurants";
import * as S from "./styles";

export const Header: React.FC = ({}) => {
  return (
    <S.Container>
      <S.HeaderContent>
        <S.TextLogo>Olá, User!</S.TextLogo>
        <FilterRestaurants />

        <S.FavoriteButton>
          <S.Favorite />
        </S.FavoriteButton>
      </S.HeaderContent>
    </S.Container>
  );
};
