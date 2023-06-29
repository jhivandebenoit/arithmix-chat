import { Box, Button, InputBase } from "@mui/material";
import ChatCard from "./ChatCard";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Conversation } from "./types";

export type CurrentChatProps = {
  currentTab: number;
  currentConversation: Conversation;
  conversations: Conversation[];
  setCurrentConversation: React.Dispatch<React.SetStateAction<Conversation>>;
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
};

export default function CurrentChat(props: CurrentChatProps) {
  const [message, setMessage] = useState("");
  const handleChatInput = () => {
    if (message.trim().length != 0) {
      props.setCurrentConversation((prevConversation) => {
        return { ...prevConversation, messages: [...prevConversation.messages, { type: 0, text: message }] };
      });
      setMessage("");
    }
  };

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
        <Box sx={{ mt: 1 }}> John doe</Box>
      </Box>
      <Box
        sx={{
          maxHeight: "46rem",
          overflowY: "auto",
        }}
      >
        {props.currentConversation.messages.map((m) => {
          let pic = "";
          if (m.type == 0) {
            pic = props.conversations[props.currentTab].profilePic;
          } else {
            pic = props.conversations[props.currentTab].botPic;
          }
          return <ChatCard text={m.text} profilePic={pic} />;
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "auto",
          mb: "2rem",
          mx: 4,
          borderRadius: 2,
          border: "#EDEDED solid .1rem",
          px: 2,
          py: 1,
          "&:hover": {
            borderColor: "primary.main",
            borderStyle: "solid",
            borderWidth: ".1rem",
          },
        }}
      >
        <InputBase
          placeholder="Send a message"
          fullWidth
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={(e) => {
            if (!e.ctrlKey && e.key == "Enter") {
              handleChatInput();
            }
          }}
        />
        <Button variant="text" onClick={handleChatInput} disabled={message.length == 0}>
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
}
