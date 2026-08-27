import { Box, Typography, Grid, Card, Button, Stack, Chip, Divider, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import StarIcon from '@mui/icons-material/Star';
import SpeedIcon from '@mui/icons-material/Speed';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BrushIcon from '@mui/icons-material/Brush';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLanguage } from '../context/LanguageContext';

function Services() {
  const { t, language } = useLanguage();

  const packages = [
    {
      title: t('services.pkg1Title'),
      subtitle: t('services.pkg1Sub'),
      price: t('services.pkg1Price'),
      popular: false,
      icon: <CodeIcon sx={{ fontSize: 42, color: '#10b981' }} />,
      features: language === 'es' ? [
        'Diseño Web 100% Responsivo (Móvil, Tablet y PC)',
        'Hasta 5 a 8 Secciones (Inicio, Servicios, Nosotros, Galería, Contacto)',
        'Formulario dinámico de contacto directo e integración con WhatsApp',
        'Optimización de velocidad de carga y SEO para aparecer en Google',
        'Configuración de dominio y hospedaje web incluidos',
        'Soporte post-entrega por 30 días',
      ] : [
        '100% Responsive Design (Mobile, Tablet, Desktop)',
        '5 to 8 Custom Sections (Home, Services, About, Gallery, Contact)',
        'Dynamic contact form & direct WhatsApp integration',
        'Speed optimization & Google SEO ready',
        'Domain and hosting setup included',
        '30-day post-delivery technical support',
      ],
      whatsappMsg: language === 'es' ? 'Hola Mariana, me interesa cotizar un Sitio Web Corporativo para mi negocio.' : 'Hello Mariana, I would like to get a quote for a Corporate Website for my business.',
    },
    {
      title: t('services.pkg2Title'),
      subtitle: t('services.pkg2Sub'),
      price: t('services.pkg2Price'),
      popular: true,
      icon: <ShoppingBagIcon sx={{ fontSize: 42, color: '#f43f5e' }} />,
      features: language === 'es' ? [
        'Catálogo de productos con carrito de compras interactivo',
        'Integración de Pasarela de Pagos (Stripe, PayPal, MercadoPago)',
        'Panel de administración para gestionar inventario, ventas y pedidos',
        'Registro y cuenta de usuario para clientes',
        'Diseño de interfaz UI/UX atractivo enfocado en maximizar ventas',
        'Capacitación para que administres tu tienda fácilmente',
      ] : [
        'Product catalog with interactive shopping cart',
        'Payment gateway integration (Stripe, PayPal, MercadoPago)',
        'Admin dashboard to manage inventory, sales & orders',
        'User registration & customer accounts',
        'High-converting UI/UX design focused on sales',
        'Training so you can easily manage your store',
      ],
      whatsappMsg: language === 'es' ? 'Hola Mariana, me interesa cotizar una Tienda Online / E-Commerce a medida.' : 'Hello Mariana, I would like to get a quote for a custom E-Commerce store.',
    },
    {
      title: t('services.pkg3Title'),
      subtitle: t('services.pkg3Sub'),
      price: t('services.pkg3Price'),
      popular: false,
      icon: <AutoAwesomeIcon sx={{ fontSize: 42, color: '#818cf8' }} />,
      features: language === 'es' ? [
        'Sistema de confirmación de asistencia RSVP en tiempo real',
        'Mapas interactivos en vivo (Google Maps / Waze) y cuenta regresiva',
        'Generación de pases individuales con código QR de acceso',
        'Animaciones responsivas y diseño personalizado en Figma',
        'Panel para descargar lista de invitados en Excel',
      ] : [
        'Real-time RSVP guest attendance system',
        'Interactive live maps (Google Maps / Waze) & countdown timer',
        'Individual guest passes with QR access code',
        'Responsive animations & custom Figma design',
        'Admin panel to export guest list to Excel',
      ],
      whatsappMsg: language === 'es' ? 'Hola Mariana, me interesa cotizar una Aplicación de Invitaciones Digitales / Eventos.' : 'Hello Mariana, I would like to get a quote for a Digital Invitation / Event Web App.',
    },
  ];

  const processSteps = [
    { step: '01', title: t('services.step1Title'), desc: t('services.step1Desc') },
    { step: '02', title: t('services.step2Title'), desc: t('services.step2Desc') },
    { step: '03', title: t('services.step3Title'), desc: t('services.step3Desc') },
    { step: '04', title: t('services.step4Title'), desc: t('services.step4Desc') },
  ];

  const whyChooseMe = [
    { title: t('services.why1Title'), desc: t('services.why1Desc'), icon: <SmartphoneIcon sx={{ fontSize: 32, color: '#818cf8' }} /> },
    { title: t('services.why2Title'), desc: t('services.why2Desc'), icon: <SpeedIcon sx={{ fontSize: 32, color: '#10b981' }} /> },
    { title: t('services.why3Title'), desc: t('services.why3Desc'), icon: <BrushIcon sx={{ fontSize: 32, color: '#f43f5e' }} /> },
    { title: t('services.why4Title'), desc: t('services.why4Desc'), icon: <SupportAgentIcon sx={{ fontSize: 32, color: '#fbbf24' }} /> },
  ];

  const faqs = language === 'es' ? [
    {
      q: '¿Cuánto tiempo tarda en entregarse un sitio web o aplicación?',
      a: 'Depende de la complejidad del proyecto: un Sitio Web Corporativo suele entregarse entre 5 a 10 días hábiles. Proyectos más complejos y robustos como Tiendas E-Commerce completas o Web Apps a medida (sistemas de citas, invitaciones interactivas con QR o plataformas personalizadas) requieren de 1 a 2 meses según las funcionalidades solicitadas.',
    },
    {
      q: '¿El dominio y hospedaje web vienen incluidos?',
      a: 'Sí, en la contratación de tu paquete te incluyo la asesoría y configuración inicial de dominio y hosting para que tu sitio quede en vivo sin complicaciones.',
    },
    {
      q: '¿Cómo funciona el esquema de pagos?',
      a: 'Manejamos un 50% de anticipo al iniciar el proyecto tras la aprobación del diseño preliminar y el 50% restante al publicar tu sitio web en vivo.',
    },
    {
      q: '¿Puedo actualizar el contenido de mi página por mi cuenta?',
      a: '¡Absolutamente! Te entrego tu sitio con capacitación previa para que puedas modificar textos, agregar productos o cambiar imágenes fácilmente.',
    },
  ] : [
    {
      q: 'How long does it take to deliver a website or application?',
      a: 'It depends on the complexity: A Corporate Website is usually delivered within 5 to 10 business days. Complex projects like full E-Commerce stores or custom Web Apps (booking systems, interactive QR invitations, or custom platforms) take 1 to 2 months depending on requested features.',
    },
    {
      q: 'Are the domain and web hosting included?',
      a: 'Yes, package contracting includes initial consulting and setup for domain and hosting so your site goes live seamlessly.',
    },
    {
      q: 'How does the payment schedule work?',
      a: 'We work with a 50% deposit upon starting after UI prototype approval and the remaining 50% upon publishing your live website.',
    },
    {
      q: 'Can I update the content of my page on my own?',
      a: 'Absolutely! I deliver your site with a training session so you can easily update text, add products, or change images.',
    },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Chip label={t('services.pageBadge')} color="primary" sx={{ mb: 2, fontWeight: 800 }} />
        <Typography variant="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2.2rem', md: '3.4rem' } }}>
          {t('services.pageTitle')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
          {t('services.pageSub')}
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {packages.map((pkg, idx) => (
          <Grid size={{ xs: 12, md: 4 }} key={idx} sx={{ display: 'flex' }}>
            <Card
              className="glass-card"
              sx={{
                width: '100%', display: 'flex', flexDirection: 'column', p: 4, borderRadius: 5, position: 'relative',
                border: pkg.popular ? '2px solid #f43f5e !important' : '1px solid rgba(255,255,255,0.1) !important',
                background: pkg.popular
                  ? 'linear-gradient(165deg, rgba(15, 23, 42, 0.98) 0%, rgba(244, 63, 94, 0.12) 100%) !important'
                  : 'rgba(15, 23, 42, 0.8) !important',
                boxShadow: pkg.popular ? '0 25px 50px -15px rgba(244, 63, 94, 0.4) !important' : 'none',
              }}
            >
              {pkg.popular && (
                <Chip
                  icon={<StarIcon sx={{ fontSize: '14px !important', color: '#fff !important' }} />}
                  label={t('services.popularBadge')} color="secondary" size="small"
                  sx={{ position: 'absolute', top: 20, right: 20, fontWeight: 800, fontSize: '0.7rem' }}
                />
              )}

              <Box sx={{ mb: 2 }}>{pkg.icon}</Box>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5 }}>{pkg.title}</Typography>
              <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block', minHeight: 36, lineHeight: 1.5 }}>
                {pkg.subtitle}
              </Typography>

              <Box sx={{ my: 2, p: 1.5, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: pkg.popular ? '#fb7185' : '#34d399' }}>
                  {pkg.price}
                </Typography>
              </Box>

              <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.08)' }} />

              <Typography variant="caption" color="primary.light" sx={{ fontWeight: 800, letterSpacing: 0.5, textTransform: 'uppercase', display: 'block', mb: 2 }}>
                {t('services.whatIncludes')}
              </Typography>

              <Stack spacing={1.6} sx={{ mb: 4, flexGrow: 1 }}>
                {pkg.features.map((feat, fIdx) => (
                  <Stack direction="row" spacing={1.2} key={fIdx} sx={{ alignItems: 'flex-start' }}>
                    <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: pkg.popular ? '#f43f5e' : '#10b981', mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="body2" color="text.primary" sx={{ fontSize: '0.88rem', lineHeight: 1.45, fontWeight: 500 }}>
                      {feat}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                component="a"
                href={'https://wa.me/529831772977?text=' + encodeURIComponent(pkg.whatsappMsg)}
                target="_blank"
                variant="contained"
                color={pkg.popular ? 'secondary' : 'primary'}
                fullWidth
                startIcon={<WhatsAppIcon />}
                sx={{ py: 1.6, fontWeight: 800, fontSize: '0.98rem' }}
              >
                {t('services.btnQuoteWa')}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ py: 6, mb: 6 }}>
        <Typography variant="h2" align="center" sx={{ fontWeight: 800, mb: 1.5 }}>
          {t('services.whyTitle')}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 5, maxWidth: 600, mx: 'auto' }}>
          {t('services.whySub')}
        </Typography>

        <Grid container spacing={3}>
          {whyChooseMe.map((item, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
              <Card className="glass-card" sx={{ p: 3, height: '100%', borderRadius: 4, textAlign: 'center' }}>
                <Box sx={{ mb: 1.5, display: 'flex', justifyContent: 'center' }}>{item.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.88rem', lineHeight: 1.6 }}>{item.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ py: 6, mb: 6 }}>
        <Typography variant="h2" align="center" sx={{ fontWeight: 800, mb: 1.5 }}>
          {t('services.processTitle')}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
          {t('services.processSub')}
        </Typography>

        <Grid container spacing={3}>
          {processSteps.map((step, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
              <Paper sx={{ p: 3.5, height: '100%', borderRadius: 4, backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.08)', position: 'relative' }}>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#818cf8', opacity: 0.6, mb: 1 }}>{step.step}</Typography>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{step.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.86rem', lineHeight: 1.6 }}>{step.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: 4, mb: 8, maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h2" align="center" sx={{ fontWeight: 800, mb: 1.5 }}>
          {t('services.faqTitle')}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 5 }}>
          {t('services.faqSub')}
        </Typography>

        {faqs.map((faq, idx) => (
          <Accordion
            key={idx}
            disableGutters
            elevation={0}
            sx={{
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px !important',
              mb: 2,
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#818cf8' }} />} sx={{ p: 2.5 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.02rem' }}>
                {faq.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2.5, pb: 3, pt: 0 }}>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.92rem' }}>
                {faq.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Card sx={{ p: 5, textAlign: 'center', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(244, 63, 94, 0.2) 100%)', border: '1.5px solid rgba(99, 102, 241, 0.4)', borderRadius: 5 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 1.5 }}>{t('services.finalCtaTitle')}</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 640, mx: 'auto', fontSize: '1.08rem' }}>
          {t('services.finalCtaSub')}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} sx={{ justifyContent: 'center' }}>
          <Button
            component="a"
            href="https://wa.me/529831772977?text=Hola%20Mariana,%20quiero%20cotizar%20un%20proyecto"
            target="_blank"
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<WhatsAppIcon />}
            sx={{ py: 1.6, px: 4, fontWeight: 800, fontSize: '1rem' }}
          >
            {t('services.btnQuoteWa')}
          </Button>
          <Button
            component="a"
            href="mailto:martorres612@gmail.com"
            variant="outlined"
            size="large"
            startIcon={<EmailIcon />}
            sx={{ py: 1.6, px: 4, fontWeight: 700, borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
          >
            {t('services.btnEmail')}
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}

export default Services;
