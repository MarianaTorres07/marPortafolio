import { Card, CardContent, Typography, CardActions, Button, Chip, Stack, Box, CardMedia } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import type { Project } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const isEcommerce = project.category === 'E-commerce';
  const isBusiness = project.category === 'Business Site';

  const badgeColor = isEcommerce ? '#fb7185' : isBusiness ? '#34d399' : '#818cf8';
  const badgeBg = isEcommerce ? 'rgba(244, 63, 94, 0.18)' : isBusiness ? 'rgba(16, 185, 129, 0.18)' : 'rgba(99, 102, 241, 0.18)';
  const badgeBorder = isEcommerce ? 'rgba(244, 63, 94, 0.35)' : isBusiness ? 'rgba(16, 185, 129, 0.35)' : 'rgba(99, 102, 241, 0.35)';

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(165deg, rgba(15, 23, 42, 0.95) 0%, rgba(8, 12, 22, 0.98) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: isEcommerce ? '0 25px 50px -15px rgba(244, 63, 94, 0.4)' : '0 25px 50px -15px rgba(99, 102, 241, 0.4)',
          borderColor: isEcommerce ? 'rgba(244, 63, 94, 0.6)' : 'rgba(99, 102, 241, 0.6)',
          '& .project-card-image': {
            transform: 'scale(1.06)',
          },
        },
      }}
    >
      {project.image ? (
        <Box sx={{ position: 'relative', overflow: 'hidden', height: 210, backgroundColor: '#070a12' }}>
          <CardMedia
            component="img"
            image={project.image}
            alt={project.title}
            className="project-card-image"
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease-in-out',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(180deg, rgba(7, 10, 18, 0.2) 0%, rgba(15, 23, 42, 0.95) 100%)',
            }}
          />
          <Stack
            direction="row"
            sx={{ position: 'absolute', top: 16, left: 16, right: 16, zIndex: 2, justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Chip
              label={project.category}
              size="small"
              sx={{
                backgroundColor: badgeBg,
                color: badgeColor,
                fontWeight: 800,
                fontSize: '0.72rem',
                border: '1px solid ' + badgeBorder,
                backdropFilter: 'blur(8px)',
              }}
            />
            {project.demo ? (
              <Chip
                label={t('projects.liveTag')}
                size="small"
                sx={{
                  backgroundColor: 'rgba(16, 185, 129, 0.25)',
                  color: '#34d399',
                  fontWeight: 800,
                  fontSize: '0.68rem',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  backdropFilter: 'blur(8px)',
                }}
              />
            ) : (
              <Chip
                label={t('projects.devTag')}
                size="small"
                sx={{
                  backgroundColor: 'rgba(129, 140, 248, 0.25)',
                  color: '#818cf8',
                  fontWeight: 800,
                  fontSize: '0.68rem',
                  border: '1px solid rgba(129, 140, 248, 0.4)',
                  backdropFilter: 'blur(8px)',
                }}
              />
            )}
          </Stack>
        </Box>
      ) : (
        <Box sx={{ p: 3, pb: 1, background: 'linear-gradient(180deg, ' + badgeBg + ' 0%, rgba(15, 23, 42, 0) 100%)' }}>
          <Stack direction="row" sx={{ mb: 2, justifyContent: 'space-between', alignItems: 'center' }}>
            <Chip
              label={project.category}
              size="small"
              sx={{ backgroundColor: badgeBg, color: badgeColor, fontWeight: 800, fontSize: '0.74rem', border: '1px solid ' + badgeBorder }}
            />
          </Stack>
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1, pt: project.image ? 2 : 1, px: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1.3, mb: 1 }}>
          {project.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6, fontSize: '0.88rem' }}>
          {project.description}
        </Typography>

        <Box sx={{ mb: 2.5 }}>
          {project.features.slice(0, 3).map((feature, idx) => (
            <Stack direction="row" spacing={1.2} key={idx} sx={{ mb: 0.9, alignItems: 'flex-start' }}>
              <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: badgeColor, mt: 0.2, flexShrink: 0 }} />
              <Typography variant="caption" color="text.primary" sx={{ fontSize: '0.8rem', lineHeight: 1.45, fontWeight: 500 }}>
                {feature}
              </Typography>
            </Stack>
          ))}
        </Box>

        <Stack direction="row" spacing={0.8} useFlexGap sx={{ mt: 'auto', flexWrap: 'wrap' }}>
          {project.tech.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              variant="outlined"
              sx={{
                fontSize: '0.68rem',
                fontWeight: 600,
                borderColor: 'rgba(255, 255, 255, 0.12)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                color: 'text.secondary',
              }}
            />
          ))}
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 3, pb: 3, pt: 1, gap: 1 }}>
        {project.demo && (
          <Button
            variant="contained"
            color={isEcommerce ? 'secondary' : 'primary'}
            size="small"
            href={project.demo}
            target="_blank"
            endIcon={<LaunchIcon />}
            fullWidth
            sx={{ fontWeight: 800, py: 1 }}
          >
            {t('projects.btnLive')}
          </Button>
        )}

        {project.github && (
          <Button
            variant="outlined"
            size="small"
            href={project.github}
            target="_blank"
            startIcon={<GitHubIcon />}
            sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', color: '#fff', px: 2 }}
          >
            {t('projects.btnCode')}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
