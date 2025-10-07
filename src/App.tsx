import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Mission from "@/pages/about/Mission";
import Vision from "@/pages/about/Vision";
import Guru from "@/pages/about/Guru";
import Mentor from "@/pages/about/Mentor";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <div className="font-sans">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about/mission" element={<Mission />} />
              <Route path="/about/vision" element={<Vision />} />
              <Route path="/about/guru" element={<Guru />} />
              <Route path="/about/mentor" element={<Mentor />} />
            </Routes>
            <Toaster />
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
