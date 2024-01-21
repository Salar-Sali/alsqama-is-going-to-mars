import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const pages = ["Products", "Pricing", "Blog"];

export const StyledAppBar = styled(AppBar)`
  position: sticky;
  display: flex;
  flex-direction: row-reverse !important;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #5a409b !important;
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

function AppHeader() {
  return (
    <StyledAppBar>
      {/* left side */}
      <LogoAndServices>
        <h2>حجزك</h2>
        <StyledServices>
          {pages.map((page) => (
            <Link
              key={page}
              style={{ color: "white", textDecoration: "none" }}
              to={`/${page}`}
            >
              {page}
            </Link>
          ))}
        </StyledServices>
      </LogoAndServices>
      {/* right side */}
      <TranslationAndAuth>test</TranslationAndAuth>
    </StyledAppBar>
  );
}

export default AppHeader;
