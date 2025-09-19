import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResultsSection = styled.section`
  background: #f8f9fa;
  padding: 80px 20px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 400;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.2;
  
  .highlight {
    font-weight: 700;
    color: #333;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 60px;
  font-weight: 400;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ResultItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PhotoContainer = styled.div`
  width: 380px;
  min-height: 280px;
  overflow: visible;
  border-radius: 8px;
  margin-bottom: 15px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    width: 300px;
    min-height: 220px;
  }
`;

const PersonInfo = styled.div`
  font-size: 0.95rem;
  color: #555;
  text-align: center;
  
  .name {
    font-weight: 600;
    margin-right: 8px;
  }
  
  .details {
    font-weight: 400;
  }
  
  .city {
    font-weight: 500;
    color: #1a4d2e;
    font-size: 0.9rem;
    margin-top: 4px;
    display: block;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #166534 0%, #15803d 50%, #14532d 100%);
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 18px 50px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-bottom: 30px;
  box-shadow: 0 12px 30px rgba(22, 101, 52, 0.4), 0 6px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 40px rgba(22, 101, 52, 0.6), 0 8px 20px rgba(0, 0, 0, 0.4);
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 16px 40px;
  }
`;



const ExpandButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin: 20px auto;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: underline;
  
  &:hover {
    color: #333;
  }
  
  .arrow {
    font-size: 0.8rem;
    transition: transform 0.2s ease;
    transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Disclaimer = styled.p`
  font-size: 0.85rem;
  color: #666;
  line-height: 1.4;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Results = () => {
  const [expanded, setExpanded] = useState(false);
  
  const allResults = [
    {
      name: "Cesar Augusto",
      age: "49 anos",
      city: "Fortaleza - CE",
      image: "/dep4.png"
    },
    {
      name: "Bernando Souca",
      age: "26 anos",
      city: "Rio de Janeiro - RJ",
      image: "/dep6.png"
    },
    {
      name: "Isabela Lima",
      age: "29 anos",
      city: "Florianópolis - SC",
      image: "/dep1.png"
    },
    {
      name: "Gabriel Oliveira", 
      age: "31 anos",
      city: "Brasília - DF",
      image: "/dep2.png"
    },
    {
      name: "Juliana Mendes",
      age: "34 anos", 
      city: "Curitiba - PR",
      image: "/dep3.png"
    },
    {
      name: "Renato Santos",
      age: "34 anos",
      city: "Goiânia - GO",
      image: "/dep5.png"
    }
  ];

  // Mostrar apenas 3 inicialmente, ou todos se expandido
  const resultsToShow = expanded ? allResults : allResults.slice(0, 3);

  return (
    <ResultsSection>
      <Container>
        <MainTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Resultados reais de pessoas reais que <span className="highlight">venceram a calvície e recuperam a autoestima</span>
        </MainTitle>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Mais de 163 mil pessoas confiam em Biocapilar, em todo o Brasil.
        </Subtitle>

        <ResultsGrid>
          {resultsToShow.map((result, index) => (
            <ResultItem
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <PhotoContainer>
                <img src={result.image} alt={`${result.name} tratamento capilar`} />
              </PhotoContainer>
              
              <PersonInfo>
                <span className="name">{result.name}</span>
                <span className="details">| {result.age}</span>
                <br />
                <span className="city">{result.city}</span>
              </PersonInfo>
            </ResultItem>
          ))}
        </ResultsGrid>

        {/* Botão para expandir/contrair */}
        <ExpandButton
          expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Ver menos' : 'Ver mais resultados'}
          <span className="arrow">▼</span>
        </ExpandButton>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const kitsSection = document.getElementById('kits');
              if (kitsSection) {
                kitsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            EU QUERO BIOCAPILAR
          </CTAButton>
        </motion.div>
      </Container>
    </ResultsSection>
  );
};

export default Results; 