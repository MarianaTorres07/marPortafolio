import { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Stack, Chip, Card, Avatar, Paper, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CodeIcon from '@mui/icons-material/Code';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../context/LanguageContext';

function Home() {
  const { t } = useLanguage();

  const highlights = [
    { title: t('home.h1Title'), desc: t('home.h1Desc'), icon: <CodeIcon sx={{ fontSize: 32, color: '#10b981' }} /> },
    { title: t('home.h2Title'), desc: t('home.h2Desc'), icon: <ShoppingBagIcon sx={{ fontSize: 32, color: '#f43f5e' }} /> },
    { title: t('home.h3Title'), desc: t('home.h3Desc'), icon: <AutoAwesomeIcon sx={{ fontSize: 32, color: '#818cf8' }} /> },
  ];

  const techStack = [
    'React 19', 'Angular', 'TypeScript', 'JavaScript (ES6+)',
    'Material UI', 'HTML5 / CSS3', 'Node.js', 'Python & IA',
    'REST APIs', 'Figma UI/UX', 'Git / GitHub',
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      name: 'JS Topografía',
      role: 'Empresa de Ingeniería',
      text: 'Mariana desarrolló el sitio web oficial de nuestra firma de ingeniería y topografía. Logró una interfaz moderna, ultra rápida y responsiva que transmite la calidad de nuestros servicios y genera prospectos constantes.',
      link: 'jstopografia.net',
      rating: 5,
    },
    {
      name: 'App Commerce',
      role: 'Plataforma E-Commerce',
      text: 'Excelente experiencia trabajando con Mariana. Diseñó el catálogo e-commerce y el flujo de carrito de compras con gran atención al detalle, garantizando seguridad y una excelente experiencia de usuario.',
      link: 'appeccomerce.com',
      rating: 5,
    },
    {
      name: 'Cliente Eventos Especiales',
      role: 'Aplicación Web & Invitación Digital',
      text: 'La aplicación de invitaciones digitales para nuestro evento superó todas las expectativas. El sistema RSVP en tiempo real y la lectura de pases con código QR funcionaron de forma impecable.',
      link: 'Invitación Digital',
      rating: 5,
    },
    {
      name: 'Despacho Profesional',
      role: 'Rediseño UI/UX Corporativo',
      text: 'Un trabajo excepcional de principio a fin. El prototipado en Figma y el desarrollo en React fueron rápidos, con código limpio y una comunicación transparente en cada etapa del proyecto.',
      link: 'Proyecto Corporativo',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box>
      <Box sx={{ py: { xs: 4, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}>
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack direction="row" spacing={1.5} sx={{ mb: 3, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Chip
                icon={<VerifiedIcon sx={{ color: '#818cf8 !important' }} />}
                label={t('home.heroBadge1')}
                sx={{
                  px: 1, py: 0.5,
                  backgroundColor: 'rgba(99, 102, 241, 0.15)', color: '#818cf8',
                  border: '1px solid rgba(99, 102, 241, 0.35)', fontWeight: 800, fontSize: '0.85rem',
                }}
              />
              <Chip
                label={t('home.heroBadge2')}
                sx={{
                  px: 1,
                  backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399',
                  border: '1px solid rgba(16, 185, 129, 0.35)', fontWeight: 800, fontSize: '0.82rem',
                }}
              />
            </Stack>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.6rem', md: '4.4rem' },
                lineHeight: 1.08, mb: 2.5, fontWeight: 800, letterSpacing: '-0.03em',
              }}
            >
              {t('home.heroTitleLine1')}<br />
              <Box component="span" className="gradient-text">
                {t('home.heroTitleGradient')}
              </Box>
              <br />{t('home.heroTitleLine2')}
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1.05rem', md: '1.2rem' }, lineHeight: 1.7, mb: 4, maxWidth: '640px' }}>
              {t('home.heroSubtitle')}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button
                component={Link}
                to="/services"
                variant="contained"
                size="large"
                color="secondary"
                endIcon={<ArrowForwardIcon />}
                sx={{ py: 1.8, px: 4, fontSize: '1.05rem', fontWeight: 800 }}
              >
                {t('home.btnServices')}
              </Button>
              <Button
                component="a"
                href="https://wa.me/529831772977?text=Hola%20Mariana,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20web"
                target="_blank"
                variant="outlined"
                size="large"
                startIcon={<WhatsAppIcon sx={{ color: '#25D366' }} />}
                sx={{ py: 1.8, px: 3.5, fontSize: '1.05rem', borderColor: 'rgba(37, 211, 102, 0.4)', color: '#fff', '&:hover': { borderColor: '#25D366', backgroundColor: 'rgba(37, 211, 102, 0.12)' } }}
              >
                {t('home.btnWhatsapp')}
              </Button>
            </Stack>

            <Grid container spacing={3} sx={{ mt: 5 }}>
              <Grid size={4}>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#818cf8' }}>{t('home.stat1Number')}</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>{t('home.stat1Label')}</Typography>
              </Grid>
              <Grid size={4}>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#34d399' }}>{t('home.stat2Number')}</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>{t('home.stat2Label')}</Typography>
              </Grid>
              <Grid size={4}>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#fb7185' }}>{t('home.stat3Number')}</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>{t('home.stat3Label')}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              className="glass-card"
              sx={{
                p: 4, borderRadius: 5,
                border: '1.5px solid rgba(129, 140, 248, 0.3) !important',
                position: 'relative',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, mb: 3 }}>
                <Avatar
                  src="/images/mariana.jpg"
                  alt="Mariana Torres Pozos"
                  sx={{ width: 80, height: 80, border: '3px solid #818cf8', boxShadow: '0 8px 25px -5px rgba(99, 102, 241, 0.5)' }}
                >
                  MT
                </Avatar>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>Mariana Torres Pozos</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>Frontend Engineer & Web Developer</Typography>
                  <Chip label="Master en Inteligencia Artificial" size="small" color="primary" sx={{ mt: 1, height: 22, fontSize: '0.7rem', fontWeight: 800 }} />
                </Box>
              </Box>

              <Stack spacing={2} sx={{ mb: 3 }}>
                <Box sx={{ p: 2, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <Typography variant="caption" color="#34d399" sx={{ fontWeight: 800, display: 'block', mb: 0.5, letterSpacing: 0.5 }}>{t('home.badgeLiveEng')}</Typography>
                  <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600 }}>JS Topografía — jstopografia.net</Typography>
                </Box>
                <Box sx={{ p: 2, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <Typography variant="caption" color="#fb7185" sx={{ fontWeight: 800, display: 'block', mb: 0.5, letterSpacing: 0.5 }}>{t('home.badgeLiveEcom')}</Typography>
                  <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600 }}>App Commerce — appeccomerce.com</Typography>
                </Box>
                <Box sx={{ p: 2, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <Typography variant="caption" color="#818cf8" sx={{ fontWeight: 800, display: 'block', mb: 0.5, letterSpacing: 0.5 }}>{t('home.badgeDev')}</Typography>
                  <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600 }}>Amoverte — Fisioterapia & Salud</Typography>
                </Box>
              </Stack>

              <Button
                component={Link}
                to="/services"
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ py: 1.5, fontWeight: 800, fontSize: '0.98rem' }}
              >
                {t('home.btnQuoteWeb')}
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ py: 6 }}>
        <Box sx={{ mb: 5, textAlign: 'center' }}>
          <Chip label={t('home.helpSectionBadge')} color="primary" sx={{ mb: 1.5, fontWeight: 800 }} />
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 1.5 }}>
            {t('home.helpSectionTitle')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, mx: 'auto' }}>
            {t('home.helpSectionSub')}
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {highlights.map((h, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx}>
              <Card className="glass-card" sx={{ height: '100%', p: 3.5, borderRadius: 4 }}>
                <Box sx={{ mb: 2 }}>{h.icon}</Box>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>{h.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 2.5 }}>{h.desc}</Typography>
                <Button component={Link} to="/services" variant="outlined" size="small" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
                  {t('home.btnDetails')}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ py: 8 }}>
        <Stack direction="row" sx={{ mb: 4, justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h2" sx={{ fontWeight: 800 }}>{t('home.projectsSectionTitle')}</Typography>
            <Typography variant="body1" color="text.secondary">{t('home.projectsSectionSub')}</Typography>
          </Box>
          <Button component={Link} to="/projects" endIcon={<ArrowForwardIcon />} sx={{ display: { xs: 'none', sm: 'inline-flex' }, fontWeight: 700 }}>
            {t('home.btnViewAll')}
          </Button>
        </Stack>

        <Grid container spacing={4}>
          {projects.slice(0, 3).map((project) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id} sx={{ display: 'flex' }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Tech Stack Bar */}
      <Box sx={{ py: 6, mb: 4, textAlign: 'center', backgroundColor: 'rgba(15, 23, 42, 0.4)', borderRadius: 5, border: '1px solid rgba(255, 255, 255, 0.06)', p: 4 }}>
        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase', display: 'block', mb: 2.5 }}>
          {t('home.techStackTitle')}
        </Typography>
        <Stack direction="row" spacing={1.5} useFlexGap sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          {techStack.map((tech, idx) => (
            <Chip
              key={idx}
              label={tech}
              sx={{
                px: 1.5,
                py: 0.8,
                fontSize: '0.88rem',
                fontWeight: 700,
                backgroundColor: 'rgba(99, 102, 241, 0.12)',
                color: '#818cf8',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                '&:hover': {
                  backgroundColor: 'rgba(99, 102, 241, 0.25)',
                },
              }}
            />
          ))}
        </Stack>
      </Box>

      {/* Testimonials Carousel Section */}
      <Box sx={{ py: 6, mb: 4 }}>
        <Box sx={{ mb: 5, textAlign: 'center' }}>
          <Chip label={t('home.reviewsBadge')} color="primary" sx={{ mb: 1.5, fontWeight: 800 }} />
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 1.5 }}>
            {t('home.reviewsTitle')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            {t('home.reviewsSub')}
          </Typography>
        </Box>

        {/* Carousel Container */}
        <Box sx={{ position: 'relative', maxWidth: 840, mx: 'auto', px: { xs: 2, sm: 6 } }}>
          <Paper
            className="glass-card"
            sx={{
              p: { xs: 3.5, sm: 5 },
              borderRadius: 5,
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              border: '1.5px solid rgba(129, 140, 248, 0.25)',
              minHeight: 220,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.25)',
              transition: 'all 0.4s ease-in-out',
            }}
          >
            <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
              {[...Array(testimonials[activeSlide].rating)].map((_, rIdx) => (
                <StarIcon key={rIdx} sx={{ color: '#fbbf24', fontSize: 22 }} />
              ))}
            </Stack>

            <Typography
              variant="body1"
              color="text.primary"
              sx={{
                fontStyle: 'italic',
                mb: 3,
                lineHeight: 1.75,
                fontSize: { xs: '1rem', sm: '1.12rem' },
                fontWeight: 500,
              }}
            >
              "{testimonials[activeSlide].text}"
            </Typography>

            <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.08rem' }}>
                  {testimonials[activeSlide].name}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.82rem' }}>
                  {testimonials[activeSlide].role}
                </Typography>
              </Box>
              <Chip
                label={testimonials[activeSlide].link}
                size="small"
                sx={{
                  backgroundColor: 'rgba(52, 211, 153, 0.15)',
                  color: '#34d399',
                  border: '1px solid rgba(52, 211, 153, 0.3)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                }}
              />
            </Stack>
          </Paper>

          {/* Left Arrow Button */}
          <IconButton
            onClick={handlePrev}
            aria-label="Anterior reseña"
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: -12, sm: 0 },
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              color: '#818cf8',
              border: '1px solid rgba(129, 140, 248, 0.3)',
              '&:hover': {
                backgroundColor: '#6366f1',
                color: '#fff',
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          {/* Right Arrow Button */}
          <IconButton
            onClick={handleNext}
            aria-label="Siguiente reseña"
            sx={{
              position: 'absolute',
              top: '50%',
              right: { xs: -12, sm: 0 },
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              color: '#818cf8',
              border: '1px solid rgba(129, 140, 248, 0.3)',
              '&:hover': {
                backgroundColor: '#6366f1',
                color: '#fff',
              },
            }}
          >
            <ChevronRightIcon />
          </IconButton>

          {/* Indicators Dots */}
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', mt: 3 }}>
            {testimonials.map((_, idx) => (
              <Box
                key={idx}
                onClick={() => setActiveSlide(idx)}
                sx={{
                  width: activeSlide === idx ? 24 : 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: activeSlide === idx ? '#6366f1' : 'rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    backgroundColor: activeSlide === idx ? '#6366f1' : 'rgba(255, 255, 255, 0.5)',
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
