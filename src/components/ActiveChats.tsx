import { Box, List } from "@mui/material";
import { Dispatch } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";

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

// TODO: Take data from this
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
        <Box sx={{ mt: 1 }}>Active Chats</Box>
        <Box sx={{ pr: 2 }}>
          <img src="./plus.svg" />
        </Box>
      </Box>
      {/* <Box sx={{ display: "flex", flexDirection: "column" }}>
       
        <ActiveChatCard data={SAMPLE_DATA[1]} />
        <ActiveChatCard data={SAMPLE_DATA[2]} />
      </Box> */}
      <Box sx={{ width: "100%", maxWidth: 360 }}>
        <List>
          <ListItemButton
            sx={{ my: 3, mx: 2, borderRadius: 2 }}
            selected={props.currentChat === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <img src="./M-DAQ.svg"></img>
            </ListItemIcon>
            <ListItemText primary="M-DAQ Bot" />
          </ListItemButton>

          <ListItemButton
            sx={{ my: 3, mx: 2, borderRadius: 2 }}
            selected={props.currentChat === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <img src="./Envisor.svg"></img>
            </ListItemIcon>
            <ListItemText primary="Envisor Bot" />
          </ListItemButton>
          <ListItemButton
            sx={{ my: 3, mx: 2, borderRadius: 2 }}
            selected={props.currentChat === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <img src="./Shenel.svg"></img>
            </ListItemIcon>
            <ListItemText primary="Shenel bot" />
          </ListItemButton>
        </List>
      </Box>
    </>
  );
}
