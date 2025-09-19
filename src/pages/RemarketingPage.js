import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaStar, FaLock, FaGift, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import Footer from '../components/Footer';


const RemarketingContainer = styled.div`
  min-height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  background: linear-gradient(to right, #020617, #1e293b, #020617);
  padding: 0.875rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    animation: shine 1.5s infinite;
  }

  @keyframes shine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @media (min-width: 768px) {
    padding: 0.75rem 0;
  }
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  @media (min-width: 768px) {
    gap: 2rem;
    padding: 0.125rem 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.img`
  height: 1.8rem;
  width: auto;

  @media (min-width: 768px) {
    height: 2.4rem;
  }
`;

const HeaderButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #1e293b;
  padding: 0.625rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #0f172a;
  }
`;

const LimitSection = styled.div`
  background: linear-gradient(to bottom, white, white);
  border-bottom: 1px solid #e5e7eb;
  width: 100%;
`;

const LimitContent = styled.div`
  max-width: 1792px;
  margin: 0 auto;
  padding: 1rem;
`;

const LimitInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

const LimitBadge = styled.div`
  background: #1e293b;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  border: 1px solid #0f172a;
  width: 100%;
  text-align: center;
  color: #e5e7eb;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const LimitTitle = styled.h2`
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const LimitText = styled.p`
  color: #6b7280;
  font-size: 1rem;
  text-align: center;
  max-width: 48rem;
  line-height: 1.625;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    width: auto;
  }
`;

const PaymentLabel = styled.span`
  color: #6b7280;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const PaymentIcon = styled.img`
  height: 1.5rem;
  width: auto;
`;

const PromoSection = styled.div`
  background: white;
  padding: 2rem 0;

  @media (min-width: 768px) {
    padding: 3rem 0;
  }

  &.mobile-only {
    @media (min-width: 768px) {
      display: none;
    }
  }

  &.desktop-only {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

const PromoDesktop = styled.div`
  max-width: 1536px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PromoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
`;

const PromoImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PromoImage = styled.img`
  object-fit: contain;
`;

const PromoContent = styled.div``;

const PromoTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 900;
  color: #111827;
  margin-bottom: 0.75rem;
  line-height: 1.2;
`;

const PromoSubtitle = styled.h3`
  font-size: 1.875rem;
  font-weight: bold;
  color: #CD853F;
  margin-bottom: 1.5rem;
`;

const PromoText = styled.p`
  color: #374151;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  line-height: 1.625;
`;

const PromoBox = styled.div`
  background: rgba(239, 246, 255, 0.5);
  border: 2px solid #3b82f6;
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const PromoBoxTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 900;
  color: #1f2937;
  margin-bottom: 0.75rem;
  text-align: center;
`;

const PromoBoxPrice = styled.div`
  margin-bottom: 0.25rem;
  text-align: center;
`;

const PromoBoxOldPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ef4444;
  text-decoration: line-through;
  text-align: center;
  margin: 0.5rem 0;
`;

const PromoBoxNewPrice = styled.p`
  font-size: 1.875rem;
  font-weight: 900;
  color: #059669;
  text-align: center;
  margin: 0.5rem 0;
`;

const PromoBoxCashPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #6b7280;
  margin: 0.5rem 0;
  text-align: center;
`;

const PromoButton = styled.button`
  display: inline-block;
  width: 100%;
  background: #059669;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #047857;
  }
`;

const SecuritySeals = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding-top: 0.5rem;
`;

const SecurityItem = styled.div`
  display: flex;
  align-items: center;
  color: #374151;
  gap: 0.5rem;
`;

const SecurityIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  color: #059669;
`;

const SecurityText = styled.span`
  font-size: 0.875rem;
`;

// Mobile Promo Components
const PromoMobile = styled.div`
  max-width: 24rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PromoCard = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
`;

const PromoImageMobile = styled.div`
  position: relative;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PromoTitleMobile = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const PromoSubtitleMobile = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #CD853F;
  margin-bottom: 1rem;
`;

const PromoTextMobile = styled.p`
  color: #374151;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.625;
`;

const PromoBoxMobile = styled.div`
  border: 2px solid #3b82f6;
  border-radius: 0.75rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
  background: rgba(239, 246, 255, 0.5);
  text-align: center;
`;

const PromoBoxTitleMobile = styled.h4`
  font-size: 1.25rem;
  font-weight: 900;
  color: #1f2937;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const PromoBoxOldPriceMobile = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #ef4444;
  text-decoration: line-through;
  margin: 0.25rem 0;
  text-align: center;
`;

const PromoBoxNewPriceMobile = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
  color: #059669;
  text-align: center;
  margin: 0.25rem 0;
`;

const PromoBoxCashPriceMobile = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #6b7280;
  margin: 0.25rem 0;
  text-align: center;
`;

const PromoButtonMobile = styled.button`
  display: block;
  width: 100%;
  background: #059669;
  color: white;
  font-size: 1.125rem;
  font-weight: bold;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #047857;
  }
`;

const SecuritySealsMobile = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const SecurityItemMobile = styled.div`
  display: flex;
  align-items: center;
  color: #4b5563;
  font-size: 0.875rem;
  gap: 0.25rem;
`;

const SecurityIconMobile = styled.div`
  width: 1rem;
  height: 1rem;
  color: #059669;
`;

const Separator = styled.div`
  width: 100%;
  border-top: 1px solid #e5e7eb;
`;

const AttentionSection = styled.section`
  width: 100%;
  padding: 2rem 0;
  background: #fef2f2;
`;

const AttentionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const AttentionBanner = styled.div`
  background: #fff;
  border: 2px solid #fecaca;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const AttentionTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 900;
  color: #dc2626;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const AttentionText = styled.p`
  color: #374151;
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AttentionIcon = styled.span`
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const GuaranteeSection = styled.section`
  background: white;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const GuaranteeContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 450px;
  gap: 40px;
  align-items: center;
  
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

const GuaranteeContent = styled.div`
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

const GuaranteeTitle = styled.h2`
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

const GuaranteeDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #555;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const GuaranteeCTAButton = styled.button`
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
  box-shadow: 0 8px 20px rgba(22, 101, 52, 0.4);
  
  &:hover {
    background: linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%);
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(22, 101, 52, 0.6);
  }
  
  @media (max-width: 768px) {
    padding: 16px 35px;
    font-size: 1.1rem;
  }
`;

const GuaranteeBadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const GuaranteeBadge = styled.div`
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



const RemarketingPage = () => {

  const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const scrollToKits = () => {
    // Redirecionar para o link de compra principal com UTMs preservados
    const finalUrl = addUtmToUrl('https://full.sale/B4EEqt?src=remarketing-1');
    window.open(finalUrl, '_blank');
  };

  const scrollToKitsSmooth = () => {
    // Redirecionar para o link de compra principal com UTMs preservados
    const finalUrl = addUtmToUrl('https://full.sale/B4EEqt?src=remarketing-1');
    window.open(finalUrl, '_blank');
  };

  // Função para capturar parâmetros UTM da URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');
    const utmContent = urlParams.get('utm_content');
    const utmTerm = urlParams.get('utm_term');

    // Armazenar parâmetros UTM no localStorage para uso posterior
    if (utmSource) localStorage.setItem('utm_source', utmSource);
    if (utmMedium) localStorage.setItem('utm_medium', utmMedium);
    if (utmCampaign) localStorage.setItem('utm_campaign', utmCampaign);
    if (utmContent) localStorage.setItem('utm_content', utmContent);
    if (utmTerm) localStorage.setItem('utm_term', utmTerm);
  }, []);

  // Definir título da página
  useEffect(() => {
    document.title = 'BIOCAPILAR - RMKT 1 - Emagrecimento Natural e Eficaz';
  }, []);

  // Função para adicionar UTMs aos links de compra
  const addUtmToUrl = (baseUrl) => {
    const utmSource = localStorage.getItem('utm_source');
    const utmMedium = localStorage.getItem('utm_medium');
    const utmCampaign = localStorage.getItem('utm_campaign');
    const utmContent = localStorage.getItem('utm_content');
    const utmTerm = localStorage.getItem('utm_term');

    const url = new URL(baseUrl);

    if (utmSource) url.searchParams.append('utm_source', utmSource);
    if (utmMedium) url.searchParams.append('utm_medium', utmMedium);
    if (utmCampaign) url.searchParams.append('utm_campaign', utmCampaign);
    if (utmContent) url.searchParams.append('utm_content', utmContent);
    if (utmTerm) url.searchParams.append('utm_term', utmTerm);

    return url.toString();
  };



  return (
    <>
    <RemarketingContainer>
      {/* Header */}
      <Header>
        <HeaderContent>
          <LogoContainer>
            <Logo src="/logo-biocapilar.png" alt="Biocapilar" />
          </LogoContainer>
          <div>
            <HeaderButton onClick={scrollToKits}>
              Comprar Agora
            </HeaderButton>
          </div>
        </HeaderContent>
      </Header>

      {/* Seção de Limite de Compra */}
      <LimitSection>
        <LimitContent>
          <LimitInner>
            <LimitBadge>
              <LimitTitle>
                LIMITADO A UMA COMPRA POR CLIENTE
              </LimitTitle>
            </LimitBadge>
            <LimitText>
              Devido a grande demanda de pedidos, a partir de hoje {getCurrentDate()}, 
              nós temos um estoque limitado e pronto para envio em 24horas.
            </LimitText>
            <PaymentInfo>
              <PaymentLabel>FORMAS DE PAGAMENTO:</PaymentLabel>
              <PaymentMethods>
                <PaymentIcon src="/visa.png" alt="Visa" />
                <PaymentIcon src="/master.png" alt="Mastercard" />
                <PaymentIcon src="/hiper.png" alt="Hipercard" />
                <PaymentIcon src="/pix.png" alt="PIX" />
              </PaymentMethods>
            </PaymentInfo>
          </LimitInner>
        </LimitContent>
      </LimitSection>

      {/* Seção Promocional Desktop */}
      <PromoSection className="desktop-only">
        <PromoDesktop>
          <PromoGrid>
            {/* Coluna da Imagem */}
            <PromoImageContainer>
              <PromoImage
                src="/promo.png"
                alt="Phynamax - Pote Extra Grátis"
                width={450}
                height={450}
              />
            </PromoImageContainer>

            {/* Coluna do Conteúdo */}
            <PromoContent>
              <PromoTitle>
                RECEBA 1 POTE EXTRA
              </PromoTitle>
              <PromoSubtitle>
                GRÁTIS
              </PromoSubtitle>

              <PromoText>
                Na compra do kit de 3 frascos de Biocapilar você receberá GRATUITAMENTE 
                um pote extra para potencializar seus resultados.
              </PromoText>

              <PromoBox>
                <PromoBoxTitle>
                  VOCÊ LEVA UM POTE EXTRA
                </PromoBoxTitle>
                <PromoBoxPrice>
                  <PromoBoxOldPrice style={{textDecoration: 'line-through'}}>
                    De R$589,00
                  </PromoBoxOldPrice>
                  <PromoBoxNewPrice>
                    12x R$32,03
                  </PromoBoxNewPrice>
                  <PromoBoxCashPrice>
                    ou R$319,00 à vista
                  </PromoBoxCashPrice>
                </PromoBoxPrice>
              </PromoBox>

              <div style={{textAlign: 'center'}}>
                <PromoButton onClick={scrollToKits}>
                  APROVEITAR OFERTA AGORA
                </PromoButton>

                <SecuritySeals>
                  <SecurityItem>
                    <SecurityIcon>🔒</SecurityIcon>
                    <SecurityText>Compra Segura</SecurityText>
                  </SecurityItem>
                  <SecurityItem>
                    <SecurityIcon>✓</SecurityIcon>
                    <SecurityText>Site Oficial</SecurityText>
                  </SecurityItem>
                </SecuritySeals>
              </div>
            </PromoContent>
          </PromoGrid>
        </PromoDesktop>
      </PromoSection>

      {/* Seção Promocional Mobile */}
      <PromoSection className="mobile-only">
        <PromoMobile>
          <PromoCard>
            <PromoImageMobile>
              <img
                src="/promo.png"
                alt="Phynamax - Pote Extra Grátis"
                style={{
                  width: '100%',
                  maxWidth: '280px',
                  height: 'auto',
                  margin: '0 auto',
                  display: 'block',
                  objectFit: 'contain'
                }}
              />
            </PromoImageMobile>

            <PromoTitleMobile>
              RECEBA 1 POTE EXTRA
            </PromoTitleMobile>
            <PromoSubtitleMobile>
              GRÁTIS
            </PromoSubtitleMobile>

            <PromoTextMobile>
              Na compra do kit de 3 frascos de Biocapilar você receberá GRATUITAMENTE 
              um pote extra para potencializar seus resultados com mais um mês de 
              tratamento.
            </PromoTextMobile>

            <PromoBoxMobile>
              <PromoBoxTitleMobile>
                VOCÊ LEVA UM POTE EXTRA
              </PromoBoxTitleMobile>
              <PromoBoxOldPriceMobile style={{textDecoration: 'line-through'}}>
                De R$589,00
              </PromoBoxOldPriceMobile>
              <PromoBoxNewPriceMobile>
                12x R$32,03
              </PromoBoxNewPriceMobile>
              <PromoBoxCashPriceMobile>
                ou R$319,00 à vista
              </PromoBoxCashPriceMobile>
            </PromoBoxMobile>

            <div style={{textAlign: 'center'}}>
              <PromoButtonMobile onClick={scrollToKits}>
                APROVEITAR OFERTA AGORA
              </PromoButtonMobile>

              <SecuritySealsMobile>
                <SecurityItemMobile>
                  <SecurityIconMobile>🔒</SecurityIconMobile>
                  Compra Segura
                </SecurityItemMobile>
                <SecurityItemMobile>
                  <SecurityIconMobile>✓</SecurityIconMobile>
                  Site Oficial
                </SecurityItemMobile>
              </SecuritySealsMobile>
            </div>
          </PromoCard>
        </PromoMobile>
      </PromoSection>

      <Separator />

      {/* Seção de Atenção */}
      <AttentionSection>
        <AttentionContainer>
          <AttentionBanner>
            <AttentionTitle>
              <AttentionIcon>⚠️</AttentionIcon>
              ATENÇÃO: OFERTA POR TEMPO LIMITADO
            </AttentionTitle>
            <AttentionText>
              Esta promoção especial é válida apenas para os primeiros <strong>100 pedidos</strong> do dia. Não perca esta 
              oportunidade única de receber um pote extra totalmente grátis!
            </AttentionText>
          </AttentionBanner>
        </AttentionContainer>
      </AttentionSection>

      {/* Seção de Garantia */}
      <GuaranteeSection>
        <GuaranteeContainer>
          <GuaranteeContent>
            <div className="text-content">
              <GuaranteeTitle>
                30 dias de garantia incondicional<br />
                <span className="highlight">Se você não gostar, pode devolver</span>
              </GuaranteeTitle>
              
              <GuaranteeDescription>
                Com a nossa Garantia de Satisfação de 30 Dias, você pode experimentar o  Biocapilar sem nenhum risco. Teste, sinta a diferença e, se por qualquer motivo não estiver completamente satisfeito, é só entrar em contato com nossa equipe de atendimento, que está pronta para ajudar. Envie um simples e-mail dentro de 30 dias, e nós reembolsaremos 100% do valor pago — sem complicações, sem perguntas. É assim que confiamos no poder do Biocapilar que já ajudou mais de 163 mil pessoas em todo o Brasil! Conforme nossos termos de garantia*
              </GuaranteeDescription>
            </div>
            
            <div className="mobile-image">
              <div style={{ width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                                src="/garantia-biocapilar.png"
              alt="30 Dias de Garantia Incondicional Phynamax - 100% Satisfação Garantida ou Dinheiro de Volta" 
                  style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
                />
              </div>
            </div>
            
            <GuaranteeCTAButton onClick={scrollToKitsSmooth}>
              EU QUERO O BIOCAPILAR
            </GuaranteeCTAButton>
          </GuaranteeContent>
          
          <GuaranteeBadgeContainer>
            <GuaranteeBadge>
              <img src="/garantia-biocapilar.png" alt="30 Dias de Garantia" />
            </GuaranteeBadge>
          </GuaranteeBadgeContainer>
        </GuaranteeContainer>
      </GuaranteeSection>

    </RemarketingContainer>

    {/* Rodapé Fullscreen */}
    <Footer />
    </>
  );
};

export default RemarketingPage; 