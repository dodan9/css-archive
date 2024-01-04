import { BrowserRouter } from "react-router-dom";
import { appRoute } from "./routes";
import { Global } from "@emotion/react";
import { globalStyles } from "./assets/styles/global";
import Nav from "./feature/nav/pages";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Nav />
        {appRoute()}
      </BrowserRouter>
    </>
  );
}

export default App;
