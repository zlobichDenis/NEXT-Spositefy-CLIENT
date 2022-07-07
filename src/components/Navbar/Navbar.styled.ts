import { styled, Drawer, Box } from "@mui/material";

export const DrawerStyled = styled(Drawer)`
  flex-shrink: 0;
  
  & .MuiDrawer-paper {
    width: 240px;
    box-sizing: border-box;
  }
`;

export const BoxStyled = styled(Box)`
  display: flex;
`;