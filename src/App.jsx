import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import ReactGA from "react-ga4";
import Blogs from "./pages/Blogpage";
import LoadingBar from 'react-top-loading-bar';

const trackingId = "G-ETW3F6K6VY";
ReactGA.initialize(trackingId);

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(30);
    const timer = setTimeout(() => setProgress(70), 500);
    const timer2 = setTimeout(() => setProgress(100), 800);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <Router>
      <LoadingBar
        color="linear-gradient(to right, #8b5cf6, #ec4899)"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}