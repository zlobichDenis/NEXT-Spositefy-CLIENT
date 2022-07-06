import { Button, ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import Navbar from "../components/Navbar/Navbar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Button>Some button</Button>
    </ThemeProvider>
  )
};

export default App;