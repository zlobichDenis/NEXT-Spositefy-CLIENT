import { createTheme } from '@mui/material';

import { colors } from './colors';

export const theme = createTheme({
    palette: colors,

    typography: {
        fontFamily: 'Manrope',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
});