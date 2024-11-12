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
    company: "ANIMAL",
    img: "./assets/unger.png",
    titleColor: colors.black,
    descColor: colors.gray,
    description: "A fun, food-themed multiplayer game."
  },
  {
    title: "Gaming R&D",
    company: "ANIMAL",
    img: "./assets/adobe.png",
    titleColor: colors.white,
    descColor: colors.gray,
    description: "Innovative gaming research and development."
  },
  {
    title: "National Parks Posters",
    company: "GOOGLE",
    img: "./assets/animal.png",
    titleColor: colors.orange,
    descColor: colors.white,
    description: "Beautiful posters inspired by national parks."
  },
  {
    title: "National Parks",
    company: "GOOGLE",
    img: "./assets/behance.png",
    titleColor: colors.white,
    descColor: colors.gray,
    description: "A tribute to the grandeur of national parks."
  },
  {
    title: "Yoga",
    company: "LENOVO",
    img: "./assets/bluehost.png",
    titleColor: colors.black,
    descColor: colors.gray,
    description: "Technology meets flexibility in Lenovo's Yoga series."
  },
  {
    title: "ZeroTouch",
    company: "LOGI",
    img: "./assets/framer.png",
    titleColor: colors.white,
    descColor: colors.gray,
    description: "A hands-free driving assistant for safe commuting."
  },
  {
    title: "National Parks",
    company: "GOOGLE",
    img: "./assets/nf2.png",
    titleColor: colors.white,
    descColor: colors.gray,
    description: "A tribute to the grandeur of national parks."
  },
  {
    title: "Yoga",
    company: "LENOVO",
    img: "./assets/webarty.png",
    titleColor: colors.black,
    descColor: colors.gray,
    description: "Technology meets flexibility in Lenovo's Yoga series."
  },
  {
    title: "ZeroTouch",
    company: "LOGI",
    img: "./assets/webflow.png",
    titleColor: colors.white,
    descColor: colors.gray,
    description: "A hands-free driving assistant for safe commuting."
  },
  {
    title: "ZeroTouch",
    company: "LOGI",
    img: "./assets/webflow.png",
    titleColor: colors.white,
    descColor: colors.gray,
    description: "A hands-free driving assistant for safe commuting."
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
