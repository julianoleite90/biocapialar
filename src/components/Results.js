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
  width: 300px;
  height: 350px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 15px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 480px) {
    width: 250px;
    height: 280px;
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
  background: #be185d;
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 18px 50px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-bottom: 30px;
  box-shadow: 0 12px 30px rgba(190, 24, 93, 0.4), 0 6px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 40px rgba(190, 24, 93, 0.6), 0 8px 20px rgba(0, 0, 0, 0.4);
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
      name: "Isabela Lima",
      age: "29 anos",
      weight: "-16kg",
      city: "Florianópolis - SC",
      image: "/10.png"
    },
    {
      name: "Gabriela Oliveira", 
      age: "31 anos",
      weight: "-25Kg",
      city: "Brasília - DF",
      image: "/11.png"
    },
    {
      name: "Juliana Mendes",
      age: "27 anos", 
      weight: "-19Kg",
      city: "Curitiba - PR",
      image: "/12.png"
    },
    {
      name: "Bruno Rodrigues",
      age: "43 anos",
      weight: "-28kg",
      city: "Fortaleza - CE",
      image: "/13.png"
    },
    {
      name: "Priscila Santos",
      age: "30 anos",
      weight: "-24kg",
      city: "Goiânia - GO",
      image: "/14.png"
    },
    {
      name: "Rafaela Fernandes",
      age: "26 anos",
      weight: "-18kg",
      city: "Manaus - AM",
      image: "/15.png"
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
          Resultados reais de pessoas reais que <span className="highlight">venceram o sobrepeso</span>
        </MainTitle>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Mais de 63 mil pessoas confiam em Phynamax, em todo o Brasil.
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
                <img src={result.image} alt={`${result.name} resultado`} />
              </PhotoContainer>
              
              <PersonInfo>
                <span className="name">{result.name}</span>
                <span className="details">| {result.age} | {result.weight}</span>
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
            EU QUERO EMAGRECER
          </CTAButton>
        </motion.div>
      </Container>
    </ResultsSection>
  );
};

export default Results; 