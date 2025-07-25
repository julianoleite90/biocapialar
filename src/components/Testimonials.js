import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsSection = styled.section`
  padding: var(--section-padding);
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--container-padding);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 20px;
  letter-spacing: -1px;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
`;

const TestimonialCard = styled(motion.div)`
  background: var(--light-gray);
  padding: 40px 30px;
  border-radius: var(--border-radius-large);
  position: relative;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-medium);
  }
  
  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 30px;
    font-size: 5rem;
    color: var(--primary-color);
    font-weight: bold;
    line-height: 1;
  }
`;

const TestimonialText = styled.p`
  color: var(--text-dark);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 25px;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 5px;
`;

const AuthorDetails = styled.div`
  font-size: 0.9rem;
  color: var(--text-light);
`;

const ResultHighlight = styled.span`
  color: var(--primary-color);
  font-weight: bold;
`;

const testimonials = [
  {
    text: "Perdi 19kg em 3 meses! Nunca imaginei que pudesse ser tão fácil. O PHYNAMAX mudou completamente minha relação com a comida e meu corpo.",
    author: "Beatriz Almeida",
    details: "Perdeu 19kg em 3 meses",
    avatar: "B"
  },
  {
    text: "Finalmente encontrei algo que funciona! Já tentei várias dietas e nada dava certo. Com o PHYNAMAX consegui resultados incríveis em 45 dias.",
    author: "Ricardo Souza",
    details: "Perdeu 16kg em 45 dias",
    avatar: "R"
  },
  {
    text: "Além de emagrecer, me sinto muito mais disposta e com energia. Minha autoestima voltou e agora me sinto confiante novamente!",
    author: "Gabriela Mendes",
    details: "Perdeu 21kg em 4 meses",
    avatar: "G"
  },
  {
    text: "O método é simples e fácil de seguir. Não passei fome e ainda assim perdi todo o peso que queria. Recomendo para todos!",
    author: "Carlos Ribeiro",
    details: "Perdeu 14kg em 2 meses",
    avatar: "C"
  },
  {
    text: "Estava desesperada para emagrecer para meu casamento. O PHYNAMAX me salvou! Consegui chegar ao meu peso ideal a tempo.",
    author: "Juliana Martins",
    details: "Perdeu 23kg em 5 meses",
    avatar: "J"
  },
  {
    text: "Resultados surpreendentes! Em apenas 4 semanas já estava vendo diferença no espelho. Agora uso roupas que não usava há anos.",
    author: "André Tavares",
    details: "Perdeu 12kg em 4 semanas",
    avatar: "A"
  }
];

const Testimonials = () => {
  return (
    <TestimonialsSection id="depoimentos">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            O Que Nossos Clientes Dizem
          </SectionTitle>
          
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Mais de 45 mil pessoas já transformaram suas vidas com o DEFINAMAX
          </SectionSubtitle>
        </SectionHeader>
        
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialText>{testimonial.text}</TestimonialText>
              
              <TestimonialAuthor>
                <AuthorAvatar>{testimonial.avatar}</AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorDetails>
                    <ResultHighlight>{testimonial.details}</ResultHighlight>
                  </AuthorDetails>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials; 