import AppHeader from "./support/header/view/app-header";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { appHeaderHeight } from "./bootstrap/helper/global-helper";
import HomePage from "./core/home/page/home-page";
import { HomePageWrapper } from "./style";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <AppHeader />
        <HomePageWrapper appHeaderHeight={appHeaderHeight}>
          <HomePage />
        </HomePageWrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;
