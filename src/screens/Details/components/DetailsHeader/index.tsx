import * as S from "./styles";

import { IDetailsHeader } from "./types";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";

export const DetailsHeader: React.FC<IDetailsHeader> = ({
  url,
  handleGoBack,
}) => {
  const theme = useTheme();

  return (
    <S.Container
      source={{
        uri: url,
      }}
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
