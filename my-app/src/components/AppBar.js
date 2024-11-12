import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, Button, Typography, IconButton, Dialog, DialogContent } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const pages = ['About Me', 'Projects', 'Language', 'Get in Touch'];

const colors = {
  white: "#FFFFFF",
  orange: '#FFA500',
  blue: '#1e1e2d',
  gray: "#7A7979",
  black: '#000000',
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

function ResponsiveAppBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    if (page === 'About Me') {
      route = '/';
    } else if (page === 'Get in Touch') {
      route = '/get-in-touch';
    } else {
      route = `/${page.toLowerCase()}`;
    }
    navigate(route);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="relative" sx={{ backgroundColor: colors.blue, boxShadow: 'none', zIndex: 1200 }}>
      <Container maxWidth="false" sx={{ maxWidth: '1300px', margin: '0 auto', backgroundColor: colors.blue }}>
        {/* Top Toolbar with Pages and Hamburger Icon */}
        <Toolbar disableGutters sx={{ width: '100%', justifyContent: 'space-between' }}>

          {/* Left-side Pages */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '100px' }}>
            {pages.slice(0, 2).map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{
                  ...pagesItemStyles,
                  '&:hover': { transform: 'scale(1.1)' },
                }}
              >
                <Typography noWrap sx={{ ...pagesItemStyles }}>{page}</Typography>
              </Button>
            ))}
          </Box>

          {/* Fixed Hamburger Icon (Visible only on mobile) */}
          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{
              display: { xs: 'flex', sm: 'none' }, // Hamburger icon only on mobile
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '10px 0',
              width: '50px',
              height: '50px',
              zIndex: 1300,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%) rotate(180deg)',
                width: '100px',
                height: '80px',
                backgroundColor: colors.orange,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              },
              '& .MuiSvgIcon-root': {
                position: 'relative',
                zIndex: 1,
                color: colors.white,
              },
              '&:hover::before': {
                backgroundColor: colors.white,
              },
              '&:hover .MuiSvgIcon-root': {
                color: colors.orange,
              },
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          {/* Right-side Pages */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '100px' }}>
            {pages.slice(2).map((page) => (
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
        </Toolbar>

        {/* VAHA Logo Positioned Below Toolbar */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px 0', backgroundColor: colors.blue }}>
          <Typography variant="h4" sx={{
            fontFamily: 'Bahnschrift, Arial, sans-serif',
            fontWeight: 700,
            color: colors.orange,
            letterSpacing: 4,
            mt: 5,
          }}>
            VAHA
          </Typography>

          {/* Conditionally Render "SELECTED PROJECTS" on Projects Page */}
          {location.pathname === '/projects' && (
            <Typography variant="h6" sx={{
              fontFamily: 'Bahnschrift, Arial, sans-serif',
              fontWeight: 600,
              color: colors.white,
              letterSpacing: 2,
              mt: 1,
            }}>
              SELECTED PROJECTS
            </Typography>
          )}
        </Box>
      </Container>

      {/* Full-screen Dialog for Menu */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleCloseNavMenu}
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: colors.blue,
            color: colors.white,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            padding: '20px',
            position: 'relative',
          },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleCloseNavMenu}
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            zIndex: 1300,
            color: colors.orange,
            backgroundColor: colors.white,
            '&:hover': {
              backgroundColor: colors.orange,
              color: colors.white,
            },
          }}
        >
          <CloseIcon sx={{ fontSize: '2.5rem' }} />
        </IconButton>

        {/* Centered Menu Items */}
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => handlePageClick(page)}
              sx={{
                ...pagesItemStyles,
                fontSize: '2rem',
                '&:hover': { color: colors.orange },
              }}
            >
              {page}
            </Button>
          ))}
        </DialogContent>
      </Dialog>
    </AppBar>
  );
}

export default ResponsiveAppBar;
