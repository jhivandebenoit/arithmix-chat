import "./App.css";
import { Grid, ThemeProvider } from "@mui/material";
import ActiveChats from "./components/ActiveChats";
import CurrentChat from "./components/CurrentChat";
import { useState, useEffect } from "react";
import SAMPLE_DATA from "./components/SampleData";
import { Message, Conversation } from "./components/types";
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
  const [conversations, setConversations] = useState<Conversation[]>(SAMPLE_DATA);
  const [currentConversation, setCurrentConversation] = useState<Conversation>(conversations[currentTab]);

  useEffect(() => {
    setConversations((prevConversations) => {
      return [...prevConversations, currentConversation];
    });
    setCurrentConversation(conversations[currentTab]);
  }, [currentTab]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container columns={15} sx={{ height: "100vh" }}>
        <Grid item xs={3} sx={{ background: "#F9F9F9" }}>
          <ActiveChats currentChat={currentTab} setCurrentChat={setCurrentTab} />
        </Grid>
        <Grid item xs={12}>
          <CurrentChat
            currentTab={currentTab}
            conversations={conversations}
            setConversations={setConversations}
            currentConversation={currentConversation}
            setCurrentConversation={setCurrentConversation}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default App;
