import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, #f8fffe 0%, #f0fdf4 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.2rem;
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

const DesktopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CarouselContainer = styled.div`
  display: none;
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 60px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  border-radius: 20px;
  width: 100%;
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  width: 600%; /* 6 cards * 100% */
`;

const DesktopCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  text-align: center;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: #10b981;
  }
`;

const IngredientCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  flex: 0 0 16.666%; /* 1/6 da largura total */
  width: 16.666%;
  margin: 0;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: #10b981;
  }
`;

const IngredientImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;

  img {
    width: 130px;
    height: 130px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    margin: 0 auto 1rem;

    img {
      width: 110px;
      height: 110px;
    }
  }
`;

const IngredientTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.8rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
  }
`;

const IngredientDescription = styled.p`
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #10b981;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
  
  &:hover {
    background: #059669;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#10b981' : '#d1d5db'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #10b981;
  }
`;

const IngredientsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const ingredients = [
    {
      id: 1,
      title: 'Agar Agar',
      description: 'Fibra natural que promove saciedade prolongada, reduzindo a ingestão calórica e apoiando o emagrecimento com equilíbrio digestivo.',
      image: '/agar.png'
    },
    {
      id: 2,
      title: 'Spirulina',
      description: 'Fonte concentrada de nutrientes que estimula o metabolismo e controla a compulsão alimentar, otimizando sua jornada de perda de peso.',
      image: '/sprulina.png'
    },
    {
      id: 3,
      title: 'Quitosana',
      description: 'Fibra especializada que inibe a absorção de gorduras, diminuindo calorias e favorecendo resultados consistentes no emagrecimento.',
      image: '/quitosana.png'
    },
    {
      id: 4,
      title: 'Psyllium',
      description: 'Fibra solúvel que regula o intestino e prolonga a saciedade, contribuindo para o controle do apetite e um emagrecimento saudável.',
      image: '/psyllium.png'
    },
    {
      id: 5,
      title: 'Cromo',
      description: 'Mineral essencial que regula os níveis de glicose, reduzindo a vontade de consumir doces e apoiando o controle de peso de forma estável.',
      image: '/cromo.png'
    },
    {
      id: 6,
      title: 'Guaraná',
      description: 'Extrato natural que aumenta a energia e estimula o metabolismo, promovendo maior queima calórica para um emagrecimento eficaz.',
      image: '/guarana.png'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const newSlide = prev + 1;
      return newSlide >= ingredients.length ? 0 : newSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const newSlide = prev - 1;
      return newSlide < 0 ? ingredients.length - 1 : newSlide;
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <SectionContainer>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Fórmula exclusiva para acelerar sua perda de peso
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Tenha em suas mãos a eficácia de uma fórmula 100% natural, feito para quem busca emagrecimento saudável sem sacrifícios.
        </SectionSubtitle>

        {/* Grid para Desktop */}
        <DesktopGrid>
          {ingredients.map((ingredient, index) => (
            <DesktopCard
              key={ingredient.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <IngredientImage>
                <img src={ingredient.image} alt={ingredient.title} />
              </IngredientImage>
              <IngredientTitle>{ingredient.title}</IngredientTitle>
              <IngredientDescription>{ingredient.description}</IngredientDescription>
            </DesktopCard>
          ))}
        </DesktopGrid>

        {/* Carousel para Mobile */}
        <CarouselContainer>
          <CarouselButton 
            direction="left" 
            onClick={prevSlide}
          >
            <FaChevronLeft />
          </CarouselButton>
          
          <CarouselWrapper>
            <CarouselTrack
              animate={{ x: `${-currentSlide * 16.666}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {ingredients.map((ingredient) => (
                <IngredientCard key={ingredient.id}>
                  <IngredientImage>
                    <img src={ingredient.image} alt={ingredient.title} />
                  </IngredientImage>
                  <IngredientTitle>{ingredient.title}</IngredientTitle>
                  <IngredientDescription>{ingredient.description}</IngredientDescription>
                </IngredientCard>
              ))}
            </CarouselTrack>
          </CarouselWrapper>
          
          <CarouselButton 
            direction="right" 
            onClick={nextSlide}
          >
            <FaChevronRight />
          </CarouselButton>
        </CarouselContainer>

        <DotsContainer>
          {ingredients.map((_, index) => (
            <Dot
              key={index}
              active={currentSlide === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsContainer>
      </Container>
    </SectionContainer>
  );
};

export default IngredientsSection; 