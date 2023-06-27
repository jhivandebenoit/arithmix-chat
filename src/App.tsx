import "./App.css";
import { Grid } from "@mui/material";
import ActiveChats from "./components/ActiveChats";
import CurrentChat from "./components/CurrentChat";
import { useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <>
      <Grid container columns={15} sx={{ height: "100vh" }}>
        <Grid item xs={3} sx={{ background: "#F9F9F9" }}>
          <ActiveChats currentChat={currentTab} setCurrentChat={setCurrentTab} />
        </Grid>
        <Grid item xs={12}>
          <CurrentChat currentChat={currentTab} />
        </Grid>
      </Grid>
    </>
  );
}
export default App;
