import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
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

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 0.8rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
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
  display: none;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 769px) {
    display: grid;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  margin: 0 60px;
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  width: 600%; /* 6 cards * 100% */
`;

const DesktopCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 2px solid transparent;
  text-align: center;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  &:hover {
    transform: translateY(-3px) translateZ(0);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
    border-color: #10b981;
  }
`;

const IngredientCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
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
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
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
    transform: translateZ(0);
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
  transform: translateY(-50%) translateZ(0);
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
  transition: background-color 0.2s ease, transform 0.2s ease;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
  will-change: transform;
  backface-visibility: hidden;
  
  &:hover {
    background: #059669;
    transform: translateY(-50%) scale(1.05) translateZ(0);
  }

  &:active {
    transform: translateY(-50%) scale(0.98) translateZ(0);
  }

  ${props => props.direction === 'left' ? 'left: 0;' : 'right: 0;'}
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;

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
  transition: background-color 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? '#10b981' : '#9ca3af'};
  }
`;

const IngredientsSection = React.memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const ingredients = useMemo(() => [
    {
      id: 1,
      title: 'Gelidium Amansii',
      description: 'Descubra o poder deste polissacarídeo natural de origem marinha! Promove saciedade duradoura, controla a ingestão calórica com precisão e acelera sua jornada de emagrecimento, enquanto mantém seu sistema digestivo em perfeito equilíbrio.',
      image: '/agar.png'
    },
    {
      id: 2,
      title: 'Arthrospira Platensis',
      description: 'Poderosa superalga rica em nutrientes! Acelera o metabolismo, combate a compulsão alimentar e impulsiona sua jornada de emagrecimento com energia e vitalidade.',
      image: '/sprulina.png'
    },
    {
      id: 3,
      title: 'Chitosan',
      description: 'Acelere o processo de emagrecimento com esta fibra bioativa de alta performance! Bloqueia a absorção de gorduras, reduz calorias de forma inteligente.',
      image: '/quitosana.png'
    },
    {
      id: 4,
      title: 'Plantago Ovata',
      description: 'Poderosa fibra solúvel! Regula o intestino, prolonga a saciedade e domina o apetite, pavimentando o caminho para um emagrecimento saudável e sustentável.',
      image: '/psyllium.png'
    },
    {
      id: 5,
      title: 'Chromium',
      description: 'Poderoso mineral que estabiliza os níveis de glicose, elimina a compulsão por doces e impulsiona o controle de peso com resultados consistentes e duradouros.',
      image: '/cromo.png'
    },
    {
      id: 6,
      title: 'Paullinia Cupana',
      description: 'Extrato natural poderoso que turbina sua energia, acelera o metabolismo e maximiza a queima calórica, pavimentando o caminho para um emagrecimento eficaz e vibrante.',
      image: '/guarana.png'
    }
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const newSlide = prev + 1;
      return newSlide >= ingredients.length ? 0 : newSlide;
    });
  }, [ingredients.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const newSlide = prev - 1;
      return newSlide < 0 ? ingredients.length - 1 : newSlide;
    });
  }, [ingredients.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  return (
    <SectionContainer>
      <Container>
        <SectionTitle>
          Fórmula exclusiva para acelerar sua perda de peso
        </SectionTitle>
        
        <SectionSubtitle>
          Tenha em suas mãos a eficácia de uma fórmula 100% natural, feito para quem busca emagrecimento saudável sem sacrifícios.
        </SectionSubtitle>

        {/* Grid para Desktop */}
        <DesktopGrid>
          {ingredients.map((ingredient) => (
            <DesktopCard key={ingredient.id}>
              <IngredientImage>
                <img src={ingredient.image} alt={ingredient.title} loading="lazy" />
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
            aria-label="Ingrediente anterior"
          >
            <FaChevronLeft />
          </CarouselButton>
          
          <CarouselWrapper>
            <CarouselTrack
              animate={{ x: `${-currentSlide * 16.666}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {ingredients.map((ingredient) => (
                <IngredientCard key={ingredient.id}>
                  <IngredientImage>
                    <img src={ingredient.image} alt={ingredient.title} loading="lazy" />
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
            aria-label="Próximo ingrediente"
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
              aria-label={`Ir para ingrediente ${index + 1}`}
            />
          ))}
        </DotsContainer>
      </Container>
    </SectionContainer>
  );
});

IngredientsSection.displayName = 'IngredientsSection';

export default IngredientsSection; 