import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const ContactWrapper = styled.View`
  width: 100%;
  border-radius: 10px;

  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const EmailWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const EmailIcon = styled(Feather).attrs({
  name: "mail",
  size: 14,
})``;

export const Email = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.black};
`;

export const PhoneWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Phone = styled(Feather).attrs({
  name: "phone",
  size: 14,
})``;

export const PhoneNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.black};
`;
