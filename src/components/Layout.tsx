import { useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box, Container, Typography, Stack, IconButton, Divider, Fab, Tooltip } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import theme from '../theme';
import Navbar from './NavBar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useLanguage } from '../context/LanguageContext';

function Layout() {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      '/': 'Mariana Torres Pozos | Frontend Engineer & M.Sc. en IA',
      '/services': 'Servicios & Planes Web | Mariana Torres Pozos',
      '/projects': 'Proyectos & Portafolio Web | Mariana Torres Pozos',
      '/contact': 'Contacto & Cotización | Mariana Torres Pozos',
    };
    document.title = pageTitles[location.pathname] || 'Mariana Torres Pozos | Frontend Engineer & Desarrolladora Web';
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'background.default' }}>
        <Navbar />

        <Box component="main" sx={{ flexGrow: 1, py: { xs: 4, md: 6 } }}>
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Box>

        {/* Footer */}
        <Box component="footer" sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', py: 5, backgroundColor: '#080b12' }}>
          <Container maxWidth="lg">
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, background: 'linear-gradient(90deg, #fff 0%, #94a3b8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Mariana Inés Torres Pozos
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  {t('footer.role')}
                </Typography>
              </Box>

              <Stack direction="row" spacing={1.5}>
                <IconButton component="a" href="https://github.com/MarianaTorres07" target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.08)' } }}>
                  <GitHubIcon />
                </IconButton>
                <IconButton component="a" href="https://linkedin.com/in/marianainestorrespozos/" target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: '#0a66c2', backgroundColor: 'rgba(255, 255, 255, 0.08)' } }}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton component="a" href="mailto:martorres612@gmail.com" sx={{ color: 'text.secondary', '&:hover': { color: '#f43f5e', backgroundColor: 'rgba(255, 255, 255, 0.08)' } }}>
                  <EmailIcon />
                </IconButton>
              </Stack>
            </Stack>

            <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.06)' }} />

            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center' }}>
              © {new Date().getFullYear()} {t('footer.copyright')}
            </Typography>
          </Container>
        </Box>

        {/* Floating WhatsApp Button */}
        <Tooltip title={t('layout.fabTooltip')} placement="left" arrow>
          <Fab
            component="a"
            href="https://wa.me/529831772977?text=Hola%20Mariana,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            sx={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              zIndex: 1000,
              backgroundColor: '#25D366',
              color: '#fff',
              boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
              '&:hover': {
                backgroundColor: '#1ebd59',
                transform: 'scale(1.08)',
                boxShadow: '0 15px 35px rgba(37, 211, 102, 0.6)',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 32 }} />
          </Fab>
        </Tooltip>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
