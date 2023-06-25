import "./App.css";
import { Grid } from "@mui/material";
import ActiveChats from "./components/ActiveChats";
import CurrentChat from "./components/CurrentChat";

function App() {
  return (
    <>
      <Grid container columns={15} sx={{ height: "100vh" }}>
        <Grid item xs={3} sx={{ background: "#F9F9F9" }}>
          <ActiveChats />
        </Grid>
        <Grid item xs={12}>
          <CurrentChat />
        </Grid>
      </Grid>
    </>
  );
}
export default App;
