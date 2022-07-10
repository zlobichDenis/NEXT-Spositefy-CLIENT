import { useCallback } from "react";
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
import { useRouter } from "next/router";

import { NAVBAR_BUTTONS } from "./config";
import { DrawerStyled, BoxStyled } from "./Navbar.styled";

export const Navbar = () => {
  const { push } = useRouter();

  const routeTo = useCallback((route) => () => {
    push(route);
  }, [push]);

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
            <ListItem
              key={name}
              onClick={routeTo(NAVBAR_BUTTONS[name].href)}
              disablePadding
            >
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
