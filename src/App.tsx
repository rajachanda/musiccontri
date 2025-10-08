import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Mission from "@/pages/about/Mission";
import Vision from "@/pages/about/Vision";
import Guru from "@/pages/about/Guru";
import Mentor from "@/pages/about/Mentor";
import TeachingMethodology from "@/pages/student-corner/TeachingMethodology";
import SongsLyrics from "@/pages/student-corner/SongsLyrics";
import JoinLMA from "@/pages/student-corner/JoinLMA";
import StarsOfLMA from "@/pages/student-corner/StarsOfLMA";
import BuddingArtists from "@/pages/student-corner/BuddingArtists";
import ALMA from "@/pages/student-corner/ALMA";
import InspirationalProgrammes from "@/pages/student-corner/InspirationalProgrammes";
import Events from "@/pages/activities/Events";
import Charity from "@/pages/activities/Charity";
import Workshops from "@/pages/activities/Workshops";
import Donations from "@/pages/Donations";
import NotFound from "@/components/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <div className="font-sans">
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* About Routes */}
              <Route path="/about/mission" element={<Mission />} />
              <Route path="/about/vision" element={<Vision />} />
              <Route path="/about/guru" element={<Guru />} />
              <Route path="/about/mentor" element={<Mentor />} />
              
              {/* Student Corner Routes */}
              <Route path="/student-corner/join-lma" element={<JoinLMA />} />
              <Route path="/student-corner/teaching-methodology" element={<TeachingMethodology />} />
              <Route path="/student-corner/songs-lyrics" element={<SongsLyrics />} />
              <Route path="/student-corner/stars-of-lma" element={<StarsOfLMA />} />
              <Route path="/student-corner/budding-artists" element={<BuddingArtists />} />
              <Route path="/student-corner/alma" element={<ALMA />} />
              <Route path="/student-corner/inspirational-programmes" element={<InspirationalProgrammes />} />
              
              {/* Activities Routes */}
              <Route path="/activities/events" element={<Events />} />
              <Route path="/activities/charity" element={<Charity />} />
              <Route path="/activities/workshops" element={<Workshops />} />
              
              {/* Donations Route */}
              <Route path="/donations" element={<Donations />} />
              
              {/* 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
