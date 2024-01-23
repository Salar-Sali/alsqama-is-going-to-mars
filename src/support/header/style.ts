import AppBar from "@mui/material/AppBar/AppBar";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)<{ appHeaderHeight: number }>`
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: row-reverse !important;
  justify-content: space-between;
  background-color: #5a409b !important;
  height: ${(style: { appHeaderHeight: number }) => style.appHeaderHeight}px;
  padding-left: 7%;
  padding-right: 7%;

  /* Small screens */
  @media (max-width: 480px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export const LogoAndServices = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 16px;
  width: fit-content;
`;

export const StyledServices = styled.div`
  display: flex;
  gap: 8px;
`;

export const TranslationAndAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: fit-content;
`;
