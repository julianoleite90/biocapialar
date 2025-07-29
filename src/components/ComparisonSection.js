import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.8rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 0.8rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #6b7280;
  margin-bottom: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
    max-width: 100%;
  }
`;

const ComparisonImage = styled(motion.div)`
  position: relative;
  max-width: 600px;
  margin: 0 auto 3rem;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    max-width: 350px;
    height: 280px;
    margin-bottom: 2.5rem;
  }
`;

const ProductHalf = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.side === 'left' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'};
  
  ${props => props.side === 'left' ? 'left: 0;' : 'right: 0;'}
`;

const ProductImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
`;

const ProductLabel = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

const VSIndicator = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: #1f2937;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.2rem;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  z-index: 10;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }
`;

const ComparisonText = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ComparisonTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #10b981;
  margin-bottom: 1.2rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`;

const ComparisonDescription = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.7;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const ChallengeText = styled.p`
  font-size: 1.1rem;
  color: #dc2626;
  font-weight: 600;
  line-height: 1.6;
  text-align: center;
  max-width: 600px;
  margin: 1.2rem auto 0;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0.8rem auto 0;
  }
`;

const ComparisonSection = () => {
  return (
    <SectionContainer>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Compare e Comprove
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Veja a diferença entre Phynamax e outros produtos do mercado
        </SectionSubtitle>

        <ComparisonImage
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ProductHalf side="left">
            <ProductImage src="/comparativo1.png" alt="Phynamax" />
            <ProductLabel>PHYNAMAX</ProductLabel>
          </ProductHalf>
          
          <ProductHalf side="right">
            <ProductImage src="/comparativo2.png" alt="Outros Produtos" />
            <ProductLabel>OUTROS</ProductLabel>
          </ProductHalf>
          
          <VSIndicator>VS</VSIndicator>
        </ComparisonImage>

        <ComparisonText
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <ComparisonTitle>A Fórmula Mais Potente para Emagrecer</ComparisonTitle>
          <ComparisonDescription>
            Phynamax lidera com a fórmula mais completa e concentrada do mercado. Cada cápsula contém 600 mg de 6 ingredientes poderosos, superando outros produtos com ingredientes de baixa qualidade e dosagens de 500 mg ou menos.
          </ComparisonDescription>
          <ChallengeText>
            Desafie a concorrência: pergunte a dosagem por cápsula e comprove a superioridade do Phynamax!
          </ChallengeText>
        </ComparisonText>
      </Container>
    </SectionContainer>
  );
};

export default ComparisonSection; 