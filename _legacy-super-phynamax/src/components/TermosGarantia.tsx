import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermosGarantia: React.FC = () => {
  const navigate = useNavigate();
  
  const voltarParaKits = () => {
    navigate('/');
    // Aguarda a navegação e depois rola para a seção de kits
    setTimeout(() => {
      const element = document.getElementById('kits');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="py-4 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#173b6b' }}>
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

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="container-custom max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Termos de Garantia
            </h1>
            <p className="text-lg text-gray-600">
              Conheça os detalhes sobre nossa política de garantia e devolução
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Section 1: Compromisso */}
            <div className="bg-blue-50 rounded-xl p-6 lg:p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#173b6b' }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    Compromisso com sua satisfação
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Na Biocapilar, acreditamos que a confiança de nossos clientes é nosso maior patrimônio. Por isso, oferecemos uma política de garantia transparente e justa, que assegura sua total satisfação com nossos produtos. Nosso compromisso vai além do que determina a legislação, pois queremos que você tenha a melhor experiência possível.
                    </p>
                    <p>
                      Abaixo, detalhamos todas as informações sobre nossas garantias, procedimentos de devolução e reembolso. Caso tenha qualquer dúvida após a leitura, nossa equipe de atendimento está à disposição para ajudá-lo através dos nossos canais de contato.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Garantia de Arrependimento */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#173b6b' }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    Garantia de Arrependimento
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    De acordo com o Código de Defesa do Consumidor (Lei nº 8.078/90), o cliente tem o direito de solicitar o cancelamento da compra em até 7 (sete) dias corridos a partir da data de recebimento do produto. Este direito está previsto no artigo 49 do CDC, que estabelece o direito de arrependimento para compras realizadas fora do estabelecimento comercial, como é o caso de compras online.
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Base Legal:</strong> Art. 49 do CDC - "O consumidor pode desistir do contrato, no prazo de 7 dias a contar de sua assinatura ou do ato de recebimento do produto ou serviço, sempre que a contratação de fornecimento de produtos e serviços ocorrer fora do estabelecimento comercial, especialmente por telefone ou a domicílio."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Garantia de Satisfação */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#173b6b' }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    Garantia de Satisfação
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Além da garantia legal, oferecemos uma garantia de satisfação de 30 (trinta) dias após a compra, válida exclusivamente para compras de 1 (um) frasco. Esta garantia representa nosso compromisso com a qualidade do produto e a satisfação dos nossos clientes.
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-bold text-blue-700 mb-4">Como solicitar a garantia de satisfação:</h3>
                    <ol className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <span className="w-6 h-6 text-white text-sm font-bold rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#173b6b' }}>1</span>
                        <span className="text-gray-700">Envie um e-mail para contato@biocapilar.com com o assunto: "Garantia de satisfação"</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-6 h-6 text-white text-sm font-bold rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#173b6b' }}>2</span>
                        <span className="text-gray-700">Anexe a nota fiscal do produto</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-6 h-6 text-white text-sm font-bold rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#173b6b' }}>3</span>
                        <span className="text-gray-700">Informe o motivo da insatisfação (opcional, mas recomendado)</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-6 h-6 text-white text-sm font-bold rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#173b6b' }}>4</span>
                        <span className="text-gray-700">Aguarde o retorno da nossa equipe em até 48 horas úteis</span>
                      </li>
                    </ol>
                  </div>
                  
                  <p className="text-gray-700 mt-4 text-sm">
                    <strong>Observação:</strong> A garantia de satisfação é um benefício adicional oferecido pela empresa, não substituindo as garantias legais previstas no Código de Defesa do Consumidor.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Trocas por Defeitos */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#173b6b' }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    Trocas por Defeitos ou Vícios
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Trocas por defeitos ou vícios no produto são realizadas sem custo adicional para o cliente, conforme previsto no Código de Defesa do Consumidor. Caso o produto apresente qualquer problema de fabricação, embalagem danificada ou qualquer outro vício que comprometa sua qualidade ou eficácia, o cliente tem direito à substituição do produto.
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-bold text-blue-700 mb-4">Procedimento para solicitação de troca:</h3>
                    <ol className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <span className="w-6 h-6 text-white text-sm font-bold rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#173b6b' }}>1</span>
                        <span className="text-gray-700">Entre em contato com nosso SAC pelo e-mail contato@biocapilar.com com o assunto: "Solicitação de troca por defeito"</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-6 h-6 text-white text-sm font-bold rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#173b6b' }}>2</span>
                        <span className="text-gray-700">Anexe fotos do produto com o defeito ou vício identificado</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-6 h-6 text-white text-sm font-bold rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#173b6b' }}>3</span>
                        <span className="text-gray-700">Anexe a nota fiscal de compra</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-6 h-6 text-white text-sm font-bold rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#173b6b' }}>4</span>
                        <span className="text-gray-700">Nossa equipe analisará o caso e retornará com as instruções para a troca</span>
                      </li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-700">
                      <strong>Base Legal:</strong> Art. 18 do CDC - "Os fornecedores de produtos de consumo duráveis ou não duráveis respondem solidariamente pelos vícios de qualidade ou quantidade que os tornem impróprios ou inadequados ao consumo a que se destinam ou lhes diminuam o valor, assim como por aqueles decorrentes da disparidade, com as indicações constantes do recipiente, da embalagem, rotulagem ou mensagem publicitária, respeitadas as variações decorrentes de sua natureza, podendo o consumidor exigir a substituição das partes viciadas."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Condições Gerais */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#173b6b' }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                    Condições Gerais
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">1. Prazo para Análise:</h3>
                      <p className="text-gray-700">Todas as solicitações de garantia, devolução ou troca serão analisadas em até 5 (cinco) dias úteis após o recebimento da solicitação completa com todos os documentos necessários.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">2. Reembolso:</h3>
                      <p className="text-gray-700">Em caso de devolução aprovada, o reembolso será processado em até 10 (dez) dias úteis, na mesma forma de pagamento utilizada na compra, conforme previsto no artigo 49, parágrafo único, do CDC. O reembolso será realizado exclusivamente no CPF correspondente à compra realizada e o método de reembolso será obrigatoriamente o mesmo utilizado para o pagamento original (cartão de crédito, boleto, PIX, etc.).</p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">3. Estado do Produto:</h3>
                      <p className="text-gray-700">Para exercer o direito de arrependimento ou a garantia de satisfação, o produto deve estar em condições adequadas, preferencialmente na embalagem original, com todos os acessórios e componentes recebidos.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">4. Frete de Devolução:</h3>
                      <p className="text-gray-700">Em casos de arrependimento (7 dias) ou garantia de satisfação (30 dias), o custo do frete de devolução será por conta da empresa. Em casos de troca por defeito, tanto o frete de devolução quanto o de envio do novo produto serão por conta da empresa.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">5. Limitações:</h3>
                      <p className="text-gray-700">A garantia de satisfação de 30 dias é válida apenas para a compra de 1 (um) frasco. Para compras de kits promocionais (3 ou 6 frascos), aplica-se apenas a garantia legal de 7 dias prevista no CDC.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">6. Documentação Necessária:</h3>
                      <p className="text-gray-700">Para qualquer solicitação de garantia, é imprescindível a apresentação da nota fiscal de compra. Solicitações sem este documento poderão ser recusadas.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">7. Casos Omissos:</h3>
                      <p className="text-gray-700">Situações não previstas nestes termos serão analisadas individualmente pela equipe jurídica da empresa, sempre em conformidade com a legislação vigente e buscando a melhor solução para o cliente.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Disposições Finais */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border-l-4" style={{ borderLeftColor: '#173b6b' }}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#173b6b' }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                    Disposições Finais
                  </h2>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Os presentes Termos de Garantia estão em conformidade com o Código de Defesa do Consumidor (Lei nº 8.078/90) e demais legislações aplicáveis. A empresa se reserva o direito de alterar estes termos a qualquer momento, sendo as alterações aplicáveis apenas para compras realizadas após a data de modificação.
                    </p>
                    
                    <p>
                      Ao realizar uma compra em nosso site, o cliente declara estar ciente e de acordo com todos os termos e condições aqui estabelecidos. Recomendamos a leitura integral deste documento antes de finalizar qualquer compra.
                    </p>
                    
                    <p>
                      Para esclarecimentos adicionais ou dúvidas sobre nossa política de garantia, entre em contato com nosso Serviço de Atendimento ao Cliente através do e-mail contato@biocapilar.com ou pelo telefone (41) 98454-9172, de segunda a sexta-feira, das 9h às 18h.
                    </p>
                    
                    <p className="text-sm text-gray-600 pt-4">
                      Última atualização: 10/07/2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button 
              onClick={voltarParaKits}
              className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              VOLTAR PARA OS KITS
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#173b6b' }}>
        <div className="container-custom">
          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src="/logo-biocapilar.png" 
              alt="Biocapilar Logo" 
              className="h-8 sm:h-10 lg:h-12 w-auto mx-auto"
            />
          </div>

          {/* 2 Colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Coluna Esquerda */}
            <div className="space-y-6">
              {/* Navegação */}
              <div className="flex flex-wrap justify-center lg:justify-start space-x-4 lg:space-x-6">
                <a href="#" className="hover:text-blue-200 transition-colors">Termos de Uso</a>
                <div className="hidden lg:block w-px bg-white h-4"></div>
                <a href="#" className="hover:text-blue-200 transition-colors">Perguntas Frequentes</a>
                <div className="hidden lg:block w-px bg-white h-4"></div>
                <a href="#" className="hover:text-blue-200 transition-colors">Política de Privacidade</a>
              </div>

              {/* Informações da Empresa */}
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-bold mb-3">Informações da Empresa</h3>
                <p className="text-sm text-gray-200 mb-2">
                  B Nature Health Ltda
                </p>
                <p className="text-sm text-gray-200 mb-2">
                  Número de Cnae: G-4729699
                </p>
                <p className="text-sm text-gray-200">
                  Endereço:<br />
                  Av. Luiz Boiteux Piazza, Florianópolis, Santa Catarina, Brasil.
                </p>
              </div>
            </div>

            {/* Coluna Direita */}
            <div className="space-y-6">
              {/* Formas de Pagamento */}
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-bold mb-3">Formas de Pagamento</h3>
                
                {/* Logos dos Cartões */}
                <div className="flex justify-center lg:justify-start mb-3">
                  <img 
                    src="/cartoes.webp" 
                    alt="Formas de Pagamento" 
                    className="h-16 w-auto object-contain"
                  />
                </div>

                {/* Texto de Pagamento */}
                <p className="text-sm text-gray-200 mb-2">
                  Parcelamento em até 12x | Pix com desconto especial
                </p>
                <p className="text-xs text-gray-300">
                  *Compras parceladas podem incluir taxas de parcelamento cobrada pela plataforma que gerencia os pagamentos
                </p>
              </div>
            </div>
          </div>

          {/* Linha Separadora */}
          <div className="border-t border-white/20 mb-8"></div>

          {/* Copyright e Informações Finais - Centralizado */}
          <div className="text-center space-y-2">
            <p className="text-sm">
              Copyright © 2025 Biocapilar. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-300">
              *Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default TermosGarantia;
