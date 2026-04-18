import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Services from "./pages/Services.tsx";
import OfficeInterior from "./pages/OfficeInterior.tsx";
import ShowroomInterior from "./pages/ShowroomInterior.tsx";
import RestaurantInterior from "./pages/RestaurantInterior.tsx";
import HomeInterior from "./pages/HomeInterior.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import InteriorDesignerGurgaon from "./pages/InteriorDesignerGurgaon.tsx";
import OfficeInteriorDesigner from "./pages/OfficeInteriorDesigner.tsx";
import ShowroomInteriorDesigner from "./pages/ShowroomInteriorDesigner.tsx";
import HomeInteriorDesigner from "./pages/HomeInteriorDesigner.tsx";
import BestInteriorDesignerGurugram from "./pages/BestInteriorDesignerGurugram.tsx";
import BestInteriorDesignerNearMe from "./pages/BestInteriorDesignerNearMe.tsx";
import HouseConstructionGurugram from "./pages/HouseConstructionGurugram.tsx";
import HomeBuildersGurugram from "./pages/HomeBuildersGurugram.tsx";
import ConstructionCostGurugram from "./pages/ConstructionCostGurugram.tsx";
import CostCalculator from "./pages/CostCalculator.tsx";
import NotFound from "./pages/NotFound.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import PortfolioHome from "./pages/PortfolioHome.tsx";
import PortfolioOffice from "./pages/PortfolioOffice.tsx";
import PortfolioShowroom from "./pages/PortfolioShowroom.tsx";
import InteriorDesignerDLFPhase1 from "./pages/InteriorDesignerDLFPhase1.tsx";
import InteriorDesignerSector56 from "./pages/InteriorDesignerSector56.tsx";
import InteriorDesignerGolfCourseRoad from "./pages/InteriorDesignerGolfCourseRoad.tsx";
import InteriorDesignerSohnaRoad from "./pages/InteriorDesignerSohnaRoad.tsx";
import InteriorDesignerSector67 from "./pages/InteriorDesignerSector67.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/our-portfolio" element={<Portfolio />} />
            <Route path="/our-portfolio/home-interior-designer-in-gurugram" element={<PortfolioHome />} />
            <Route path="/our-portfolio/office-interior-designer-in-gurugram" element={<PortfolioOffice />} />
            <Route path="/our-portfolio/showroom-interior-designer-in-gurugram" element={<PortfolioShowroom />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/office-interior-design-gurgaon" element={<OfficeInterior />} />
            <Route path="/showroom-interior-design-gurgaon" element={<ShowroomInterior />} />
            <Route path="/commercial-interior-design-gurgaon" element={<Services />} />
            <Route path="/restaurant-interior" element={<RestaurantInterior />} />
            <Route path="/home-interior" element={<HomeInterior />} />
            <Route path="/interior-designer-gurgaon" element={<InteriorDesignerGurgaon />} />
            <Route path="/office-interior-designer-gurgaon" element={<OfficeInteriorDesigner />} />
            <Route path="/showroom-interior-designer-gurgaon" element={<ShowroomInteriorDesigner />} />
            <Route path="/home-interior-designer-gurgaon" element={<HomeInteriorDesigner />} />
            <Route path="/best-interior-designer-in-gurugram" element={<BestInteriorDesignerGurugram />} />
            <Route path="/best-interior-designer-near-me-gurugram" element={<BestInteriorDesignerNearMe />} />
            <Route path="/house-construction-in-gurugram" element={<HouseConstructionGurugram />} />
            <Route path="/home-builders-and-constructions-in-gurugram" element={<HomeBuildersGurugram />} />
            <Route path="/construction-cost-in-gurugram" element={<ConstructionCostGurugram />} />
            <Route path="/interior-design-cost-calculator-gurugram" element={<CostCalculator />} />
            <Route path="/interior-designer-in-dlf-phase-1-gurgaon" element={<InteriorDesignerDLFPhase1 />} />
            <Route path="/interior-designer-in-sector-56-gurgaon" element={<InteriorDesignerSector56 />} />
            <Route path="/interior-designer-in-golf-course-road-gurgaon" element={<InteriorDesignerGolfCourseRoad />} />
            <Route path="/interior-designer-in-sohna-road-gurgaon" element={<InteriorDesignerSohnaRoad />} />
            <Route path="/interior-designer-in-sector-67-gurgaon" element={<InteriorDesignerSector67 />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
