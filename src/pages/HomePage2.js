import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import OfferSection from '../components/OfferSection2';
import Results from '../components/Results';
import FlexibilitySection from '../components/FlexibilitySection';

import IngredientsSection from '../components/IngredientsSection';
import ComparisonSection from '../components/ComparisonSection';
import ExperimentSection from '../components/ExperimentSection';
import KitsSection from '../components/KitsSection2';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';


const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const BioactivesSection = styled.section`
  padding: 2rem 1rem;
  background: white;
  text-align: center;
`;

const BioactivesTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: #1f2937;
  max-width: 64rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
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
      <IngredientsSection />
      <ComparisonSection />
      <KitsSection />
      <ExperimentSection />
      <FAQ />
      <Footer />

    </HomeContainer>
  );
}

export default HomePage2; 