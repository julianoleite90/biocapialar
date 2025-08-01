import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FlexibilityContainer = styled.section`
  background: linear-gradient(135deg, #020617 0%, #0f172a 25%, #1e293b 50%, #0f172a 75%, #020617 100%);
  padding: 60px 20px 0 20px;
  color: white;
  text-align: center;
  min-height: 380px;
  display: flex;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    padding: 40px 20px 0 20px;
    min-height: 320px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: flex-end;
  height: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
    align-items: center;
  }
`;

const ContentArea = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
  
  @media (max-width: 768px) {
    text-align: center;
    padding-bottom: 15px;
  }
`;

const MainTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  color: white;
  margin-bottom: 30px;
  line-height: 1.2;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  color: white;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const DeviceArea = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  height: 100%;
`;

const DeviceMockup = styled.div`
  width: 100%;
  max-width: 700px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 0;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 0;
  }
`;

const FlexibilitySection = () => {
  return (
    <FlexibilityContainer>
      <Container>
        <ContentArea>
          <MainTitle
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Chega de se preocupar com a queda de cabelo ou sentir vergonha da calvície
          </MainTitle>
          
          <Description
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Recupere sua autoestima e tenha mais confiança com um cabelo mais forte e saudável. Conquiste uma aparência revitalizada com tratamentos que transformam a saúde capilar. Desenvolvidos para promover o crescimento natural dos fios e combater a queda de cabelo, nossos métodos oferecem resultados que vão muito além da estética, sem sacrifícios, ajudando você a se sentir bem consigo mesmo todos os dias.
          </Description>
        </ContentArea>

        <DeviceArea
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <DeviceMockup>
            <img src="/imagem-fundo.png" alt="Pessoa com cabelo saudável após tratamento com Biocapilar" />
          </DeviceMockup>
        </DeviceArea>
      </Container>
    </FlexibilityContainer>
  );
};

export default FlexibilitySection; 