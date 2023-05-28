import * as S from "./styles";
import { IHeader } from "./types";

export const Header: React.FC<IHeader> = ({ totalRestaurants }) => {
  return (
    <S.Container>
      <S.HeaderContent>
        <S.TextLogo>We:App</S.TextLogo>
        <S.TotalRestaurants>{`Total de ${totalRestaurants} restaurantes`}</S.TotalRestaurants>
      </S.HeaderContent>
    </S.Container>
  );
};
