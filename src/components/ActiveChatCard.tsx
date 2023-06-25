import { Box } from "@mui/material";

export type ChatCardProps = {
  data: {
    botPic: string;
    name: string;
  };
};

export default function ActiveChatCard(props: ChatCardProps) {
  return (
    <Box
      sx={{
        m: 2,
        py: 2,
        display: "flex",
        "&:hover": {
          backgroundColor: "#EDEDED",
        },
        borderRadius: "0.5rem",
        justifyContent: "flex-start",
        "&:focus": {
          backgroundColor: "#EDEDED",
        },
      }}
    >
      <Box
        sx={{
          px: 2,
        }}
      >
        <img src={props.data.botPic} />
      </Box>
      <Box>{props.data.name}</Box>
    </Box>
  );
}
