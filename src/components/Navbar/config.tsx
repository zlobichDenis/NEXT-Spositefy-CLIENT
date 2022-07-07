import { Home, Album, MusicNote } from "@mui/icons-material";

import { NavbarButtonsConfig } from "./types";

export const NAVBAR_BUTTONS: NavbarButtonsConfig = {
  home: {
    name: 'Home',
    icon: <Home color="primary" />,
  },
  albums: {
    name: 'Albums',
    icon: <Album color="primary"/>,
  },
  tracks: {
    name: 'Tracks',
    icon: <MusicNote color="primary"/>,
  },
};