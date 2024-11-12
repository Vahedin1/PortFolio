import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, Button, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const pages = ['Home', 'Projects', 'Language', 'Get in Touch'];

const colors = {
  blue: '#1e1e2d',
  white: '#FFFFFF',
  gray: '#e6e1e1',
  black: "#000000",
  orange: '#FFA500',
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

  return (
    <AppBar position="relative" sx={{ backgroundColor: colors.blue }}>
      <Container maxWidth="false" sx={{ maxWidth: '1300px', margin: '0 auto', backgroundColor: colors.blue }}>

        {/* Top Toolbar with Pages and Hamburger Icon */}
        <Toolbar disableGutters sx={{ width: '100%', justifyContent: 'space-between' }}>

          {/* Left-side Pages */}
          <Box sx={{ display: 'flex', gap: '100px' }}>
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

          {/* Fixed Hamburger Icon */}
          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{
              position: 'fixed',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '10px 0',
              width: '50px',
              height: '50px',
              zIndex: 1300, // Ensure it is above other elements
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
          <Box sx={{ display: 'flex', gap: '100px' }}>
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
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px 0', backgroundColor: colors.blue }}>
          <Typography variant="h4" sx={{
            fontFamily: 'Bahnschrift, Arial, sans-serif',
            fontWeight: 700,
            color: colors.orange,
            letterSpacing: 4,
            mt: 5
          }}>
            VAHA
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
