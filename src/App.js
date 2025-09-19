import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Importar páginas
import HomePage from './pages/HomePage';
import HomePage02 from './pages/HomePage02';
import HomePage2 from './pages/HomePage2';
import ProductPage from './pages/ProductPage';
import RemarketingPage from './pages/RemarketingPage';
import RemarketingPage02 from './pages/RemarketingPage02';
import ThankYouPage from './pages/ThankYouPage';
import WarrantyTermsPage from './pages/WarrantyTermsPage';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          {/* Página inicial - Landing Page */}
          <Route path="/" element={<HomePage />} />
          
          {/* Página inicial versão 02 - Biocapilar 02 */}
          <Route path="/biocapilar-02" element={<HomePage02 />} />
          
          {/* Página inicial versão 2 - TRC */}
          <Route path="/phynamax-2" element={<HomePage2 />} />
          
          {/* Página de produto */}
          <Route path="/produto" element={<ProductPage />} />
          
          {/* Página de remarketing com vídeos */}
          <Route path="/remarketing" element={<RemarketingPage />} />
          
          {/* Página de remarketing 02 */}
          <Route path="/remarketing-02" element={<RemarketingPage02 />} />
          
          {/* Página de agradecimento pós-compra */}
          <Route path="/obrigado" element={<ThankYouPage />} />
          
          {/* Página de termos de garantia */}
          <Route path="/termos" element={<WarrantyTermsPage />} />
          <Route path="/termos-garantia" element={<WarrantyTermsPage />} />
          
          {/* Redirecionar rotas não encontradas para homepage */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App; 