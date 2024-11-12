import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home.js';
import NoPage from './pages/NoPage.js';
import Kontakt from './pages/Kontakt.js';
import Projects from './pages/Projects.js';
import MainLayout from './components/MainLayout';

const theme = createTheme({
  typography: {
    fontFamily: 'Bahnschrift, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        {/* Wrapping all routes with MainLayout */}
        <MainLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/get-in-touch" element={<Kontakt />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
