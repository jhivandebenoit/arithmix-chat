import { Box, List } from "@mui/material";
import { Dispatch } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

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
  currentChat: number;
};

export default function ActiveChats(props: ActiveChatProps) {
  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    props.setCurrentChat(index);
  };
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
        <Box sx={{ mb: 1, mt: 1.5 }}>Active Chats</Box>
        <AddBoxRoundedIcon sx={{ mt: 1, mr: 1 }} color="primary" fontSize="large" />
      </Box>
      <Box sx={{ width: "100%", maxWidth: 360 }}>
        <List>
          {SAMPLE_DATA.map((m, i) => {
            return (
              <ListItemButton
                sx={{ my: 3, mx: 2, borderRadius: 2 }}
                selected={props.currentChat === i}
                onClick={(event) => handleListItemClick(event, i)}
              >
                <ListItemIcon>
                  <img src={m.botPic}></img>
                </ListItemIcon>
                <ListItemText primary={m.name} />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </>
  );
}
