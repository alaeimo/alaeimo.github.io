import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
  useTheme,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = ({ sections, activeTab, onTabChange, sectionIcons }) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ width: 250, backgroundColor: theme.palette.background.default, height: '100%' }}
    >
      <List>
        {/* Home button in drawer */}
        <ListItem button key="home" onClick={() => onTabChange('home')}>
          <ListItemIcon
            sx={{ color: activeTab === 'home' ? theme.palette.primary.main : theme.palette.text.secondary }}
          >
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Home"
            primaryTypographyProps={{
              sx: { color: activeTab === 'home' ? theme.palette.primary.main : theme.palette.text.primary, fontWeight: activeTab === 'home' ? 600 : 400 }
            }}
          />
        </ListItem>

        {/* Other sections */}
        {sections.map(({ id, label }) => {
          const Icon = sectionIcons[id]?.icon;
          const isActive = activeTab === id;
          return (
            <ListItem button key={id} onClick={() => onTabChange(id)}>
              {Icon && (
                <ListItemIcon sx={{ color: isActive ? theme.palette.primary.main : theme.palette.text.secondary }}>
                  <Icon />
                </ListItemIcon>
              )}
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  sx: { color: isActive ? theme.palette.primary.main : theme.palette.text.primary, fontWeight: isActive ? 600 : 400 }
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme.palette.background.default,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
        elevation={0}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 3 } }}>
          {/* Mobile hamburger */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton edge="start" onClick={handleDrawerToggle} sx={{ color: theme.palette.primary.main }}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop navbar */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              overflowX: 'auto',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            {/* Home button */}
            <Button
              key="home"
              onClick={() => onTabChange('home')}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                color: activeTab === 'home' ? theme.palette.primary.main : theme.palette.text.secondary,
                fontWeight: activeTab === 'home' ? 600 : 500,
                minWidth: 65,
                py: 1,
                textTransform: 'none',
                borderBottom: activeTab === 'home' ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: theme.palette.primary.main,
                },
              }}
            >
              <HomeIcon
                sx={{
                  fontSize: activeTab === 'home' ? 24 : 20,
                  color: activeTab === 'home' ? theme.palette.primary.main : theme.palette.text.secondary,
                  mb: 0.5,
                }}
              />
              Home
            </Button>

            {/* Other sections */}
            {sections.map(({ id, label }) => {
              const Icon = sectionIcons[id]?.icon;
              const isActive = activeTab === id;

              return (
                <Button
                  key={id}
                  onClick={() => onTabChange(id)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
                    fontWeight: isActive ? 600 : 500,
                    minWidth: 65,
                    py: 1,
                    textTransform: 'none',
                    borderBottom: isActive ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
                    borderRadius: 0,
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {Icon && (
                    <Icon
                      sx={{
                        fontSize: isActive ? 24 : 20,
                        color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
                        mb: 0.5,
                      }}
                    />
                  )}
                  {label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;