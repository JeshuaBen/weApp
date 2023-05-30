import * as S from "./styles";
import { IContact } from "./types";

export const Contact = ({ email, phone }: IContact) => {
  return (
    <S.ContactWrapper>
      <S.EmailWrapper>
        <S.EmailIcon />
        <S.Email>{email} </S.Email>
      </S.EmailWrapper>

      <S.PhoneWrapper>
        <S.Phone />
        <S.PhoneNumber>{phone}</S.PhoneNumber>
      </S.PhoneWrapper>
    </S.ContactWrapper>
  );
};
