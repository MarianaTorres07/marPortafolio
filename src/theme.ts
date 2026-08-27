import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1', // Vibrant Indigo Accent
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#f43f5e', // Vibrant Rose Coral Accent
      light: '#fb7185',
      dark: '#e11d48',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
    },
    background: {
      default: '#070a12', // Ultra Deep Space Black
      paper: '#0f172a',   // Modern Card Slate
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Space Grotesk", system-ui, -apple-system, sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: '12px 28px',
          boxShadow: 'none',
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 30px -8px rgba(99, 102, 241, 0.5)',
          },
        },
        contained: {
          '&.MuiButton-containedPrimary': {
            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
            boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)',
              boxShadow: '0 15px 35px -5px rgba(99, 102, 241, 0.6)',
            },
          },
          '&.MuiButton-containedSecondary': {
            background: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
            boxShadow: '0 10px 25px -5px rgba(244, 63, 94, 0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, #fb7185 0%, #f43f5e 100%)',
              boxShadow: '0 15px 35px -5px rgba(244, 63, 94, 0.6)',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(16px)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
