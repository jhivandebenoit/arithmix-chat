import { Box, TextField, Card, Button } from "@mui/material";
import ChatCard from "./ChatCard";
import { useState } from "react";

const SAMPLE_DATA = [
  {
    profilePic: "./person.svg",
    text: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
  },
  {
    profilePic: "./M-DAQ.svg",
    text: "Lorem ipsum, or lipsum ",
  },
];

export default function CurrentChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(SAMPLE_DATA);
  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          py: 4,
          pr: 4,
          textAlign: "center",
          fontWeight: "bold",
          borderBottom: "0.125rem solid #EDEDED",
          fontSize: "1.5rem",
        }}
      >
        <Box sx={{ pr: 2 }}>
          <img src="./person.svg" />
        </Box>
        <Box> John doe</Box>
      </Box>
      <Box
        sx={{
          maxHeight: "46rem",
          overflowY: "auto",
        }}
      >
        {messages.map((m) => (
          <ChatCard text={m.text} profilePic={m.profilePic} />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: "auto", mb: "2rem", mx: 4 }}>
        <TextField
          fullWidth
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          variant="outlined"
        />
        <Button
          variant="outlined"
          onClick={() => {
            if (message.trim().length != 0) {
              setMessages([...messages, { text: message, profilePic: "./person.svg" }]);
              setMessage("");
            }
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
