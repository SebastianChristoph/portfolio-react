import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: t("navbar.about"), link: "#about" },
    { text: t("navbar.tech"), link: "#tech" },
    { text: t("navbar.contact"), link: "#contact" },
    { text: t("navbar.cv"), link: "#cv" },
    { text: t("navbar.certificates"), link: "#certificates" },
  ];

  const handleLanguageToggle = () => {
    const newLang = i18n.language === "de" ? "en" : "de";
    i18n.changeLanguage(newLang);
  };

  const iconButtons = (
    <Box sx={{ display: "flex", gap: 1, justifyContent: "center", mt: 2 }}>
      <IconButton color="inherit" onClick={handleLanguageToggle}>
        <span role="img" aria-label="flag" style={{ fontSize: "24px" }}>
          {i18n.language === "de" ? "🇬🇧" : "🇩🇪"}
        </span>
      </IconButton>
      <IconButton
        color="inherit"
        href="https://github.com/yourusername"
        target="_blank"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        color="inherit"
        href="https://linkedin.com/in/yourusername"
        target="_blank"
      >
        <LinkedInIcon />
      </IconButton>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          mb: 8,
          backgroundColor: theme.palette.backgroundDarker,
          boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                onClick={toggleDrawer(true)}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {t("navbar.logo")}
              </Typography>
            </>
          ) : (
            <Box sx={{ display: "flex", width: "100%" }}>
              <Box
                sx={{ flexBasis: "10%", display: "flex", alignItems: "center" }}
              >
                <Typography variant="h6">{t("navbar.logo")}</Typography>
              </Box>
              <Box
                sx={{
                  flexBasis: "70%",
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    color="inherit"
                    href={item.link}
                    sx={{ textTransform: "none" }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  flexBasis: "20%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <IconButton color="inherit" onClick={handleLanguageToggle}>
                  <span
                    role="img"
                    aria-label="flag"
                    style={{ fontSize: "24px" }}
                  >
                    {i18n.language === "de" ? "🇬🇧" : "🇩🇪"}
                  </span>
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://github.com/yourusername"
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {isMobile && (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {menuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton component="a" href={item.link}>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            {iconButtons}
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
