import React from 'react';
import { Box, Grid, Typography, Avatar, Link, IconButton, Container } from '@mui/material';
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
} from '@mui/icons-material';
import { ReactComponent as GoogleScholarIcon } from '../assets/icon/social/google-scholar.svg';
import { ReactComponent as TelegramIcon } from '../assets/icon/social/telegram.svg';

const Header = ({ data = {} }) => {
  const socialIcons = {
    GitHub: { icon: GitHubIcon, color: '#181717' },
    LinkedIn: { icon: LinkedInIcon, color: '#0A66C2' },
    Instagram: { icon: InstagramIcon, color: '#E4405F' },
    Twitter: { icon: TwitterIcon, color: '#1DA1F2' },
    Facebook: { icon: FacebookIcon, color: '#1877F2' },
    YouTube: { icon: YouTubeIcon, color: '#FF0000' },
    GoogleScholar: { icon: GoogleScholarIcon, color: '#4285F4' },
    Telegram: { icon: TelegramIcon, color: '#0088cc' },
  };

  const contactIcons = { email: EmailIcon, phone: PhoneIcon, location_on: LocationOnIcon };

return (
  <Box
    component="header"
    className="header"
    sx={{
      position: 'relative',
      py: { xs: 2, md: 4 },
      borderRadius: 4,
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #B1C7DE 0%, #6C8C9C 100%)', 
      color: '#0B2536', py: { xs: 2, md: 4 },
      boxShadow: `0 0 25px 6px #B1C7DEaa`, 
      // لبه نئون با gradient متحرک
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        padding: '3px', // ضخامت لبه
        borderRadius: 4,
        background: 'linear-gradient(90deg, #B1C7DE, #6C8C9C)', // gradient نئون
        backgroundSize: '200% 100%',
        mask:
          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMask:
          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none',
        zIndex: 2,
        animation: 'gradientMove 3s linear infinite',
      },

      '@keyframes gradientMove': {
        '0%': { backgroundPosition: '0% 0%' },
        '100%': { backgroundPosition: '200% 0%' },
      },
    }}
  >
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
      {/* === TOP ROW: Avatar + Bio === */}
      <Grid container spacing={4} alignItems="flex-start">
        <Grid item xs={12} md={2} textAlign="center">
          <Avatar
            src="/static/img/face.jpg"
            alt={data.name || 'Profile'}
            sx={{
              width: { xs: 150, sm: 170 },
              height: { xs: 150, sm: 170 },
              mx: 'auto',
              border: '4px solid #1a3b5fff',
              boxShadow: '0 0 15px #B1C7DEaa',
            }}
          />
        </Grid>

        <Grid item xs={12} md={10}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem' },
              fontWeight: 700,
              color: '#0B2536',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {data.name || 'Your Name'}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              mb: 2,
              color: '#0B2536',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {data.title || 'Your Role'}
          </Typography>
          {data.description && (
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem' },
                color: '#0B2536',
                lineHeight: 1.6,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {data.description}
            </Typography>
          )}
        </Grid>
      </Grid>

      {/* === SPLIT LINE === */}
      <Box
        sx={{
          mt: 3,
          mb: 2,
          width: '100%',
          height: '1px',
          background: 'rgba(11, 37, 54, 0.2)', // subtle divider using #0B2536
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
        <Grid item xs={12} md={6}>
          {data.contact?.length > 0 && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                gap: 1,
              }}
            >
              {data.contact.map((item, index) => {
                if (!item || !item.icon || !item.value) return null;
                const Icon = contactIcons[item.icon] || EmailIcon;
                return (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Icon sx={{ color: '#0B2536' }} />
                    <Link
                      href={item.link || '#'}
                      color="#0B2536"
                      underline="none"
                      target={item.link && !item.link.startsWith('mailto:') ? '_blank' : '_self'}
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
        <Grid item xs={12} md={6}>
          {data.social?.length > 0 && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              {data.social.map((social, index) => {
                if (!social?.platform || !social?.link) return null;
                const { icon: Icon, color } = socialIcons[social.platform] || { icon: GitHubIcon, color: '#0B2536' };
                return (
                  <IconButton
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.1)',
                      color,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.3)',
                        color: `${color}CC`,
                        boxShadow: `0 0 8px ${color}80`,
                      },
                    }}
                  >
                    <Icon />
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
