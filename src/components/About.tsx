import React from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const About: React.FC = () => {
    const { t } = useTranslation();
    const theme = useTheme();

  return (
    <Box sx={{ mt: 4, backgroundColor: theme.palette.backgroundLighter }}>
      <Grid container spacing={2} alignItems="start">

        <Grid size={{ xs: 12, md: 8 }} component="div" sx = {{ padding: 4}}>
         
        <Typography variant="h2">About me</Typography>
            <p style={{ fontSize: '1.125rem' }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </p>
         
              </Grid>
              
              <Grid
          size={{ xs: 12, md: 4 }}
          component="div"
          sx={{
            paddingRight: 4,
            display: { xs: 'none', md: 'block' }
          }}
        >
          
            <p style={{ fontSize: '3.5rem', fontWeight: "800", textAlign: "end", color: "#5c5f61" }}>
                      ADAPTIVE <br />
                      RELIABLE <br />
                      DEDICATED <br/>
            </p>
         
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
