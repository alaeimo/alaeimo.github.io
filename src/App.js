import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import theme from './theme';


import HomePage from './components/HomePage';
import ResearchLabsPage from './components/ResearchLabsPage';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <GlobalStyles
          styles={{
            ':root': {
              '--color-bg': theme.palette.background.default,
              '--color-surface': theme.palette.background.paper,
              '--color-primary': theme.palette.primary.main,
            },
            body: { backgroundColor: 'var(--color-bg)' },
          }}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research-labs" element={<ResearchLabsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;