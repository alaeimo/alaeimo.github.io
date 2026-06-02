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
    GitHub: { icon: GitHubIcon, color: '#1E3A8A' },
    LinkedIn: { icon: LinkedInIcon, color: '#1E3A8A' },
    Instagram: { icon: InstagramIcon, color: '#1E3A8A' },
    Twitter: { icon: TwitterIcon, color: '#1E3A8A' },
    Facebook: { icon: FacebookIcon, color: '#1E3A8A' },
    YouTube: { icon: YouTubeIcon, color: '#1E3A8A' },
    GoogleScholar: { icon: GoogleScholarIcon, color: '#1E3A8A' },
    Telegram: { icon: TelegramIcon, color: '#1E3A8A' },
  };

  const contactIcons = {
    email: EmailIcon,
    phone: PhoneIcon,
    location_on: LocationOnIcon
  };

  return (
    <Box
      component="header"
      sx={{
        position: 'relative',
        py: { xs: 3, md: 5 },
        backgroundColor: '#F8FAFC',
        color: '#0F172A',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <Container maxWidth="lg">

        {/* TOP SECTION */}
        <Grid container spacing={4} alignItems="center">

          {/* Avatar */}
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                src="/static/img/face.jpg"
                alt={data.name || 'Profile'}
                sx={{
                  width: { xs: 120, md: 150 },
                  height: { xs: 120, md: 150 },
                  mx: 'auto',
                  border: '2px solid #E2E8F0',
                }}
              />

              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                sx={{
                  mt: 3,
                  backgroundColor: '#1E3A8A',
                  color: '#ffffff',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#162F73',
                  },
                }}
                component="a"
                href="/static/pdf/MohammadAlaei-CV.pdf"
                download
              >
                Download CV
              </Button>
            </Box>
          </Grid>

          {/* Info */}
          <Grid item xs={12} md={9}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.4rem' },
                fontWeight: 700,
                color: '#0F172A',
                mb: 1,
              }}
            >
              {data.name || 'Your Name'}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 500,
                color: '#1E3A8A',
                mb: 2,
              }}
            >
              {data.title || 'Your Role'}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#475569',
                lineHeight: 1.7,
                maxWidth: '700px',
              }}
            >
              {data.description}
            </Typography>
          </Grid>
        </Grid>

        {/* CONTACT + SOCIAL */}
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: '1px solid #E2E8F0',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >

          {/* Contact */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {data.contact?.map((item, i) => {
              if (!item?.icon || !item?.value) return null;
              const Icon = contactIcons[item.icon] || EmailIcon;

              return (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Icon sx={{ color: '#1E3A8A', fontSize: '1rem' }} />
                  <Link
                    href={item.link}
                    underline="hover"
                    sx={{ color: '#475569' }}
                  >
                    {item.value}
                  </Link>
                </Box>
              );
            })}
          </Box>

          {/* Social */}
          <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
            {data.social?.map((social, i) => {
              const { icon: Icon } =
                socialIcons[social.platform] || { icon: GitHubIcon };

              return (
                <IconButton
                  key={i}
                  href={social.link}
                  target="_blank"
                  sx={{
                    width: { xs: 36, sm: 38, md: 40 }, 
                    height: { xs: 36, sm: 38, md: 40 },
                    backgroundColor: '#EEF2FF',
                    color: '#1E3A8A',
                    '&:hover': {
                      backgroundColor: '#1E3A8A',
                      color: '#FFFFFF',
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              );
            })}
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Header;