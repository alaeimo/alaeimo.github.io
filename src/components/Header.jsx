import React, { useEffect, useRef } from 'react';
import { Box, Typography, Avatar, Link, IconButton, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ReactComponent as GoogleScholarIcon } from '../assets/icon/social/google-scholar.svg';
import { ReactComponent as TelegramIcon } from '../assets/icon/social/telegram.svg';


import './styles/Header.css';

const Header = ({ data = {} }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodes = [];
    const numNodes = 20;
    const maxDistance = 150;

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, 2 * Math.PI);
        ctx.fill();
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const socialIcons = {
    GitHub: { icon: GitHubIcon, color: '#181717' },
    LinkedIn: { icon: LinkedInIcon, color: '#0A66C2' },
    Instagram: { icon: InstagramIcon, color: '#E4405F' },
    Twitter: { icon: TwitterIcon, color: '#1DA1F2' },
    Facebook: { icon: FacebookIcon, color: '#1877F2' },
    YouTube: { icon: YouTubeIcon, color: '#FF0000' },
    GoogleScholar: { icon: GoogleScholarIcon, color: '#4285F4' },
    Telegram: { icon: TelegramIcon, color: '#0088cc' }, // Telegram blue
  };


  const contactIcons = {
    email: EmailIcon,
    phone: PhoneIcon,
    location_on: LocationOnIcon,
  };

  return (
    <Box
      component="header"
      className="header"
      sx={{
        position: 'relative',
        bgcolor: 'linear-gradient(135deg, #935cdbff 0%, #13110eff 100%)',
        color: 'white',
        py: { xs: 2, sm: 1.5, md: 3, lg: 2, xl: 4 }, 
        borderRadius: 4,
        mb: { xs: 0, sm: 0, md: 0, lg: 1, xl: 0 },
        textAlign: 'center',
        boxShadow: 3,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 5,
          left: 5,
          right: 5,
          bottom: 5,
          border: '2px solid rgba(255,255,255,0.3)',
          borderRadius: 3, 
          pointerEvents: 'none', 
        }}
      />
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Avatar
            src="/static/img/face.jpg"
            alt={data.name || 'Profile'}
            className="face-image"
            sx={{
              width: { xs: 100, sm: 120 },
              height: { xs: 100, sm: 120 },
              mx: 'auto',
              mb: 1,
              border: '4px solid white',
              boxShadow: 2,
            }}
          />
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem' },
            mb: 1,
            color: '#F5F6F5', // Bright off-white
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 700, // Bold for prominence
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            background: 'linear-gradient(180deg, #F5F6F5 30%, #E0C097 100%)', // Gradient text
            WebkitBackgroundClip: 'text',
            animation: 'fadeIn 1s ease-out',
            '@keyframes fadeIn': {
              from: { opacity: 0, transform: 'translateY(10px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          {data.name || 'Your Name'}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          className="subtitle"
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
            mb: 2,
            color: '#F5E8C7', // Warm beige, matches gradient end
            fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
            fontWeight: 400, // Lighter for hierarchy
            opacity: 0.95,
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
            animation: 'fadeIn 1.2s ease-out 0.2s',
            animationFillMode: 'both',
            '@keyframes fadeIn': {
              from: { opacity: 0, transform: 'translateY(10px)' },
              to: { opacity: 0.95, transform: 'translateY(0)' },
            },
          }}
        >
          {data.title || 'Your Role'}
        </Typography>
        {data.description && (
          <Typography
            variant="body1"
            sx={{
              maxWidth: 1500,
              mx: 'auto',
              mb: 2,
              color: '#E8ECEF', 
              fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
              fontWeight: 300, 
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              lineHeight: 1.6,
              textAlign: 'center', // center the text
              animation: 'fadeIn 1.4s ease-out 0.4s',
              animationFillMode: 'both',
              '@keyframes fadeIn': {
                from: { opacity: 0, transform: 'translateY(10px)' },
                to: { opacity: 0.95, transform: 'translateY(0)' },
              },
            }}
          >
            {data.description}
          </Typography>
        )}


          {data.contact?.length > 0 && (
            <Box
              className="contact-info"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: { xs: 1, sm: 1.5, md: 3, lg: 4, xl: 5 },
                mb: 2,
              }}
            >
              {data.contact.map((item, index) => {
                if (!item || !item.icon || !item.value) return null;
                const Icon = contactIcons[item.icon] || EmailIcon;
                return (
                  <Box key={index} className="contact-item" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Icon sx={{ fontSize: 20, color: '#FFFFFF' }} />
                    <Link
                      href={item.link || '#'}
                      color="#FFFFFF" // Clean white
                      underline="none"
                      target={item.link && !item.link.startsWith('mailto:') ? '_blank' : '_self'}
                      rel={item.link && !item.link.startsWith('mailto:') ? 'noopener noreferrer' : undefined}
                      sx={{
                        fontSize: '0.95rem',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      {item.value}
                    </Link>
                  </Box>
                );
              })}
            </Box>
          )}
          {data.social?.length > 0 && (
            <Box
              className="header-footer"
              sx={{
                mt: 2,
                pt: 2,
                borderTop: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              {data.social.map((social, index) => {
                if (!social || !social.platform || !social.link) return null;
                const { icon: Icon, color } = socialIcons[social.platform] || { icon: GitHubIcon, color: '#666' };
                return (
                  <IconButton
                    key={index}
                    href={social.link}
                    className="social-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.platform}
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.1)',
                      color,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.3)',
                        color: `${color}CC`, // Lighter brand color
                        boxShadow: `0 0 8px ${color}80`, // Glow effect
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Icon />
                  </IconButton>
                );
              })}
            </Box>
          )}
        </Container>
    </Box>
  );
};

export default Header;