import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#0B2536', // main background
      paper: '#0B2536',   // surfaces, cards, etc.
    },
    primary: {
      main: '#B1C7DE', // for buttons, icons, links
      contrastText: '#0B2536',
    },
    secondary: {
      main: '#5D91C3',
    },
    text: {
      primary: '#B1C7DE',
      secondary: '#6C8C9C',
    },
    divider: '#6C8C9C',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    allVariants: {
      color: '#B1C7DE', // default typography color
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: '#0B2536',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#6C8C9C',
          '&.Mui-selected': {
            color: '#B1C7DE',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: 'none',
        },
      },
    },
  },
  custom: {
    headerCard: {
      background: '#B1C7DE',
      text: '#0B2536',
      glow: '#B1C7DE',
    },
  },
});

export default theme;
