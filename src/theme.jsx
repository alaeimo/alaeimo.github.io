import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#F8FAFC', // academic white (soft, not pure white)
      paper: '#FFFFFF',
    },

    primary: {
      main: '#1E3A8A', // deep academic blue (authority, trust)
      contrastText: '#FFFFFF',
    },

    secondary: {
      main: '#3B82F6', // interaction blue (links, highlights)
    },

    text: {
      primary: '#0F172A',   // strong readable navy-black
      secondary: '#475569', // muted scholarly gray-blue
    },

    divider: '#E2E8F0',
  },

  typography: {
    fontFamily: '"IBM Plex Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    allVariants: {
      letterSpacing: '0.2px',
    },

    h1: { fontWeight: 700, color: '#0F172A' },
    h2: { fontWeight: 600, color: '#0F172A' },
    h3: { fontWeight: 600 },
    body1: { lineHeight: 1.7 },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },

        containedPrimary: {
          backgroundColor: '#1E3A8A',

          '&:hover': {
            backgroundColor: '#162F73',
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#1E3A8A',
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          color: '#475569',
          textTransform: 'none',
          fontWeight: 500,

          '&.Mui-selected': {
            color: '#0F172A',
            fontWeight: 600,
          },
        },
      },
    },
  },

  custom: {
    accent: {
      primary: '#1E3A8A',
      highlight: '#3B82F6',
      soft: '#E6F0FF',
    },

    surface: {
      card: '#FFFFFF',
      subtle: '#F1F5F9',
    },
  },
});

export default theme;