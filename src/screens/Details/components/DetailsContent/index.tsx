import * as S from "./styles";
import { Adress } from "../Adress";
import { Contact } from "../Contact";
import { Cuisines } from "../Cuisines";
import { IDetailsContent } from "./types";

export const DetailsContent: React.FC<IDetailsContent> = ({ data }) => {
  return (
    <S.Container>
      <S.RestaurantsWrapper>
        <S.RestaurantsName>
          {data?.name ?? "Nome não informado"}
        </S.RestaurantsName>
        <S.FavoriteButton>
          {data.isFavorite ? <S.FilledFavorite /> : <S.Favorite />}
        </S.FavoriteButton>
      </S.RestaurantsWrapper>

      <Adress
        adress={data?.addressInfo?.address}
        city={data?.addressInfo?.city}
        country={data?.addressInfo?.country}
      />

      <S.Separator />

      <S.Information>Contact</S.Information>

      <Contact
        email={data?.contacts?.email}
        phone={data?.contacts?.phoneNumber}
      />

      <S.Separator />

      <S.Information>Cuisines</S.Information>
      <S.CuisinesWrapper>
        {data?.cuisines?.map((cuisine, index) => (
          <Cuisines key={index} portuguesePT={cuisine.name["pt-PT"]} />
        ))}
      </S.CuisinesWrapper>
    </S.Container>
  );
};
