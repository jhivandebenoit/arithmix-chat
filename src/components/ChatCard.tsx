import { Card, Box } from "@mui/material";

export type ChatCardProps = {
  profilePic: string;
  text: string;
};
export default function ChatCard(props: ChatCardProps) {
  return (
    <Card
      sx={{
        m: 4,
        p: 2,
        boxShadow: "none",
        border: "0.125rem solid #EDEDED",
        borderRadius: "0.5rem",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Box sx={{ pr: 1, mr: 1 }}>
        <img src={props.profilePic} />
      </Box>
      <Box>{props.text}</Box>
    </Card>
  );
}
