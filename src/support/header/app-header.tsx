import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const pages = ["Products", "Pricing", "Blog"];

export const StyledAppBar = styled(AppBar)`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #5a409b !important;
`;

export const LogoAndServices = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: blue;
`;

export const StyledServices = styled.div`
  display: flex;
  gap: 8px;
  /* background-color: red; */
`;

function AppHeader() {
  return (
    <StyledAppBar>
      {/* right side */}
      <LogoAndServices>
        <h2>txt</h2>
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
      {/* left side */}
      <div>test</div>
    </StyledAppBar>
  );
}
export default AppHeader;
