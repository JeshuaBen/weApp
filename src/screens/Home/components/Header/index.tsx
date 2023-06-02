import * as S from "./styles";
import { IHomeHeader } from "./types";

export const Header: React.FC<IHomeHeader> = ({
  onNavigateFavorites,
  filterRestaurants,
  setFilterRestaurants,
  onFilter,
}) => {
  return (
    <S.Container>
      <S.HeaderContent>
        <S.TextLogo>Olá, User!</S.TextLogo>

        <S.FilterWrapper>
          <S.Filter
            placeholder="Buscar Restaurantes"
            value={filterRestaurants}
            onChangeText={setFilterRestaurants}
          />
          <S.FilterButton onPress={onFilter}>
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
