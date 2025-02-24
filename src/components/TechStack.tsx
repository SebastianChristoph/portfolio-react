import React from 'react';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TechStackCard from './TechStackCard';

const TechStack: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return ( 
    <Box
      sx={{
        backgroundColor: theme.palette.backgroundDarker,
        padding: 2,
        borderRadius: '4px',
        boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
        maxHeight: '400px', 
        overflowY: 'auto'   
      }}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        Tech Stack
      </Typography>
      
      {/* Beispiel-Aufrufe der TechStackCard mit den entsprechenden Props */}
      <TechStackCard
        filename="logoCsharp.png"
        skill="C#"
        experience="3 years"
        stars={5}
      />
      <TechStackCard
        filename="logoPython.png"
        skill="Python"
        experience="2 years"
        stars={4}
      />
    </Box>
  );
};

export default TechStack;
