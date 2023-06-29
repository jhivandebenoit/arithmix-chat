export type Conversation = {
  id: number;
  profilePic: string;
  botPic: string;
  messages: Message[];
};

export type Message = {
  type: number;
  text: string;
};
