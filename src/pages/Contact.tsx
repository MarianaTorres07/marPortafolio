import { useState } from 'react';
import { Box, Typography, Grid, Card, TextField, Button, Stack, Alert, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 1.5 }}>
          {t('contact.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto' }}>
          {t('contact.sub')}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Info Panel */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card sx={{ height: '100%', p: 4, background: 'linear-gradient(145deg, #131b2e 0%, #0b0f19 100%)', borderRadius: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Avatar
                src="/images/mariana.jpg"
                alt="Mariana Torres Pozos"
                sx={{ width: 64, height: 64, border: '2px solid #818cf8' }}
              >
                MT
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>Mariana Torres Pozos</Typography>
                <Typography variant="caption" color="text.secondary">Frontend Engineer & M.Sc. in AI</Typography>
              </Box>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, fontSize: '1.05rem', color: '#818cf8' }}>{t('contact.infoTitle')}</Typography>

            <Stack spacing={3} sx={{ mb: 4 }}>
              <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 3, backgroundColor: 'rgba(99, 102, 241, 0.15)', color: '#818cf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <EmailIcon />
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>Email</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>martorres612@gmail.com</Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 3, backgroundColor: 'rgba(244, 63, 94, 0.15)', color: '#fb7185', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PhoneIcon />
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>Phone / WhatsApp</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>+52 983 177 2977</Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 3, backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <LocationOnIcon />
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>{t('contact.locationLabel')}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>{t('contact.locationVal')}</Typography>
                </Box>
              </Stack>
            </Stack>

            <Typography variant="caption" color="text.secondary" sx={{ mb: 1.5, fontWeight: 700, display: 'block' }}>{t('contact.findMe')}</Typography>
            <Stack direction="row" spacing={1.5} sx={{ mb: 3 }}>
              <Button component="a" href="https://linkedin.com/in/marianainestorrespozos/" target="_blank" variant="outlined" startIcon={<LinkedInIcon />} size="small" sx={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                LinkedIn
              </Button>
              <Button component="a" href="https://github.com/MarianaTorres07" target="_blank" variant="outlined" startIcon={<GitHubIcon />} size="small" sx={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                GitHub
              </Button>
              <Button component="a" href="https://wa.me/529831772977" target="_blank" variant="outlined" startIcon={<WhatsAppIcon />} size="small" sx={{ borderColor: '#25D366', color: '#25D366' }}>
                WhatsApp
              </Button>
            </Stack>

            <Button
              component={Link}
              to="/card"
              variant="contained"
              color="secondary"
              fullWidth
              startIcon={<ContactPhoneIcon />}
              sx={{ py: 1.4, fontWeight: 800, borderRadius: 3, boxShadow: '0 8px 20px -4px rgba(244, 63, 94, 0.4)' }}
            >
              {language === 'es' ? '🪪 Ver / Guardar Tarjeta Digital vCard' : '🪪 View / Save vCard Digital Card'}
            </Button>
          </Card>
        </Grid>

        {/* Contact Form */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Card sx={{ p: 4, borderRadius: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>{t('contact.formTitle')}</Typography>

            {submitted ? (
              <Alert severity="success" sx={{ borderRadius: 3 }}>
                {t('contact.formSuccess')}
              </Alert>
            ) : (
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label={t('contact.formName')} required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} variant="outlined" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label={t('contact.formEmail')} type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} variant="outlined" />
                  </Grid>
                  <Grid size={12}>
                    <TextField fullWidth label={t('contact.formMessage')} multiline rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} variant="outlined" />
                  </Grid>
                  <Grid size={12}>
                    <Button type="submit" variant="contained" size="large" endIcon={<SendIcon />} sx={{ mt: 1 }}>
                      {t('contact.formSend')}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
