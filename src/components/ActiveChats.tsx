import { Box } from "@mui/material";
import ActiveChatCard from "./ActiveChatCard";
import { Dispatch } from "react";

const SAMPLE_DATA = [
  {
    id: 0,
    botPic: "./M-DAQ.svg",
    name: "M-DAQ Bot",
  },
  {
    id: 1,
    botPic: "./Envisor.svg",
    name: "Ensivor Bot",
  },
  {
    id: 2,
    botPic: "./Shenel.svg",
    name: "Shenel Bot",
  },
];
export type ActiveChatProps = {
  setCurrentChat: Dispatch<number>;
};

export default function ActiveChats(props: ActiveChatProps) {
  return (
    <>
      <Box
        sx={{
          py: 4,
          textAlign: "center",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-around",
          borderBottom: "0.125rem solid #EDEDED",
          fontSize: "1.5rem",
        }}
      >
        <Box sx={{ mt: 1 }}>Active Chats</Box>
        <Box sx={{ pr: 2 }}>
          <img src="./plus.svg" />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <ActiveChatCard data={SAMPLE_DATA[0]} />
        <ActiveChatCard data={SAMPLE_DATA[1]} />
        <ActiveChatCard data={SAMPLE_DATA[2]} />
      </Box>
    </>
  );
}
