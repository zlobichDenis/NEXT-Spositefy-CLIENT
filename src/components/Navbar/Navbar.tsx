import {
  CssBaseline,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { NAVBAR_BUTTONS } from "./config";
import { DrawerStyled, BoxStyled } from "./Navbar.styled";

export const Navbar = () => {
  return (
    <BoxStyled>
      <CssBaseline />
      <DrawerStyled
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {Object.keys(NAVBAR_BUTTONS).map((name) => (
            <ListItem key={name} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {NAVBAR_BUTTONS[name].icon}
                </ListItemIcon>
                <ListItemText primary={NAVBAR_BUTTONS[name].name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DrawerStyled>
    </BoxStyled>
  );
}
