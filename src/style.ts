import styled from "styled-components";

export const HomePageWrapper = styled.div<{ appHeaderHeight: number }>`
  flex-grow: 1;
  margin-top: ${(style: { appHeaderHeight: number }) =>
    style.appHeaderHeight}px;
  background-color: #f2f4fa;
`;
