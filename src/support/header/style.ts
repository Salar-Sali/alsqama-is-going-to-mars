import AppBar from "@mui/material/AppBar/AppBar";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)<{ appHeaderHeight: number }>`
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: row-reverse !important;
  justify-content: space-between;
  padding-left: 64px;
  padding-right: 64px;
  background-color: #5a409b !important;
  height: ${(style: { appHeaderHeight: number }) => style.appHeaderHeight}px;
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
