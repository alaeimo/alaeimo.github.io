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
import HomeIcon from '@mui/icons-material/Home'; // Home icon

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
            sx={{ color: activeTab === 'home' ? theme.palette.primary.main : theme.palette.secondary.main }}
          >
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Home"
            sx={{ color: activeTab === 'home' ? theme.palette.primary.main : theme.palette.secondary.main }}
          />
        </ListItem>

        {/* Other sections */}
        {sections.map(({ id, label }) => {
          const Icon = sectionIcons[id]?.icon;
          const isActive = activeTab === id;
          return (
            <ListItem button key={id} onClick={() => onTabChange(id)}>
              {Icon && (
                <ListItemIcon sx={{ color: isActive ? theme.palette.primary.main : theme.palette.secondary.main }}>
                  <Icon />
                </ListItemIcon>
              )}
              <ListItemText
                primary={label}
                sx={{ color: isActive ? theme.palette.primary.main : theme.palette.secondary.main }}
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
        elevation={1}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
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
              gap: 2,
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
                fontSize: 11,
                color: activeTab === 'home' ? theme.palette.primary.main : theme.palette.secondary.main,
                fontWeight: activeTab === 'home' ? 700 : 500,
                minWidth: 70,
                borderBottom:
                  activeTab === 'home' ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: theme.palette.primary.light,
                },
              }}
            >
              <HomeIcon
                sx={{
                  fontSize: activeTab === 'home' ? 30 : 24,
                  color: activeTab === 'home' ? theme.palette.primary.main : theme.palette.secondary.main,
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
                    fontSize: 11,
                    color: isActive ? theme.palette.primary.main : theme.palette.secondary.main,
                    fontWeight: isActive ? 700 : 500,
                    minWidth: 70,
                    borderBottom:
                      isActive ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: theme.palette.primary.light,
                    },
                  }}
                >
                  {Icon && (
                    <Icon
                      sx={{
                        fontSize: isActive ? 30 : 24,
                        color: isActive ? theme.palette.primary.main : theme.palette.secondary.main,
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
