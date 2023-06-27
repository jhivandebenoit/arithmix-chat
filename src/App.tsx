import "./App.css";
import { Grid, ThemeProvider } from "@mui/material";
import ActiveChats from "./components/ActiveChats";
import CurrentChat from "./components/CurrentChat";
import { useState } from "react";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6F47EB",
    },
  },
});

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Grid container columns={15} sx={{ height: "100vh" }}>
        <Grid item xs={3} sx={{ background: "#F9F9F9" }}>
          <ActiveChats currentChat={currentTab} setCurrentChat={setCurrentTab} />
        </Grid>
        <Grid item xs={12}>
          <CurrentChat currentChat={currentTab} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default App;
