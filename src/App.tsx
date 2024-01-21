import AppHeader from "./support/header/app-header";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <div style={{ height: "500px" }}>body</div>
      <div style={{ height: "500px" }}>body</div>
      <div style={{ height: "500px" }}>body</div>
      <div style={{ height: "500px" }}>body</div>
    </BrowserRouter>
  );
}

export default App;
