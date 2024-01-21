import AppHeader from "./support/header/app-header";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

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
