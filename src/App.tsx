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
import TechnicalDivingPage from "./pages/TechnicalDivingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/divemaster" element={<DivemasterPage />} />
          <Route path="/assistant-instructor" element={<AssistantInstructorPage />} />
          <Route path="/instructor" element={<InstructorPage />} />
          <Route path="/idc-staff" element={<IDCStaffPage />} />
          <Route path="/technical-diving" element={<TechnicalDivingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
