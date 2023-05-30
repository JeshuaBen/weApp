import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 16px;
`;
