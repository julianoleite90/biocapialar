export default function Footer() {
  return (
    <footer className="text-white py-12" style={{
    background: 'linear-gradient(135deg, #020617 0%, #0f172a 25%, #1e293b 50%, #0f172a 75%, #020617 100%)'
  }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo e descrição principal */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src="/logo-phynamax.png" 
              alt="Definamax" 
              className="h-8 w-auto"
            />
          </div>
          <p className="text-pink-100 max-w-4xl mx-auto leading-relaxed">
            Phynamax - Auxiliou mais de 63 mil pessoas a perder peso em todo o Brasil.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="text-center mb-8">
          <p className="text-pink-100 text-sm max-w-4xl mx-auto leading-relaxed">
            *Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8 text-sm">
          <a href="https://www.definamaxoficial.com/termos" className="text-pink-100 hover:text-white transition-colors">
            Termos de Garantia
          </a>
          <span className="text-pink-300">|</span>
          <a href="#" className="text-pink-100 hover:text-white transition-colors">
            Perguntas Frequentes
          </a>
          <span className="text-pink-300">|</span>
          <a href="#" className="text-pink-100 hover:text-white transition-colors">
            Política de Privacidade
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-pink-600 pt-6">
          <p className="text-pink-100 text-sm mb-2">
            Copyright © 2025 Phynamax. Todos os direitos reservados.
          </p>
          <p className="text-pink-200 text-sm">
            Bourjan Nature Health, Florianópolis Santa Catarina
          </p>
        </div>
      </div>
    </footer>
  )
} 