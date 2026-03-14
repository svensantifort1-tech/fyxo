import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Werkwijze from "./pages/Werkwijze";
import Portfolio from "./pages/Portfolio";
import Prijzen from "./pages/Prijzen";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Bedankt from "./pages/Bedankt";
import OverOns from "./pages/OverOns";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppLayout = () => {
  const location = useLocation();
  const isMinimalLayout = ["/checkout", "/bedankt"].includes(location.pathname);

  return (
    <>
      {!isMinimalLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/werkwijze" element={<Werkwijze />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/prijzen" element={<Prijzen />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/bedankt" element={<Bedankt />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isMinimalLayout && <Footer />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);
export default App;
