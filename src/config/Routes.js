import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import CreatePostPage from "../pages/CreatePostPage";
import Programs from "../pages/Programs";
import Account from "../pages/Account";
import PrivacyPolicy from "../pages/LandingPageCom/PrivacyPolicyPage";
import TermsOfUse from "../pages/LandingPageCom/TermsOfUse";
import AboutUs from "../pages/LandingPageCom/AboutUs";
import ContactUs from "../pages/LandingPageCom/ContactUs";
import UserSupport from "../pages/LandingPageCom/UserSupport";
import PrivateWrapper from "./PrivateRoutes";
import ScrollToTop from "./ScrollToTop";
import Faq from "../pages/LandingPageCom/Faq";
import MyLanding from "../pages/LandingPageCom/LandingPage";
import PasswordUpdatePage from "../components/PageComponents/PasswordUpdate";
import LoggedInRoute from "./LoggedInRoute";
const Routers = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<PrivateWrapper />}>
          <Route path="/home" element={<Home />} />
          <Route path="/create-post" element={<CreatePostPage />} />
          <Route path="/settings" element={<Account />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/change-password" element={<PasswordUpdatePage />} />
        </Route>
        <Route element={<LoggedInRoute />}>
          <Route path="/" element={<MyLanding />} />
        </Route>
        <Route path="/login" element={<Login />} />
        {/* <Route path='/signup' element={<SignUp />} /> */}
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/support" element={<UserSupport />} />
        <Route path="/faqs" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
