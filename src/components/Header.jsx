import React from 'react';
import { Box, Grid, Typography, Avatar, Link, Button, IconButton, Container } from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';
import { ReactComponent as GoogleScholarIcon } from '../assets/icon/social/google-scholar.svg';
import { ReactComponent as TelegramIcon } from '../assets/icon/social/telegram.svg';

const Header = ({ data = {} }) => {
  const socialIcons = {
    GitHub: { icon: GitHubIcon, color: '#2d3748' },
    LinkedIn: { icon: LinkedInIcon, color: '#0A66C2' },
    Instagram: { icon: InstagramIcon, color: '#E4405F' },
    Twitter: { icon: TwitterIcon, color: '#1DA1F2' },
    Facebook: { icon: FacebookIcon, color: '#1877F2' },
    YouTube: { icon: YouTubeIcon, color: '#FF0000' },
    GoogleScholar: { icon: GoogleScholarIcon, color: '#2c5e8c' },
    Telegram: { icon: TelegramIcon, color: '#0088cc' },
  };

  const contactIcons = { email: EmailIcon, phone: PhoneIcon, location_on: LocationOnIcon };

  return (
    <Box
      component="header"
      className="header"
      sx={{
        position: 'relative',
        py: { xs: 3, sm: 3, md: 4 },
        borderRadius: { xs: 0, sm: 0, md: 4 },
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1a3a5c 0%, #2c5e8c 100%)',
        color: '#ffffff',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
        {/* === TOP ROW: Avatar + Bio === */}
        <Grid container spacing={{ xs: 3, sm: 3, md: 4 }} alignItems="flex-start">
          {/* Avatar Column - Full width on mobile/tablet, auto on desktop */}
          <Grid item xs={12} sm={12} md={3} lg={2.5}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                src="/static/img/face.jpg"
                alt={data.name || 'Profile'}
                sx={{
                  width: { xs: 120, sm: 140, md: 150, lg: 170 },
                  height: { xs: 120, sm: 140, md: 150, lg: 170 },
                  mx: 'auto',
                  border: '3px solid #ffffff',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              />
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                sx={{
                  mt: 3,
                  mb: { xs: 1, sm: 1, md: 0 },
                  display: 'inline-flex',
                  backgroundColor: '#ffffff',
                  color: '#1a3a5c',
                  '&:hover': {
                    backgroundColor: '#e8f0f8',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
                component="a"
                href="/static/pdf/MohammadAlaei-CV.pdf"
                download
              >
                Download CV
              </Button>
            </Box>
          </Grid>

          {/* Bio Column - Full width on mobile/tablet, remaining on desktop */}
          <Grid item xs={12} sm={12} md={9} lg={9.5}>
            <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.2rem', lg: '2.5rem' },
                  fontWeight: 700,
                  color: '#ffffff',
                  mb: 1,
                }}
              >
                {data.name || 'Your Name'}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 400,
                  mb: 2,
                  color: '#e0e8f0',
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem', lg: '1.5rem' },
                }}
              >
                {data.title || 'Your Role'}
              </Typography>
              {data.description && (
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem', lg: '1.125rem' },
                    color: '#e0e8f0',
                    lineHeight: 1.6,
                    px: { xs: 2, sm: 2, md: 0 },
                  }}
                >
                  {data.description}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* === SPLIT LINE === */}
        <Box
          sx={{
            mt: 3,
            mb: 2,
            width: '100%',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />

        {/* === CONTACT + SOCIAL ROW === */}
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: 1 }}
        >
          {/* Contact Info (left) */}
          <Grid item xs={12} sm={12} md={6}>
            {data.contact?.length > 0 && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },
                  gap: 1,
                }}
              >
                {data.contact.map((item, index) => {
                  if (!item || !item.icon || !item.value) return null;
                  const Icon = contactIcons[item.icon] || EmailIcon;
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        transition: 'transform 0.2s ease',
                        '&:hover': {
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <Icon sx={{ color: '#ffffff', fontSize: '1.1rem' }} />
                      <Link
                        href={item.link || '#'}
                        color="#ffffff"
                        underline="hover"
                        target={item.link && !item.link.startsWith('mailto:') ? '_blank' : '_self'}
                        sx={{
                          opacity: 0.9,
                          '&:hover': { opacity: 1 },
                        }}
                      >
                        {item.value}
                      </Link>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Grid>

          {/* Social Media (right) */}
          <Grid item xs={12} sm={12} md={6}>
            {data.social?.length > 0 && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', sm: 'center', md: 'flex-end' },
                  gap: 1.5,
                  flexWrap: 'wrap',
                  mt: { xs: 2, sm: 2, md: 0 },
                }}
              >
                {data.social.map((social, index) => {
                  if (!social?.platform || !social?.link) return null;
                  const { icon: Icon, color } = socialIcons[social.platform] || { icon: GitHubIcon, color: '#ffffff' };
                  return (
                    <IconButton
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        width: { xs: 36, sm: 38, md: 40 },
                        height: { xs: 36, sm: 38, md: 40 },
                        borderRadius: '50%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: color,
                          color: '#ffffff',
                          transform: 'translateY(-3px)',
                          boxShadow: `0 4px 12px ${color}60`,
                        },
                      }}
                    >
                      <Icon sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' } }} />
                    </IconButton>
                  );
                })}
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;