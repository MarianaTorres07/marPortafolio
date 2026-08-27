import { useState } from 'react';
import { Box, Typography, Button, Stack, Chip, Card, Avatar, IconButton, Snackbar, Alert, Tooltip, ThemeProvider, CssBaseline } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ShareIcon from '@mui/icons-material/Share';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Link } from 'react-router-dom';
import theme from '../theme';
import { useLanguage } from '../context/LanguageContext';

function DigitalCard() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleDownloadVCard = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Torres Pozos;Mariana;Inés;;
FN:Mariana Torres Pozos
TITLE:Frontend Engineer & M.Sc. en IA
ORG:Mariana Torres Pozos Software & Development
TEL;TYPE=CELL,VOICE:+529831772977
EMAIL;TYPE=PREF,INTERNET:martorres612@gmail.com
URL;TYPE=PORTFOLIO:https://jstopografia.net
URL;TYPE=ECOMMERCE:https://appeccomerce.com
NOTE:Frontend Engineer especialista en React, Angular, TypeScript & M.Sc. en Inteligencia Artificial.
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Mariana_Torres_Pozos.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const mainWebsiteUrl = window.location.origin + '/';

  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mariana Torres Pozos | Tarjeta Digital',
          text: 'Contacto profesional y portafolio de Mariana Torres Pozos — Frontend Engineer',
          url: shareUrl,
        });
      } catch {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
    }
  };

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(mainWebsiteUrl)}&color=0b0f19&bgcolor=ffffff`;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#070a13',
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          py: { xs: 3, md: 5 },
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

      {/* Phone Mockup Frame */}
      <Card
        className="glass-card"
        sx={{
          width: '100%',
          maxWidth: 430,
          borderRadius: '40px',
          border: '2px solid rgba(129, 140, 248, 0.4) !important',
          boxShadow: '0 30px 60px -12px rgba(99, 102, 241, 0.35) !important',
          overflow: 'hidden',
          backgroundColor: '#0b0f19 !important',
          position: 'relative',
        }}
      >
        {/* Smartphone Speaker / Notch */}
        <Box sx={{ width: '100%', height: 28, backgroundColor: '#070a12', display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 0.5 }}>
          <Box sx={{ width: 60, height: 5, borderRadius: 3, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
        </Box>

        {/* Top Header Geometric Background Pattern */}
        <Box
          sx={{
            height: 140,
            background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #f43f5e 100%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            },
          }}
        >
          <Typography variant="caption" sx={{ position: 'absolute', top: 12, right: 16, color: 'rgba(255,255,255,0.8)', fontWeight: 800, letterSpacing: 1 }}>
            DIGITAL vCARD
          </Typography>
        </Box>

        {/* Profile Avatar Overlapping Header */}
        <Box sx={{ position: 'relative', textAlign: 'center', mt: -7, mb: 2 }}>
          <Avatar
            src="/images/mariana.jpg"
            alt="Mariana Torres Pozos"
            sx={{
              width: 110,
              height: 110,
              mx: 'auto',
              border: '4px solid #0b0f19',
              boxShadow: '0 12px 30px rgba(99, 102, 241, 0.6)',
            }}
          >
            MT
          </Avatar>
        </Box>

        {/* Name & Title */}
        <Box sx={{ textAlign: 'center', px: 3, mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: '-0.02em', mb: 0.5 }}>
            Mariana Torres Pozos
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 1.5 }}>
            Frontend Engineer & M.Sc. en IA
          </Typography>
          <Chip
            label="🟢 Disponible para Proyectos & Contratación"
            size="small"
            sx={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)', fontWeight: 800, fontSize: '0.72rem' }}
          />
        </Box>

        {/* Quick Action Circular Buttons Bar */}
        <Box sx={{ px: 3, mb: 3.5 }}>
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-around', textAlign: 'center' }}>
            {/* Call */}
            <Box>
              <IconButton
                component="a"
                href="tel:+529831772977"
                sx={{
                  width: 52,
                  height: 52,
                  backgroundColor: 'rgba(16, 185, 129, 0.2)',
                  color: '#34d399',
                  border: '1.5px solid rgba(16, 185, 129, 0.4)',
                  '&:hover': { backgroundColor: 'rgba(16, 185, 129, 0.35)' },
                }}
              >
                <PhoneIcon />
              </IconButton>
              <Typography variant="caption" sx={{ display: 'block', mt: 0.8, fontWeight: 700, fontSize: '0.75rem' }}>
                {t('card.call')}
              </Typography>
            </Box>

            {/* Mobile / SMS */}
            <Box>
              <IconButton
                component="a"
                href="sms:+529831772977"
                sx={{
                  width: 52,
                  height: 52,
                  backgroundColor: 'rgba(99, 102, 241, 0.2)',
                  color: '#818cf8',
                  border: '1.5px solid rgba(99, 102, 241, 0.4)',
                  '&:hover': { backgroundColor: 'rgba(99, 102, 241, 0.35)' },
                }}
              >
                <PhoneIphoneIcon />
              </IconButton>
              <Typography variant="caption" sx={{ display: 'block', mt: 0.8, fontWeight: 700, fontSize: '0.75rem' }}>
                {t('card.mobile')}
              </Typography>
            </Box>

            {/* WhatsApp */}
            <Box>
              <IconButton
                component="a"
                href="https://wa.me/529831772977?text=Hola%20Mariana,%20guard%C3%A9%20tu%20tarjeta%20digital"
                target="_blank"
                sx={{
                  width: 52,
                  height: 52,
                  backgroundColor: 'rgba(37, 211, 102, 0.2)',
                  color: '#25D366',
                  border: '1.5px solid rgba(37, 211, 102, 0.4)',
                  '&:hover': { backgroundColor: 'rgba(37, 211, 102, 0.35)' },
                }}
              >
                <WhatsAppIcon />
              </IconButton>
              <Typography variant="caption" sx={{ display: 'block', mt: 0.8, fontWeight: 700, fontSize: '0.75rem' }}>
                WhatsApp
              </Typography>
            </Box>

            {/* Email */}
            <Box>
              <IconButton
                component="a"
                href="mailto:martorres612@gmail.com"
                sx={{
                  width: 52,
                  height: 52,
                  backgroundColor: 'rgba(244, 63, 94, 0.2)',
                  color: '#fb7185',
                  border: '1.5px solid rgba(244, 63, 94, 0.4)',
                  '&:hover': { backgroundColor: 'rgba(244, 63, 94, 0.35)' },
                }}
              >
                <EmailIcon />
              </IconButton>
              <Typography variant="caption" sx={{ display: 'block', mt: 0.8, fontWeight: 700, fontSize: '0.75rem' }}>
                Email
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Contact Links & Info Rows */}
        <Box sx={{ px: 3, mb: 3 }}>
          <Stack spacing={1.5}>
            {/* Direct Main Website Button */}
            <Box
              component={Link}
              to="/"
              sx={{
                p: 2,
                borderRadius: 3,
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                border: '1.5px solid rgba(99, 102, 241, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s',
                boxShadow: '0 8px 20px -4px rgba(99, 102, 241, 0.3)',
                '&:hover': { backgroundColor: 'rgba(99, 102, 241, 0.3)', borderColor: '#818cf8' },
              }}
            >
              <LanguageIcon sx={{ color: '#818cf8', fontSize: 26 }} />
              <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
                <Typography variant="caption" color="#818cf8" sx={{ display: 'block', fontWeight: 800, fontSize: '0.75rem' }}>
                  🌐 PORTAFOLIO WEB COMPLETO
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 800, color: '#fff', fontSize: '0.95rem' }}>
                  Ver Mi Sitio Web Principal
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                p: 2,
                borderRadius: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <LocationOnIcon sx={{ color: '#818cf8' }} />
              <Box sx={{ overflow: 'hidden' }}>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontWeight: 600 }}>
                  {t('card.location')}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {t('card.locationVal')}
                </Typography>
              </Box>
            </Box>

            <Box
              component="a"
              href="https://jstopografia.net"
              target="_blank"
              sx={{
                p: 2,
                borderRadius: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s',
                '&:hover': { backgroundColor: 'rgba(99, 102, 241, 0.1)', borderColor: '#818cf8' },
              }}
            >
              <LanguageIcon sx={{ color: '#34d399' }} />
              <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
                <Typography variant="caption" color="#34d399" sx={{ display: 'block', fontWeight: 800 }}>
                  🌐 {t('card.engineeringSite')}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  jstopografia.net
                </Typography>
              </Box>
            </Box>

            <Box
              component="a"
              href="https://appeccomerce.com"
              target="_blank"
              sx={{
                p: 2,
                borderRadius: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s',
                '&:hover': { backgroundColor: 'rgba(244, 63, 94, 0.1)', borderColor: '#fb7185' },
              }}
            >
              <LanguageIcon sx={{ color: '#fb7185' }} />
              <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
                <Typography variant="caption" color="#fb7185" sx={{ display: 'block', fontWeight: 800 }}>
                  🛒 {t('card.ecommerceSite')}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  appeccomerce.com
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>

        {/* Social Icons Bar */}
        <Box sx={{ px: 3, mb: 3 }}>
          <Stack direction="row" spacing={1.5} sx={{ justifyContent: 'center' }}>
            <IconButton component="a" href="https://linkedin.com/in/marianainestorrespozos/" target="_blank" sx={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#0a66c2', '&:hover': { backgroundColor: 'rgba(10, 102, 194, 0.2)' } }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton component="a" href="https://github.com/MarianaTorres07" target="_blank" sx={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.15)' } }}>
              <GitHubIcon />
            </IconButton>
            <IconButton component="a" href="https://wa.me/529831772977" target="_blank" sx={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#25D366', '&:hover': { backgroundColor: 'rgba(37, 211, 102, 0.2)' } }}>
              <WhatsAppIcon />
            </IconButton>
          </Stack>
        </Box>

        {/* QR Code Section */}
        <Box sx={{ p: 3, mx: 3, mb: 3, backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: 4, border: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'center' }}>
          <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', display: 'block', mb: 2, color: '#818cf8' }}>
            <QrCode2Icon sx={{ fontSize: 16, verticalAlign: 'middle', mr: 0.5 }} />
            ESCANEAR QR PARA IR AL SITIO WEB
          </Typography>

          <Box
            sx={{
              p: 2,
              backgroundColor: '#ffffff',
              borderRadius: 3,
              display: 'inline-block',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              mb: 1.5,
            }}
          >
            <Box component="img" src={qrUrl} alt="Mariana Torres Pozos QR Code" sx={{ width: 170, height: 170, display: 'block' }} />
          </Box>

          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', px: 1, fontSize: '0.78rem', lineHeight: 1.4, fontWeight: 500 }}>
            📱 Apunta la cámara de tu celular aquí para entrar directamente a mi sitio web principal (Portafolio completo).
          </Typography>
        </Box>

        {/* Bottom Save Contact & Share Buttons */}
        <Box sx={{ p: 3, backgroundColor: '#070a12', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <Stack spacing={1.5}>
            <Button
              onClick={handleDownloadVCard}
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              startIcon={<ContactPhoneIcon />}
              sx={{ py: 1.6, fontWeight: 800, fontSize: '0.95rem', borderRadius: 3, boxShadow: '0 10px 20px -5px rgba(244, 63, 94, 0.4)' }}
            >
              {t('card.saveContact')}
            </Button>

            <Stack direction="row" spacing={1}>
              <Button
                onClick={handleShare}
                variant="outlined"
                fullWidth
                startIcon={<ShareIcon />}
                sx={{ py: 1.2, fontWeight: 700, fontSize: '0.85rem', borderColor: 'rgba(255, 255, 255, 0.2)', color: '#fff', borderRadius: 3 }}
              >
                {t('card.shareBtn')}
              </Button>
              <Tooltip title="Copiar Enlace" arrow>
                <IconButton
                  onClick={handleShare}
                  sx={{ border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: 3, color: '#fff', px: 2 }}
                >
                  {copied ? <CheckIcon sx={{ color: '#34d399' }} /> : <ContentCopyIcon />}
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </Box>
      </Card>

      {/* Snackbar Notification */}
      <Snackbar open={copied} autoHideDuration={3000} onClose={() => setCopied(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" sx={{ width: '100%', borderRadius: 3, fontWeight: 700 }}>
          {t('card.copiedToast')}
        </Alert>
      </Snackbar>
    </Box>
    </ThemeProvider>
  );
}

export default DigitalCard;
