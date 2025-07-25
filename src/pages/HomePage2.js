import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import OfferSection from '../components/OfferSection2';
import Results from '../components/Results';
import FlexibilitySection from '../components/FlexibilitySection';
import VideoSection from '../components/VideoSection';
import ExperimentSection from '../components/ExperimentSection';
import KitsSection from '../components/KitsSection2';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';


const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

function HomePage2() {
  // Alterar título da página
  React.useEffect(() => {
    document.title = 'TRC Phynamax - Site Oficial | Emagrecedor Natural #1 do Brasil';
  }, []);
  return (
    <HomeContainer>
      <Hero />
      <OfferSection />
      <Results />
      <FlexibilitySection />
      <VideoSection />
      <KitsSection />
      <ExperimentSection />
      <FAQ />
      <Footer />

    </HomeContainer>
  );
}

export default HomePage2; 