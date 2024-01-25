import { Link } from "react-router-dom";
import { appHeaderHeight } from "../../../bootstrap/helper/global-helper";
import {
  StyledAppBar,
  LogoAndServices,
  StyledServices,
  TranslationAndAuth,
} from "./style";
import { AppHeaderVM } from "../vm/app-header-vm";

function AppHeader() {
  const vm = new AppHeaderVM().useVM();

  return (
    <StyledAppBar appHeaderHeight={appHeaderHeight}>
      <LogoAndServices>
        <h2>حجزك</h2>
        <StyledServices>
          {vm.props.headerTabs.map((page) => (
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
