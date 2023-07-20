import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/theme/default";
import { GlobalStyles } from "./styles/global";
import { CartContextProvider } from "./contexts/CartContext";

import { Router } from "./Router";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />      
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
