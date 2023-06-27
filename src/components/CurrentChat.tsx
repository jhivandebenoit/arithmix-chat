import { Box, TextField, Button, InputBase } from "@mui/material";
import ChatCard from "./ChatCard";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const SAMPLE_DATA = [
  {
    id: 0,
    profilePic: "./person.svg",
    botPic: "./M-DAQ.svg",
    messages: [
      {
        type: 0,
        text: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
      },
      {
        type: 1,
        text: "Lorem ipsum, or lipsum ",
      },
    ],
  },
  {
    id: 1,
    profilePic: "./person.svg",
    botPic: "./Envisor.svg",
    messages: [
      {
        type: 0,
        text: " unknown typesetter in the 15th century who is thought to have scrambled men book. It usually begins with:",
      },
      {
        type: 1,
        text: "Lorem ipsum, or lipsum ",
      },
      {
        type: 0,
        text: " unknown typeho is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
      },
      {
        type: 1,
        text: "Lorem ipsum, or lipsum ",
      },
    ],
  },
  {
    id: 2,
    profilePic: "./person.svg",
    botPic: "./Shenel.svg",
    messages: [
      {
        type: 0,
        text: " unknown typesetter in the 15th century who is thought to have scrambled men book. It usually begins with:",
      },
      {
        type: 1,
        text: "Lorem ipsum, or lipsum ",
      },
      {
        type: 0,
        text: " unknown typeho is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
      },
      {
        type: 1,
        text: "Lorem ipsum, or lipsum ",
      },
    ],
  },
];

type Conversation = {
  id: number;
  profilePic: string;
  botPic: string;
  messages: Message[];
};

type Message = {
  type: number;
  text: string;
};

export type CurrentChatProps = {
  currentChat: number;
};

export default function CurrentChat(props: CurrentChatProps) {
  const [message, setMessage] = useState("");
  const [conversations, setConversations] = useState<Conversation[]>(SAMPLE_DATA);
  const [currentConversation, setCurrentConversation] = useState<Conversation>(conversations[props.currentChat]);
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
      {/* TODO: FIX THIS */}
      <Box
        sx={{
          maxHeight: "46rem",
          overflowY: "auto",
        }}
      >
        {conversations[props.currentChat].messages.map((m) => {
          let pic = "";
          if (m.type == 0) {
            pic = conversations[props.currentChat].profilePic;
          } else {
            pic = conversations[props.currentChat].botPic;
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
          border: "#EDEDED solid .125rem",
          px: 2,
          py: 1,
          "&:hover": {
            border: "#0500FF solid .125rem ",
            opacity: 1,
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
        />
        <Button
          variant="text"
          onClick={() => {
            if (message.trim().length != 0) {
              setMessage("");
            }
          }}
        >
          {/* TODO: Make button disable when no text available */}
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
}
