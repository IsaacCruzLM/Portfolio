import { useContext } from "react";
import { ThemeProvider } from "styled-components";

import Routes from "./Routes";
import AppContext from "./context/AppContext";

import GlobalStyle from "./styles/global";

function App() {
  const { theme } = useContext(AppContext)

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
