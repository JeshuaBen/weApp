import * as S from "./styles";
import { IHomeHeader } from "./types";

export const Header: React.FC<IHomeHeader> = ({
  onNavigateFavorites,
  filterRestaurants,
  onFilterRestaurants,
}) => {
  return (
    <S.Container>
      <S.HeaderContent>
        <S.TextLogo>Olá, User!</S.TextLogo>

        <S.FilterWrapper>
          <S.Filter
            placeholder="Buscar Restaurantes"
            value={filterRestaurants}
            onChange={() => onFilterRestaurants}
          />
          <S.FilterButton>
            <S.Search />
          </S.FilterButton>
        </S.FilterWrapper>

        <S.FavoriteButton onPress={onNavigateFavorites}>
          <S.Favorite />
        </S.FavoriteButton>
      </S.HeaderContent>
    </S.Container>
  );
};
