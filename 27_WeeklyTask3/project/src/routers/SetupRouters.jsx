import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../components/AboutUs/AboutUs";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import LandingPage from "../pages/LandingPage";

const SetUpRouters = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default SetUpRouters;
