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
          <Route path="/frontend/home" element={<Home />} />
          <Route path="/frontend/create-post" element={<CreatePostPage />} />
          <Route path="/frontend/settings" element={<Account />} />
          <Route path="/frontend/programs" element={<Programs />} />
          <Route
            path="/frontend/change-password"
            element={<PasswordUpdatePage />}
          />
        </Route>
        <Route element={<LoggedInRoute />}>
          <Route path="/frontend/" element={<MyLanding />} />
        </Route>
        <Route path="/frontend/login" element={<Login />} />
        {/* <Route path='/signup' element={<SignUp />} /> */}
        <Route path="/frontend/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/frontend/terms" element={<TermsOfUse />} />
        <Route path="/frontend/about" element={<AboutUs />} />
        <Route path="/frontend/contact" element={<ContactUs />} />
        <Route path="/frontend/support" element={<UserSupport />} />
        <Route path="/frontend/faqs" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
