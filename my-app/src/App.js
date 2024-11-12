import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AboutMe from './pages/AboutMe.js';
import NoPage from './pages/NoPage.js';
import Kontakt from './pages/Kontakt.js';
import Projects from './pages/Projects.js';
import MainLayout from './components/MainLayout';

const theme = createTheme({
  typography: {
    fontFamily: 'Bahnschrift, Arial, sans-serif',
  },
});

const colors = {
  white: "#FFFFFF",
  orange: '#FFA500',
  blue: '#1e1e2d',
  gray: "#7A7979",
  black: '#000000',
};

const projectsArray = [
  {
    title: "RAWMEN",
    img: "./assets/unger.png",
    video: "./assets/video.mp4",
    titleColor: colors.orange,
    descColor: colors.gray,
    description: "A fun, food-themed multiplayer game.",
    url: '/project/1',
    icons: ['html', 'css', 'js'],
    overlayOpacity: 0.7,  // Set custom opacity for overlay
  },
  {
    title: "Gaming R&D",
    img: "./assets/adobe.png",
    video: "./assets/video.mp4",
    titleColor: colors.orange,
    descColor: colors.gray,
    description: "Innovative gaming research and development.",
    url: '/project/1',
    icons: ['react', 'mui', 'python'],
    overlayOpacity: 0.8,  // Set custom opacity for overlay
  },
  {
    title: "Gaming R&D",
    img: "./assets/adobe.png",
    video: "./assets/video.mp4",
    titleColor: colors.orange,
    descColor: colors.gray,
    description: "Innovative gaming research and development.",
    url: '/project/1',
    icons: ['react', 'mui', 'python'],
    overlayOpacity: 0.8,  // Set custom opacity for overlay
  },
  {
    title: "Gaming R&D",
    img: "./assets/adobe.png",
    video: "./assets/video.mp4",
    titleColor: colors.orange,
    descColor: colors.gray,
    description: "Innovative gaming research and development.",
    url: '/project/1',
    icons: ['react', 'mui', 'python'],
    overlayOpacity: 0.8,  // Set custom opacity for overlay
  },
  {
    title: "Gaming R&D",
    img: "./assets/adobe.png",
    video: "./assets/video.mp4",
    titleColor: colors.orange,
    descColor: colors.gray,
    description: "Innovative gaming research and development.",
    url: '/project/1',
    icons: ['react', 'mui', 'python'],
    overlayOpacity: 0.8,  // Set custom opacity for overlay
  },
  {
    title: "Gaming R&D",
    img: "./assets/adobe.png",
    video: "./assets/video.mp4",
    titleColor: colors.orange,
    descColor: colors.gray,
    description: "Innovative gaming research and development.",
    url: '/project/1',
    icons: ['react', 'mui', 'python'],
    overlayOpacity: 0.8,  // Set custom opacity for overlay
  },
];


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        {/* Wrapping all routes with MainLayout */}
        <MainLayout>
          <Routes>
            <Route index element={<AboutMe projects={projectsArray} />} />
            <Route path="/" element={<AboutMe projects={projectsArray} />} />
            <Route path="/get-in-touch" element={<Kontakt />} />
            <Route path="/projects" element={<Projects projects={projectsArray} />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
