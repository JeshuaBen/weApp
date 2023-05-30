import * as S from "./styles";

import RestaurantImage from "../../../../assets/Illustration.png";
import { IFavoritesHeader } from "./types";

export const FavoritesHeader: React.FC<IFavoritesHeader> = ({
  handleGoBack,
}) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.GoBackButton onPress={handleGoBack}>
          <S.Back />
        </S.GoBackButton>

        <S.Title>FAVORITOS</S.Title>
      </S.Wrapper>
      <S.ImageContainer source={RestaurantImage} resizeMode="contain" />
    </S.Container>
  );
};
