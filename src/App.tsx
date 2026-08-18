import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DivemasterPage from "./pages/DivemasterPage";
import InstructorPage from "./pages/InstructorPage";
import AssistantInstructorPage from "./pages/AssistantInstructorPage";
import IDCStaffPage from "./pages/IDCStaffPage";
import IDCSchedulePage from "./pages/IDCSchedulePage";
import TechnicalDivingPage from "./pages/TechnicalDivingPage";
import OpenWaterPage from "./pages/OpenWaterPage";
import AdvancedOpenWaterPage from "./pages/AdvancedOpenWaterPage";
import RescueDiverPage from "./pages/RescueDiverPage";
import NitroxPage from "./pages/NitroxPage";
import DeepDivingPage from "./pages/DeepDivingPage";
import WreckDivingPage from "./pages/WreckDivingPage";
import NightDivingPage from "./pages/NightDivingPage";
import FreedivingPage from "./pages/FreedivingPage";
import NusaPenidaPage from "./pages/NusaPenidaPage";
import NusaLembonganPage from "./pages/NusaLembonganPage";
import NotFound from "./pages/NotFound";
import { initGA, Analytics } from "./lib/analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* initialize analytics once */}
        {initGA()}
        <Analytics />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/divemaster" element={<DivemasterPage />} />
          <Route path="/assistant-instructor" element={<AssistantInstructorPage />} />
          <Route path="/instructor" element={<InstructorPage />} />
          <Route path="/idc-schedule" element={<IDCSchedulePage />} />
          <Route path="/idc-staff" element={<IDCStaffPage />} />
          <Route path="/technical-diving" element={<TechnicalDivingPage />} />
          <Route path="/open-water" element={<OpenWaterPage />} />
          <Route path="/advanced-open-water" element={<AdvancedOpenWaterPage />} />
          <Route path="/rescue-diver" element={<RescueDiverPage />} />
          <Route path="/nitrox" element={<NitroxPage />} />
          <Route path="/deep-diving" element={<DeepDivingPage />} />
          <Route path="/wreck-diving" element={<WreckDivingPage />} />
          <Route path="/night-diving" element={<NightDivingPage />} />
          <Route path="/freediving" element={<FreedivingPage />} />
          <Route path="/nusa-penida" element={<NusaPenidaPage />} />
          <Route path="/nusa-lembongan" element={<NusaLembonganPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
