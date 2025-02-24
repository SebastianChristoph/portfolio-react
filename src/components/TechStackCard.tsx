import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import React from "react";

interface TechStackCardProps {
  filename: string;
  skill: string;
  experience: string;
  stars: number;
}

const TechStackCard: React.FC<TechStackCardProps> = ({
  filename,
  skill,
  experience,
  stars,
}) => {
  const fullStars = stars;
  const emptyStars = 5 - stars;

  return (
    <Box sx={{ mb: 2 }}>
      <Grid container spacing={2} alignItems="center">
        {/* Logo */}
        <Grid size={{ xs: 3, md: 3 }} component="div">
          <Box
            component="img"
            src={`/logos/${filename}`}
            alt={skill}
            sx={{ width: "100%", maxWidth: "50px" }}
          />
        </Grid>
        {/* Skill */}
        <Grid size={{ xs: 3, md: 3 }} component="div">
          <Typography variant="body1">{skill}</Typography>
          <Typography variant="body2">{experience}</Typography>
        </Grid>
        {/* Stars */}
        <Grid size={{ xs: 3, md: 3 }} component="div">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {Array.from({ length: fullStars }).map((_, index) => (
              <StarIcon key={`full-${index}`} color="primary" />
            ))}
            {Array.from({ length: emptyStars }).map((_, index) => (
              <StarBorderIcon key={`empty-${index}`} color="disabled" />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TechStackCard;
