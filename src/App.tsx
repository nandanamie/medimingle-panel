import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Conversas from "./pages/Conversas";
import Atendentes from "./pages/Atendentes";
import Relatorios from "./pages/Relatorios";
import PerfilAtendente from "./pages/PerfilAtendente";
import PerfilCliente from "./pages/PerfilCliente";
import { Layout } from "./components/Layout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/conversas" element={<Conversas />} />
            <Route path="/atendentes" element={<Atendentes />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/perfil-atendente" element={<PerfilAtendente />} />
            <Route path="/perfil-cliente" element={<PerfilCliente />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
