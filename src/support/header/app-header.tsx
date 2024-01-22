import { Link } from "react-router-dom";
import { appHeaderHeight } from "../../bootstrap/helper/global-helper";
import {
  StyledAppBar,
  LogoAndServices,
  StyledServices,
  TranslationAndAuth,
} from "./style";

const pages = ["Products", "Pricing", "Blog"];

function AppHeader() {
  return (
    <StyledAppBar appHeaderHeight={appHeaderHeight}>
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
      <TranslationAndAuth>test</TranslationAndAuth>
    </StyledAppBar>
  );
}

export default AppHeader;
