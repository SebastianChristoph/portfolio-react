import React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import TechStack from './TechStack';


const Tech: React.FC = () => {
    const { t } = useTranslation();
    const theme = useTheme();

  return (
    <Box sx={{ m: 4 }}>
      <Grid container spacing={2} alignItems="start">

        <Grid size={{ xs: 12, md: 4 }} component="div">
            <TechStack/>
        </Grid>
              
         <Grid size={{ xs: 12, md: 4 }} component="div" sx = {{ padding: 4}}> Projects
         </Grid>
              
      </Grid>
    </Box>
  );
};

export default Tech;
