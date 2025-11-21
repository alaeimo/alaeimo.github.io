import React from 'react';
import { Box } from '@mui/material';
import ResearchLabsExplorer from './ResearchLabsExplorer';

function ResearchLabsPage() {
  return (
    <Box sx={{ height: '100vh', overflow: 'hidden' }}>
      <ResearchLabsExplorer />
    </Box>
  );
}

export default ResearchLabsPage;