import * as S from "./styles";

export const FilterRestaurants: React.FC = () => {
  return (
    <S.Container>
      <S.Filter placeholder="Buscar Restaurantes" />
      <S.FilterButton>
        <S.Search />
      </S.FilterButton>
    </S.Container>
  );
};
