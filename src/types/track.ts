export type Comment = {
  _id: string;
  username: string;
  text: string;
}

export type Track = {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comment: Comment[];
}