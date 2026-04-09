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
import NotFound from "./pages/NotFound.tsx";

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
