import { ThemeProvider } from "@mui/material";

import { theme } from 'theme';
import { App } from "./app";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

export default Index;