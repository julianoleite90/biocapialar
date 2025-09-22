import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BiocapilarFunciona: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Carousel navigation
  const navigateCarousel = (direction: number) => {
    const newSlide = currentSlide + direction;
    if (newSlide >= 0 && newSlide <= 5) {
      setCurrentSlide(newSlide);
    }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Image modal
  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage('');
  };

  // Scroll to kits function - redirects to main page
  const scrollToKits = () => {
    window.location.href = '/#kits';
  };

  // Update document title for SEO
  useEffect(() => {
    document.title = "Biocapilar funciona mesmo? Saiba tudo sobre o emagrecedor N1 do Brasil.";
  }, []);

  return (
    <div className="min-h-screen bg-white">
        {/* Header Section */}
      <header className="bg-pink-600 py-4 px-4 sm:px-6 lg:px-8">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/logo-biocapilar.png" 
              alt="Biocapilar Logo" 
              className="h-6 sm:h-8 lg:h-10 w-auto"
            />
          </div>
          <a href="https://rastreamento.correios.com.br/app/index.php" target="_blank" rel="noopener noreferrer nofollow" className="bg-white text-black hover:bg-gray-100 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs sm:text-sm lg:text-base inline-block">
            RASTREAR PEDIDO
          </a>
        </div>
      </header>

      {/* Hero Section - Biocapilar Funciona */}
      <section className="bg-gradient-to-br from-pink-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom text-center">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal text-gray-900 leading-tight mb-6">
            <span className="font-black text-pink-600">PHYNAMAX FUNCIONA MESMO?</span><br />
            <span className="text-lg sm:text-xl lg:text-2xl text-gray-700">SAIBA TUDO SOBRE O EMAGRECEDOR N1 DO BRASIL</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Biocapilar é a fórmula para emagrecer mais usada em 2024 e 2025, sendo recomendada por especialistas e aprovadas pela legislação.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl text-pink-600 mb-2">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Resultados Comprovados</h3>
              <p className="text-gray-600">Milhares de pessoas já perderam peso com Biocapilar</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl text-pink-600 mb-2">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ação Rápida</h3>
              <p className="text-gray-600">Resultados visíveis em poucas semanas</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl text-pink-600 mb-2">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Seguro</h3>
              <p className="text-gray-600">Aprovado pela ANVISA e especialistas</p>
            </div>
          </div>

          <button 
            onClick={scrollToKits}
            className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-bold py-4 px-8 rounded-xl text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            QUERO SABER TUDO SOBRE PHYNAMAX!
          </button>
        </div>
      </section>

      {/* Por que Biocapilar Funciona Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wide text-center text-gray-900 mb-12">
            <span className="text-pink-600">POR QUE PHYNAMAX FUNCIONA?</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-black mb-6">
                A Ciência Por Trás do Sucesso
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">6 bioativos naturais que aceleram o metabolismo</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">Controle natural do apetite e da ansiedade</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">Queima de gordura localizada e teimosa</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">Aumento da energia e disposição</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/formula1.png" 
                alt="Fórmula Biocapilar - Como Funciona" 
                className="w-full max-w-[280px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos em Carrossel */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wide text-center text-gray-900 mb-12">
            <span className="text-pink-600">PHYNAMAX FUNCIONA!</span><br />
            <span className="text-lg sm:text-xl lg:text-2xl text-gray-700">VEJA OS RESULTADOS REAIS</span>
          </h2>

          <div className="relative max-w-6xl mx-auto">
            <div className="flex overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out w-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {[
                  { image: "/11.png", name: "Gabriela Oliveira", age: "31 anos", weight: "-25kg", city: "Brasília - DF" },
                  { image: "/13.png", name: "Bruno Rodrigues", age: "43 anos", weight: "-28kg", city: "Fortaleza - CE" },
                  { image: "/14.png", name: "Priscila Santos", age: "30 anos", weight: "-24kg", city: "Goiânia - GO" },
                  { image: "/10.png", name: "Isabela Lima", age: "29 anos", weight: "-16kg", city: "Florianópolis - SC" },
                  { image: "/12.png", name: "Juliana Mendes", age: "27 anos", weight: "-19kg", city: "Curitiba - PR" },
                  { image: "/15.png", name: "Rafaela Fernandes", age: "26 anos", weight: "-18kg", city: "Manaus - AM" }
                ].map((item, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2">
                    <img 
                      src={item.image} 
                      alt={`Resultado Biocapilar - ${item.name}`}
                      className="w-full h-80 object-contain rounded-lg mx-auto"
                    />
                    <div className="text-center mt-3">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.name} | {item.age} | {item.weight}
                      </h3>
                      <p className="text-base text-gray-600">
                        {item.city}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-colors duration-200 z-10"
              onClick={() => navigateCarousel(-1)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-colors duration-200 z-10"
              onClick={() => navigateCarousel(1)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2, 3, 4, 5].map((dot) => (
                <button
                  key={dot}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    dot === currentSlide ? 'bg-pink-600' : 'bg-gray-300'
                  }`}
                  onClick={() => goToSlide(dot)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Instagram */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wide text-center text-gray-900 mb-12">
            <span className="text-pink-600">PHYNAMAX FUNCIONA</span><br />
            <span className="text-lg sm:text-xl lg:text-2xl text-gray-700">DEPOIMENTOS REAIS DO INSTAGRAM</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Post 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center p-3 border-b border-gray-100">
                <img src="/ig1.png" alt="Avatar Maria" className="w-8 h-8 rounded-full object-cover" />
                <div className="ml-3 flex-1">
                  <div className="font-semibold text-sm text-gray-900">maria_silva</div>
                  <div className="text-xs text-gray-500">São Paulo, SP</div>
                </div>
              </div>
              <div className="relative cursor-pointer group" onClick={() => openImageModal('/im-dep-1.png')}>
                <img src="/im-dep-1.png" alt="Resultado Biocapilar" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="bg-black/70 px-3 py-2 rounded-lg">
                      <span className="text-sm font-semibold">Clique para ampliar</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="text-sm font-semibold text-gray-900 mb-2">Curtido por <span className="text-blue-600">carla_emagreceu</span> e <span className="text-blue-600">outras 127 pessoas</span></div>
                <div className="text-sm text-gray-900 mb-2">
                  <span className="font-semibold">maria_silva</span> Finalmente consegui perder 18kg com Biocapilar! 🎉 
                  <br />Depois de 3 meses, minha autoestima mudou completamente! 
                  <br />#emagrecimento #phynamax #resultados #foco
                </div>
                <div className="text-xs text-gray-500">HÁ 3 DIAS</div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center p-3 border-b border-gray-100">
                <img src="/ig2.png" alt="Avatar Ana" className="w-8 h-8 rounded-full object-cover" />
                <div className="ml-3 flex-1">
                  <div className="font-semibold text-sm text-gray-900">ana_paula</div>
                  <div className="text-xs text-gray-500">Curitiba, PR</div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/antes3.png" 
                  alt="Depoimento Ana Paula"
                  className="w-full h-80 sm:h-96 lg:h-[28rem] object-cover"
                />
              </div>
              <div className="p-3">
                <div className="text-sm font-semibold text-gray-900 mb-2">Curtido por <span className="text-blue-600">maria_silva</span> e <span className="text-blue-600">outras 89 pessoas</span></div>
                <div className="text-sm text-gray-900 mb-2">
                  <span className="font-semibold">ana_paula</span> Treino pesado hoje! 💪 
                  <br />Com Biocapilar controlando o apetite, fica mais fácil manter o foco! 
                  <br />#treino #foco #phynamax #academia
                </div>
                <div className="text-xs text-gray-500">HÁ 1 SEMANA</div>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center p-3 border-b border-gray-100">
                <img src="/ig3.png" alt="Avatar Julia" className="w-8 h-8 rounded-full object-cover" />
                <div className="ml-3 flex-1">
                  <div className="font-semibold text-sm text-gray-900">julia_costa</div>
                  <div className="text-xs text-gray-500">Belo Horizonte, MG</div>
                </div>
              </div>
              <div className="relative cursor-pointer group" onClick={() => openImageModal('/im-3-dep.png')}>
                <img src="/im-3-dep.png" alt="Resultado Biocapilar" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="bg-black/70 px-3 py-2 rounded-lg">
                      <span className="text-sm font-semibold">Clique para ampliar</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="text-sm font-semibold text-gray-900 mb-2">Curtido por <span className="text-blue-600">carlos_lima</span> e <span className="text-blue-600">outras 203 pessoas</span></div>
                <div className="text-sm text-gray-900 mb-2">
                  <span className="font-semibold">julia_costa</span> Antes e depois! 😍 
                  <br />Biocapilar mudou minha vida! Perdi 22kg em 4 meses! 
                  <br />#antesedepois #phynamax #transformacao #feliz
                </div>
                <div className="text-xs text-gray-500">HÁ 2 SEMANAS</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={scrollToKits}
              className="w-full lg:w-auto bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-xl text-sm lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="text-center">
                <div className="text-base lg:text-xl">SIM, PHYNAMAX FUNCIONA!</div>
                <div className="text-xs lg:text-sm font-normal opacity-90 mt-1">
                  CLIQUE AQUI E GARANTA SEU KIT COM DESCONTO
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wide text-center text-gray-900 mb-12">
            <span className="text-pink-600">PERGUNTAS FREQUENTES</span><br />
            <span className="text-lg sm:text-xl lg:text-2xl text-gray-700">PHYNAMAX FUNCIONA?</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Biocapilar Funciona mesmo?</h3>
              <p className="text-gray-700">SIM! Biocapilar Funciona e já ajudou milhares de pessoas a emagrecerem. A fórmula é aprovada pela ANVISA e comprovada por especialistas.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Quanto tempo demora para Biocapilar Funcionar?</h3>
              <p className="text-gray-700">Os primeiros resultados do Biocapilar são visíveis em poucas semanas. Para efeito total e duradouro, recomendamos o tratamento de 3 a 5 meses.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Biocapilar Funciona para todos?</h3>
              <p className="text-gray-700">Biocapilar Funciona para a maioria das pessoas, pois é um produto natural aprovado pela ANVISA. Consulte um especialista se tiver dúvidas.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Biocapilar Funciona sem dieta?</h3>
              <p className="text-gray-700">Biocapilar Funciona melhor quando combinado com uma alimentação equilibrada e exercícios físicos regulares.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Biocapilar Funciona para queimar gordura localizada?</h3>
              <p className="text-gray-700">SIM! Biocapilar Funciona especificamente para queimar gordura localizada e teimosa, incluindo a gordura abdominal.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Biocapilar Funciona para controlar o apetite?</h3>
              <p className="text-gray-700">Exatamente! Biocapilar Funciona controlando naturalmente o apetite e a ansiedade, ajudando você a comer menos e com mais qualidade.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={scrollToKits}
              className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-bold py-4 px-8 rounded-xl text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              COMPROVAR QUE PHYNAMAX FUNCIONA!
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="text-center mb-8">
            <img 
              src="/logo-biocapilar.png" 
              alt="Biocapilar Logo" 
              className="h-8 sm:h-10 lg:h-12 w-auto mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="flex flex-wrap justify-center lg:justify-start space-x-4 lg:space-x-6">
                <Link href="/termos" className="hover:text-pink-200 transition-colors">Termos de Garantia</Link>
                <div className="hidden lg:block w-px bg-white h-4"></div>
                <a href="#" className="hover:text-pink-200 transition-colors">Perguntas Frequentes</a>
                <div className="hidden lg:block w-px bg-white h-4"></div>
                <a href="#" className="hover:text-pink-200 transition-colors">Política de Privacidade</a>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="text-lg font-bold mb-3">Informações da Empresa</h3>
                <p className="text-sm text-gray-200 mb-2">
                  Distribuído por: Convertex Comércio de Produtos Alimentares Ltda
                </p>
                <p className="text-sm text-gray-200">
                  Endereço: Florianópolis, SC - Sapiens Parque
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-bold mb-3">Formas de Pagamento</h3>
                <div className="flex justify-center lg:justify-start mb-3">
                  <img 
                    src="/cartoes.webp" 
                    alt="Formas de Pagamento" 
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <p className="text-sm text-gray-200 mb-2">
                  Parcelamento em até 12x | Pix com desconto especial
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mb-8"></div>

          <div className="text-center space-y-2">
            <p className="text-sm">
              Copyright © 2025 Biocapilar. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-200">
              Convertex Comércio de Produtos Alimentares Ltda - Florianópolis, Santa Catarina
            </p>
            <p className="text-xs text-gray-300">
              *Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/5541984549172?text=${encodeURIComponent('Olá! Estava na página "Biocapilar Funciona" e gostaria de ajuda para escolher o meu tratamento.')}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          aria-label="Fale com o suporte via WhatsApp"
        >
          <svg 
            className="w-6 h-6" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Resultado Biocapilar" 
              className="w-full h-auto max-h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={closeImageModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
                 </div>
       )}
     </div>
   );
 };

export default BiocapilarFunciona;
