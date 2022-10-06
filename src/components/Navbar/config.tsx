import { Home, Album, MusicNote } from '@mui/icons-material';

import { NavbarButtonsConfig } from './types';

export const NAVBAR_BUTTONS: NavbarButtonsConfig = {
  home: {
    name: 'Home',
    icon: <Home color="primary" />,
    href: '/',
  },
  albums: {
    name: 'Albums',
    icon: <Album color="primary"/>,
    href: '/albums',
  },
  tracks: {
    name: 'Tracks',
    icon: <MusicNote color="primary"/>,
    href: '/tracks',
  },
};