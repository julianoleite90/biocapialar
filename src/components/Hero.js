import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Barra superior vermelha com desconto
const TopBanner = styled.div`
  background: #dc2626;
  color: white;
  padding: 8px 0;
  text-align: center;
  position: relative;
  z-index: 1001;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid white;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 6px;
    padding: 8px 15px;
  }
`;

const MobileTopRow = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileBottomRow = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2px;
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const DesktopContent = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  
  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

const DiscountSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DiscountMain = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const DiscountSub = styled.div`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const CountdownText = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CountdownTimer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 3px;
  }
`;

const TimeUnit = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 6px;
  border-radius: 3px;
  font-weight: 700;
  min-width: 24px;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    padding: 3px 5px;
    min-width: 22px;
    font-size: 0.9rem;
  }
`;

const PromoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PromoHighlight = styled.div`
  background: white;
  color: black;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 2px;
  
  @media (max-width: 768px) {
    font-size: 0.65rem;
    padding: 2px 6px;
  }
`;

const PromoText = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 0.6rem;
    line-height: 1.0;
  }
`;



// Hero Section Principal
const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #020617 0%, #0f172a 25%, #1e293b 50%, #0f172a 75%, #020617 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-top: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%);
    pointer-events: none;
    z-index: 1;
  }
`;



// Header com logo
const HeaderSection = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
  padding-bottom: 20px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Logo = styled.div`
  margin: 0;
  
  img {
    height: 40px;
    width: auto;
    
    @media (max-width: 768px) {
      height: 30px;
      margin-top: 20px;
    }
  }
`;

// Conteúdo principal
const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 0 20px;
  text-align: center;
  padding-top: 20px;
  margin-top: -20px;
  
  @media (max-width: 768px) {
    margin-top: 0;
    padding-top: 20px;
  }
`;

// Main title components
const MainTitle = styled(motion.div)`
  text-align: center;
  margin-bottom: 30px;
  overflow-x: auto;
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  
  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 900;
    line-height: 1.1;
    color: white;
    text-shadow: none;
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: clamp(2rem, 7vw, 2.8rem);
    }
    
    @media (max-width: 480px) {
      font-size: clamp(1.8rem, 6vw, 2.2rem);
    }
  }
`;

const TitleMain = styled.span`
  display: block;
  font-size: 1em;
  font-weight: inherit;
  color: white;
  text-shadow: none;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    white-space: nowrap;
    font-size: 1em;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95em;
  }
`;

const TitleSub = styled.span`
  display: block;
  font-size: 0.75em;
  margin-top: 10px;
  color: white;
  text-shadow: none;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    margin-top: 8px;
    white-space: nowrap;
    font-size: 0.75em;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;

const Subtitle = styled(motion.p)`
  color: white;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

// Imagem do produto mockup
const MockupImage = styled.img`
  max-width: 420px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 20px 0;
  
  @media (max-width: 768px) {
    max-width: 350px;
  }
  
  @media (max-width: 480px) {
    max-width: 290px;
  }
`;

// CTA Button
const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #166534 0%, #15803d 50%, #14532d 100%);
  color: white;
  font-size: 1.4rem;
  font-weight: 900;
  padding: 20px 50px;
  border-radius: 8px;
  border: 3px solid #166534;
  cursor: pointer;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.6),
    0 10px 20px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  margin-top: 40px;
  margin-bottom: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.05);
    background: linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%);
    box-shadow: 
      0 25px 50px rgba(22, 101, 52, 0.4),
      0 15px 30px rgba(22, 101, 52, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-3px) scale(1.02);
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 20px 40px;
    margin-top: 30px;
    margin-bottom: 40px;
    letter-spacing: 1px;
    white-space: nowrap;
    box-shadow: 0 12px 25px rgba(22, 101, 52, 0.4), 0 4px 12px rgba(22, 101, 52, 0.2);
    
    &:hover {
      box-shadow: 0 15px 35px rgba(22, 101, 52, 0.5), 0 6px 18px rgba(22, 101, 52, 0.3);
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 18px 30px;
    letter-spacing: 0.5px;
  }
`;


// Barra inferior com animação
const BottomBanner = styled.div`
  background: #dc2626;
  color: white;
  padding: 15px 0;
  position: relative;
  margin-top: 5px;
  z-index: 2;
  overflow: hidden;
  
  @media (max-width: 768px) {
    margin-top: 2px;
    padding: 12px 0;
  }
`;

const ScrollingText = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: scroll 15s linear infinite;
  font-weight: 600;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    animation: scroll 12s linear infinite;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const TextItem = styled.span`
  margin-right: 30px;
  opacity: 0.95;
  
  &::after {
    content: '•';
    margin-left: 30px;
    opacity: 0.7;
  }
`;

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 57,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);



  return (
    <>
      <TopBanner>
        {/* Layout Desktop */}
        <DesktopContent>
          <DiscountSection>
            <DiscountMain>51% OFF</DiscountMain>
            <DiscountSub>KIT DE 5 MESES</DiscountSub>
          </DiscountSection>
          
          <CountdownContainer>
            <CountdownText>TEMPO LIMITADO</CountdownText>
            <CountdownTimer>
              <TimeUnit>{String(timeLeft.hours).padStart(2, '0')}</TimeUnit>
              <span>:</span>
              <TimeUnit>{String(timeLeft.minutes).padStart(2, '0')}</TimeUnit>
              <span>:</span>
              <TimeUnit>{String(timeLeft.seconds).padStart(2, '0')}</TimeUnit>
            </CountdownTimer>
          </CountdownContainer>
          
          <PromoSection>
            <PromoHighlight>5 MESES. O SEU CABELO DE VOLTA!</PromoHighlight>
            <PromoText>Você faz a escolha.<br/>O Biocapilar te entrega o resultado.</PromoText>
          </PromoSection>
        </DesktopContent>

        {/* Layout Mobile */}
        <MobileTopRow>
          <DiscountSection>
            <DiscountMain>51% OFF</DiscountMain>
            <DiscountSub>KIT DE 5 MESES</DiscountSub>
          </DiscountSection>
          
          <CountdownContainer>
            <CountdownText>TEMPO LIMITADO</CountdownText>
            <CountdownTimer>
              <TimeUnit>{String(timeLeft.hours).padStart(2, '0')}</TimeUnit>
              <span>:</span>
              <TimeUnit>{String(timeLeft.minutes).padStart(2, '0')}</TimeUnit>
              <span>:</span>
              <TimeUnit>{String(timeLeft.seconds).padStart(2, '0')}</TimeUnit>
            </CountdownTimer>
          </CountdownContainer>
        </MobileTopRow>

        <MobileBottomRow>
          <PromoHighlight>5 MESES. O SEU CABELO DE VOLTA!</PromoHighlight>
          <PromoText>Você faz a escolha. O Biocapilar te entrega o resultado.</PromoText>
        </MobileBottomRow>
      </TopBanner>

      <HeroSection>
        <HeaderSection>
          <Logo>
            <img src="/logo-biocapilar.png" alt="Biocapilar - Emagrecedor Natural Aprovado pela ANVISA" />
          </Logo>
        </HeaderSection>

        <MainContent>
          <MainTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1>
                          <TitleMain>ACABE COM A QUEDA</TitleMain>
            <TitleSub>E RESTAURE OS SEUS FIOS</TitleSub>
            </h1>
          </MainTitle>

          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Pare de sofrer com calvície, queda de cabelo, fios frágeis e entradas! Biocapilar é a solução definitiva que ataca o problema de frente, fortalecendo seus fios e restaurando sua confiança com uma fórmula natural e sem efeitos colaterais.
          </Subtitle>

          <MockupImage 
            src="/hero.png" 
            alt="Biocapilar - Mockup do Produto" 
          />

          <CTAButton
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const kitsSection = document.getElementById('kits');
              if (kitsSection) {
                kitsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            EXPERIMENTE BIOCAPILAR
          </CTAButton>
        </MainContent>

        <BottomBanner>
          <ScrollingText>
            <TextItem>51% OFF NO KIT DE 5 MESES</TextItem>
            <TextItem>MAIS DE 163 MIL VIDAS TRANSFORMADAS</TextItem>
            <TextItem>FÓRMULA 100% NATURAL</TextItem>
            <TextItem>RESULTADOS RÁPIDOS</TextItem>
            <TextItem>ACABE COM A QUEDA</TextItem>
            <TextItem>CABELOS MAIS SAUDÁVEIS</TextItem>
            <TextItem>51% OFF NO KIT DE 5 MESES</TextItem>
            <TextItem>MAIS DE 163 MIL VIDAS TRANSFORMADAS</TextItem>
            <TextItem>FÓRMULA 100% NATURAL</TextItem>
            <TextItem>RESULTADOS RÁPIDOS</TextItem>
            <TextItem>ACABE COM A QUEDA</TextItem>
            <TextItem>CABELOS MAIS SAUDÁVEIS</TextItem>
          </ScrollingText>
        </BottomBanner>
      </HeroSection>
    </>
  );
};

export default Hero; 