import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Box,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = ({ sections, activeTab, onTabChange, sectionIcons }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const iconBox = (Icon, active) => (
    <Box
      sx={{
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1.5,
        backgroundColor: active ? '#EEF2FF' : 'transparent',
        border: active ? '1px solid #CBD5E1' : '1px solid transparent',
      }}
    >
      {Icon && (
        <Icon
          sx={{
            fontSize: 16,
            color: active ? '#1E3A8A' : '#64748B',
          }}
        />
      )}
    </Box>
  );

  const drawer = (
    <Box
      sx={{
        width: 260,
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRight: '1px solid #E2E8F0',
      }}
    >
      <List sx={{ px: 1.2, py: 1.5 }}>
        <ListItemButton
          onClick={() => onTabChange('home')}
          sx={{
            borderRadius: 2,
            mb: 0.8,
            py: 1,
            backgroundColor: activeTab === 'home' ? '#EEF2FF' : 'transparent',
            '&:hover': { backgroundColor: '#F8FAFC' },
          }}
        >
          {iconBox(HomeIcon, activeTab === 'home')}
          <ListItemText
            primary="Home"
            primaryTypographyProps={{
              sx: {
                color: activeTab === 'home' ? '#0F172A' : '#475569',
                fontWeight: activeTab === 'home' ? 700 : 500,
                fontSize: '0.9rem',
              },
            }}
          />
        </ListItemButton>

        {sections.map(({ id, label }) => {
          const Icon = sectionIcons[id]?.icon;
          const isActive = activeTab === id;

          return (
            <ListItemButton
              key={id}
              onClick={() => onTabChange(id)}
              sx={{
                borderRadius: 2,
                mb: 0.8,
                py: 1,
                backgroundColor: isActive ? '#EEF2FF' : 'transparent',
                '&:hover': { backgroundColor: '#F8FAFC' },
              }}
            >
              {iconBox(Icon, isActive)}
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  sx: {
                    color: isActive ? '#0F172A' : '#475569',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.9rem',
                  },
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );

  const navButton = (id, label, Icon) => {
    const isActive = activeTab === id;

    return (
      <Button
        onClick={() => onTabChange(id)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0.3,
          minWidth: 72,
          px: 1.5,
          py: 0.9,
          borderRadius: 2.5,
          textTransform: 'none',
          backgroundColor: isActive ? '#EEF2FF' : 'transparent',
          border: isActive ? '1px solid #CBD5E1' : '1px solid transparent',
          '&:hover': { backgroundColor: '#F8FAFC' },
        }}
      >
        {iconBox(Icon, isActive)}
        <Typography
          sx={{
            fontSize: '0.7rem',
            fontWeight: isActive ? 700 : 500,
            color: isActive ? '#0F172A' : '#475569',
          }}
        >
          {label}
        </Typography>
      </Button>
    );
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: 3, minHeight: 64 }}>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon sx={{ color: '#1E3A8A', fontSize: 20 }} />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              width: '100%',
              gap: 0.5,
            }}
          >
            {navButton('home', 'Home', HomeIcon)}
            {sections.map(({ id, label }) => {
              const Icon = sectionIcons[id]?.icon;
              return navButton(id, label, Icon);
            })}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;