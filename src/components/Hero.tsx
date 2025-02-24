import React from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';


const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ mt: 4, mb: 8, paddingLeft: 4, paddingRight: 4 }}>
      <Grid container spacing={2} alignItems="start">

         {/* CTA */}
        <Grid size={{ xs: 12, md: 4 }} component="div">
      
        <Typography variant="h1">Sebastian Christoph</Typography>
            <p style={{ fontSize: '1.125rem' }}>
              Full Stack Developer
            </p>

            <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mt: 2 }}>
              <Button variant="contained" color="primary" startIcon={<PlayArrowIcon />}>
                {t('hero.cta1')}
              </Button>
              <Button variant="contained" color="secondary" startIcon={<InfoIcon />}>
                {t('hero.cta2')}
              </Button>
            </Box>
        </Grid>

        {/* PROFILE AVATAR */}
        <Grid size={{ xs: 12, md: 4 }} component="div"sx={{mt: { xs: 4, md: 0 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="./public/profile/Sebastian_Christoph_Profil.png"
              alt="Avatar"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
              }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4, }} component="div" sx={{
            display: { xs: 'none', md: 'block' }
          }}>
         
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              {t('hero.subtitle')}
            </h2>
            <p style={{ fontSize: '1.125rem' }}>
              {t('hero.subdescription')}
            </p>
         
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
