import * as S from "./styles";

import { IDetailsHeader } from "./types";
import { StatusBar } from "expo-status-bar";

export const DetailsHeader: React.FC<IDetailsHeader> = ({
  url,
  handleGoBack,
}) => {
  return (
    <S.Container
      source={
        url ? { uri: url } : require("../../../../assets/defaultImage.png")
      }
      resizeMode="cover"
    >
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
        hidden
      />
      <S.HeaderButtonsWrapper>
        <S.ButtonWrapper>
          <S.GoBackButton onPress={handleGoBack}>
            <S.Back />
          </S.GoBackButton>
        </S.ButtonWrapper>
      </S.HeaderButtonsWrapper>
    </S.Container>
  );
};
