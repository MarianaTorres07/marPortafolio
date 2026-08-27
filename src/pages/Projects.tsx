import { useState } from 'react';
import { Box, Typography, Grid, Tabs, Tab, Stack } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

function Projects() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryLabels: Record<string, string> = {
    'All': t('projects.tabAll'),
    'E-commerce': t('projects.tabEcommerce'),
    'Web App': t('projects.tabWebApp'),
    'Business Site': t('projects.tabBusiness'),
  };

  const categories = ['All', 'E-commerce', 'Web App', 'Business Site'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ mb: 5, textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 1.5 }}>
          {t('projects.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          {t('projects.sub')}
        </Typography>

        {/* Filter Tabs */}
        <Stack direction="row" sx={{ mt: 4, justifyContent: 'center' }}>
          <Tabs
            value={selectedCategory}
            onChange={(_, newValue) => setSelectedCategory(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': { backgroundColor: '#6366f1', height: 3, borderRadius: 2 },
              '& .MuiTab-root': { color: 'text.secondary', fontWeight: 600, textTransform: 'none', fontSize: '0.95rem' },
              '& .MuiTab-root.Mui-selected': { color: '#6366f1' },
            }}
          >
            {categories.map((cat) => (
              <Tab key={cat} label={categoryLabels[cat] || cat} value={cat} />
            ))}
          </Tabs>
        </Stack>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={3.5}>
        {filteredProjects.map((project) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id} sx={{ display: 'flex' }}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
