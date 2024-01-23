import styled from "styled-components";

export const HomePageWrapper = styled.div<{ appHeaderHeight: number }>`
  flex-grow: 1;
  overflow-y: auto;
  margin-top: ${(style: { appHeaderHeight: number }) =>
    style.appHeaderHeight}px;
  background-color: #f2f4fa;
  padding-left: 7%;
  padding-right: 7%;

  /* Small screens */
  @media (max-width: 480px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;
