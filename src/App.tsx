import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Capabilities from "./pages/Capabilities";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Installation from "./pages/services/Installation";
import Commissioning from "./pages/services/Commissioning";
import Maintenance from "./pages/services/Maintenance";
import HVACSystem from "./pages/services/HVACSystem";
import DataCenterCooling from "./pages/services/DataCenterCooling";
import Procurement from "./pages/services/Procurement";
import Tendering from "./pages/services/Tendering";
import Logistics from "./pages/services/Logistics";
import RealEstate from "./pages/services/RealEstate";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/installation" element={<Installation />} />
          <Route path="/services/commissioning" element={<Commissioning />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/services/hvac-systems" element={<HVACSystem />} />
          <Route path="/services/data-center-cooling" element={<DataCenterCooling />} />
          <Route path="/services/procurement" element={<Procurement />} />
          <Route path="/services/tendering" element={<Tendering />} />
          <Route path="/services/logistics" element={<Logistics />} />
          <Route path="/services/real-estate" element={<RealEstate />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;