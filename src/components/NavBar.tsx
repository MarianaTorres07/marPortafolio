import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItemButton, ListItemText, Stack, Chip } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TranslateIcon from '@mui/icons-material/Translate';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.projects'), path: '/projects' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" elevation={0} sx={{ background: 'rgba(11, 15, 25, 0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 74, justifyContent: 'space-between' }}>
          
          {/* Brand / Logo */}
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ width: 40, height: 40, borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1 0%, #f43f5e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 20px -4px rgba(99, 102, 241, 0.5)' }}>
              <CodeIcon />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '-0.02em', background: 'linear-gradient(90deg, #fff 0%, #94a3b8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 }}>
                Mariana Torres
              </Typography>
              <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem', fontWeight: 600 }}>
                  Frontend Engineer
                </Typography>
                <Chip icon={<AutoAwesomeIcon sx={{ fontSize: '10px !important', color: '#f43f5e !important' }} />} label="M.Sc. AI" size="small" sx={{ height: 18, fontSize: '0.62rem', fontWeight: 700, backgroundColor: 'rgba(244, 63, 94, 0.12)', color: '#f43f5e', border: '1px solid rgba(244, 63, 94, 0.2)' }} />
              </Stack>
            </Box>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: isActive ? '#6366f1' : 'text.secondary',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.92rem',
                    position: 'relative',
                    '&:hover': { color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.05)' },
                    ...(isActive && {
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 6,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 16,
                        height: 3,
                        borderRadius: 2,
                        backgroundColor: '#6366f1',
                      },
                    }),
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="primary"
              sx={{ ml: 1.5, fontWeight: 700 }}
            >
              {t('nav.hireMe')}
            </Button>

            {/* Language Switcher Button */}
            <Button
              onClick={toggleLanguage}
              variant="outlined"
              size="small"
              startIcon={<TranslateIcon sx={{ fontSize: '16px !important', color: '#818cf8' }} />}
              sx={{
                ml: 1.5,
                fontWeight: 800,
                fontSize: '0.8rem',
                borderColor: 'rgba(129, 140, 248, 0.35)',
                color: '#fff',
                backgroundColor: 'rgba(99, 102, 241, 0.12)',
                '&:hover': {
                  backgroundColor: 'rgba(99, 102, 241, 0.3)',
                  borderColor: '#818cf8',
                },
              }}
            >
              {language === 'es' ? '🇲🇽 ES' : '🇺🇸 EN'}
            </Button>
          </Box>

          {/* Mobile Hamburger & Lang Button */}
          <Stack direction="row" spacing={1} sx={{ display: { md: 'none' }, alignItems: 'center' }}>
            <Button
              onClick={toggleLanguage}
              variant="outlined"
              size="small"
              sx={{
                fontWeight: 800,
                fontSize: '0.72rem',
                px: 1,
                py: 0.3,
                minWidth: 'auto',
                borderColor: 'rgba(129, 140, 248, 0.35)',
                color: '#fff',
              }}
            >
              {language === 'es' ? '🇲🇽 ES' : '🇺🇸 EN'}
            </Button>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} slotProps={{ paper: { sx: { width: 280, backgroundColor: '#0b0f19', color: '#fff', p: 3 } } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>Navegación</Typography>
          <IconButton onClick={handleDrawerToggle} color="inherit"><CloseIcon /></IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItemButton key={item.label} component={Link} to={item.path} onClick={handleDrawerToggle} sx={{ borderRadius: 2, mb: 1, color: location.pathname === item.path ? '#6366f1' : '#fff' }}>
              <ListItemText primary={item.label} slotProps={{ primary: { sx: { fontWeight: location.pathname === item.path ? 700 : 500 } } }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
