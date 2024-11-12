import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, Button, MenuItem, Typography, IconButton, Dialog } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, } from '@mui/icons-material';

const pages = ['Home', 'Projects', 'Language', 'Get in Touch'];

const colors = {
  white: '#FFFFFF',
  gray: '#e6e1e1',
  black: "#000000",
};


const pagesItemStyles = {
  fontFamily: 'Bahnschrift, Arial, sans-serif',
  fontWeight: 700,
  fontSize: '1.5rem',
  color: colors.white,
  '&:hover, &:active': {
    color: colors.orange,
  },
};

const appbarItemStyles = {
  backgroundColor: colors.black,
  color: colors.white,
  transition: 'background-color 0.3s',
};

function ResponsiveAppBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleOpenNavMenu = () => {
    setOpen(true);
    document.body.classList.add('no-scroll');
  };

  const handleCloseNavMenu = () => {
    setOpen(false);
    document.body.classList.remove('no-scroll');
  };

  const handlePageClick = (page) => {
    let route = '';
    if (page === 'Home') {
      route = '/';
    } else if (page === 'Get in Touch') {
      route = '/get-in-touch';
    } else {
      route = `/${page.toLowerCase()}`;
    }
    navigate(route);
    handleCloseNavMenu();
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="fixed" sx={{ ...appbarItemStyles, boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)" }}>
      <Container maxWidth="false" sx={{ maxWidth: '1300px', margin: '0 auto' }}>
        <Toolbar disableGutters sx={{ width: '100%' }}>
          {/* Centered Pages for Desktop */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            gap: '40px',
            marginTop: '10px',
            height: { xs: '80px' }
          }}>
            {/* Turn of display pages for mobile */}
            <Box sx={{
              display: { xs: 'none', sm: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px',
            }}>

              {/* Display pages in appbar */}
              <Box sx={{ display: 'flex', gap: '20px' }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    sx={{
                      ...pagesItemStyles,
                      '&:hover': { transform: 'scale(1.1)' },
                    }}
                  >
                    <Typography noWrap sx={{ ...pagesItemStyles }}>
                      {page}
                      {page === 'Language' && <span style={{ marginLeft: '0px' }}>▼</span>}
                    </Typography>
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Mobile Menu Button and Logo - Adjusted */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              width: '100vw', // Ensures full viewport width
              height: '60px',
              padding: 0,
              margin: 0,
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 1000,
            }}
          >
            {/* Logo on the Left */}
            <Box
              component="img"
              src="assets/logo bez slogan2.png"
              alt="Logo"
              onClick={handleLogoClick}
              sx={{
                marginTop: '20px',
                height: '70px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
                marginLeft: 3, // Ensure no extra margin
                paddingLeft: '16px', // Optional: space from edge
              }}
            />

            {/* Menu Button on the Right */}
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                marginLeft: 'auto', // Ensures the button is pushed to the right
                paddingRight: '16px', // Optional: space from edge
                marginRight: '40px',
                marginTop: '20px'
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Full-Screen Hambuger Dialog for Mobile Menu */}
          <Dialog
            fullScreen
            open={open}
            onClose={handleCloseNavMenu}
            sx={{
              '& .MuiDialog-paper': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.black,
                padding: 0,
                margin: 0,
              },
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleCloseNavMenu}
              sx={{
                position: 'absolute',
                top: '5vh',
                left: '50%',
                transform: 'translateX(-50%)',
                color: colors.orange,
                backgroundColor: colors.gray,
                '&:hover': {
                  background: colors.orange,
                  color: colors.white,
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Hambuger menu options */}
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => handlePageClick(page)}>
                <Typography sx={{ ...pagesItemStyles }}>{page}</Typography>
              </MenuItem>
            ))}
          </Dialog>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
