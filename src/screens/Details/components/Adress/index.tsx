import * as S from "./styles";
import { IAdress } from "./types";

export const Adress: React.FC<IAdress> = ({ adress, city, country }) => {
  return (
    <S.AdressWrapper>
      <S.IconWrapper>
        <S.Icon />
        <S.Adress>{adress}</S.Adress>
      </S.IconWrapper>
      <S.City>
        {`${city}, `} <S.Country>{country}</S.Country>
      </S.City>
    </S.AdressWrapper>
  );
};
