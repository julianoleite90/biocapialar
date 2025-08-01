import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperimentSectionContainer = styled.section`
  background: white;
  padding: 120px 20px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 450px;
  gap: 40px;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 400px;
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const ContentArea = styled.div`
  color: #333;
  text-align: left;
  
  .mobile-image {
    display: none;
  }
  
  @media (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    .mobile-image {
      display: flex;
      justify-content: center;
      order: 1;
    }
    
    .text-content {
      order: 0;
    }
    
    button {
      order: 2;
    }
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: #333;
  margin-bottom: 30px;
  line-height: 1.2;
  
  .highlight {
    color: #333;
    font-size: 0.5em;
    font-style: italic;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #555;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #166534 0%, #15803d 50%, #14532d 100%);
  color: white;
  border: none;
  padding: 18px 40px;
  font-size: 1.3rem;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 12px 30px rgba(22, 101, 52, 0.4), 0 6px 15px rgba(0, 0, 0, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%);
    transform: translateY(-2px);
    box-shadow: 0 18px 40px rgba(22, 101, 52, 0.6), 0 8px 20px rgba(0, 0, 0, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 16px 35px;
    font-size: 1.1rem;
  }
`;



const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const GuaranteeBadge = styled(motion.div)`
  width: 550px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: auto;
    max-width: 550px;
  }
  
  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
    
    img {
      max-width: 400px;
    }
  }
`;



const ExperimentSection = () => {
  return (
    <ExperimentSectionContainer>
      <Container>
        <ContentArea>
          <div className="text-content">
            <SectionTitle
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              30 dias de garantia incondicional<br />
              <span className="highlight">Se você não gostar, pode devolver</span>
            </SectionTitle>
            
            <Description
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Com a nossa Garantia de Satisfação de 30 Dias, você pode experimentar o  Biocapilar sem nenhum risco. Teste, sinta a diferença e, se por qualquer motivo não estiver completamente satisfeito, é só entrar em contato com nossa equipe de atendimento, que está pronta para ajudar. Envie um simples e-mail dentro de 30 dias, e nós reembolsaremos 100% do valor pago — sem complicações, sem perguntas. É assim que confiamos no poder do Biocapilar que já ajudou mais de 163 mil pessoas em todo o Brasil! Conforme nossos termos de garantia*
            </Description>
          </div>
          
          <div className="mobile-image">
            <div style={{ width: '350px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="/garantia-biocapilar.png" 
                alt="30 Dias de Garantia Incondicional Definamax - 100% Satisfação Garantida ou Dinheiro de Volta" 
                style={{ width: '100%', height: 'auto', maxWidth: '350px' }}
              />
            </div>
          </div>
          
          <CTAButton
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EU QUERO O BIOCAPILAR
          </CTAButton>
        </ContentArea>
        
        <BadgeContainer>
          <GuaranteeBadge
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <img src="/garantia-biocapilar.png" alt="30 Dias de Garantia" />
          </GuaranteeBadge>
        </BadgeContainer>
      </Container>
    </ExperimentSectionContainer>
  );
};

export default ExperimentSection; 