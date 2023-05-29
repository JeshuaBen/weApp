import { Text } from "react-native";
import * as S from "./styles";
import { Adress } from "../Adress";
import { Contact } from "../Contact";

export const DetailsContent: React.FC = () => {
  return (
    <S.Container>
      <S.RestaurantsWrapper>
        <S.RestaurantsName>Restaurante Boa Mesa</S.RestaurantsName>
        <S.FavoriteButton>
          <S.Favorite />
        </S.FavoriteButton>
      </S.RestaurantsWrapper>

      <Adress
        adress="Rua de Souza 10, Braga2"
        city="Braga"
        country="Portugal"
      />

      <S.Separator />

      <S.Information>Contact</S.Information>

      <Contact email="guilherme.guerreiro@wedigitek.com" phone="321312312" />

      <S.Separator />

      <S.Information>Cuisines</S.Information>
    </S.Container>
  );
};
