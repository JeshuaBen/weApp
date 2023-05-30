import * as S from "./styles";
import { Adress } from "../Adress";
import { Contact } from "../Contact";
import { Cuisines } from "../Cuisines";

export const DetailsContent: React.FC = () => {
  const cuisines = [
    {
      _id: "6092802e2e22443ca6135be3",
      name: {
        en: "African",
        ptPT: "Africana",
        ptBR: "Africana",
      },
      tag: "cuisine",
    },
    {
      _id: "6092802e2e22443ca6135be5",
      name: {
        en: "Alentejana",
        ptPT: "Alentejana",
        ptBR: "Alentejana",
      },
      tag: "cuisine",
    },
    {
      _id: "6092802e2e22443ca6135bea",
      name: {
        en: "Austrian",
        ptPT: "Austríaco",
        ptBR: "Austríaco",
      },
      tag: "cuisine",
    },
  ];

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
      <S.CuisinesWrapper>
        {cuisines.map((cuisine) => (
          <Cuisines key={cuisine._id} portuguesePT={cuisine.name.ptPT} />
        ))}
      </S.CuisinesWrapper>
    </S.Container>
  );
};
