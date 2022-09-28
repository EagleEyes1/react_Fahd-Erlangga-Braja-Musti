import AboutAuthor from "./components/AboutAuthor";
import AboutPage from "./components/AboutPage"
import Home from "./components/Home"
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/about-app" element={<AboutPage />} />
        <Route path="/about/about-author" element={<AboutAuthor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
