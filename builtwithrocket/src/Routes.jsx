import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Homepage from "./pages/homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyQualifyde from "./pages/CaseStudyQualifyde";
import CaseStudyMicrosoftAttNike from "./pages/CaseStudyMicrosoftAttNike";
import CaseStudySapTelefonicaOoredoo from "./pages/CaseStudySapTelefonicaOoredoo";
import CaseStudyObopay from "./pages/CaseStudyObopay";
import CaseStudyThomsonReuters from "./pages/CaseStudyThomsonReuters";
import CaseStudyNetEnforcers from "./pages/CaseStudyNetEnforcers";
import CaseStudyMcmTours from "./pages/CaseStudyMcmTours";
import CaseStudyHemaMetrics from "./pages/CaseStudyHemaMetrics";
import Insights from "./pages/Insights";
import SoftwareModernization from "./pages/services/SoftwareModernization";
import SystemArchitecture from "./pages/services/SystemArchitecture";
import IntegrationAutomation from "./pages/services/IntegrationAutomation";
import PracticalAI from "./pages/services/PracticalAI";
import OngoingSupport from "./pages/services/OngoingSupport";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsConditions from "./pages/legal/TermsConditions";
import CookiePolicy from "./pages/legal/CookiePolicy";

const Routes = () => {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <ScrollToTop />
                <RouterRoutes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/software-modernization" element={<SoftwareModernization />} />
                    <Route path="/services/system-architecture" element={<SystemArchitecture />} />
                    <Route path="/services/integration-automation" element={<IntegrationAutomation />} />
                    <Route path="/services/practical-ai" element={<PracticalAI />} />
                    <Route path="/services/ongoing-support" element={<OngoingSupport />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/insights" element={<Insights />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/case-studies/qualifyde" element={<CaseStudyQualifyde />} />
                    <Route path="/case-studies/microsoft-att-nike" element={<CaseStudyMicrosoftAttNike />} />
                    <Route path="/case-studies/sap-telefonica-ooredoo" element={<CaseStudySapTelefonicaOoredoo />} />
                    <Route path="/case-studies/obopay" element={<CaseStudyObopay />} />
                    <Route path="/case-studies/thomson-reuters" element={<CaseStudyThomsonReuters />} />
                    <Route path="/case-studies/netenforcers" element={<CaseStudyNetEnforcers />} />
                    <Route path="/case-studies/mcm-tours" element={<CaseStudyMcmTours />} />
                    <Route path="/case-studies/hema-metrics" element={<CaseStudyHemaMetrics />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-and-conditions" element={<TermsConditions />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                    <Route path="*" element={<NotFound />} />
                </RouterRoutes>
            </ErrorBoundary>
        </BrowserRouter>
    );
};

export default Routes;
