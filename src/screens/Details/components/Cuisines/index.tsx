import * as S from "./styles";
import { ICuisine } from "./types";

export const Cuisines: React.FC<ICuisine> = ({ portuguesePT }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Icon />
        <S.Language>{portuguesePT}</S.Language>
      </S.Wrapper>
    </S.Container>
  );
};
