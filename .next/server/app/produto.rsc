2:I[9107,[],"ClientPageRoot"]
3:I[5654,["847","static/chunks/847-73ce1d0503081aee.js","648","static/chunks/648-81d974b4ce59d950.js","240","static/chunks/app/produto/page-4f892b593eec03b3.js"],"default",1]
4:I[4707,[],""]
5:I[6423,[],""]
7:I[1195,["667","static/chunks/667-0e9ce0520c411a2c.js","185","static/chunks/app/layout-48b9b0831a5e20aa.js"],"default"]
8:I[9288,["667","static/chunks/667-0e9ce0520c411a2c.js","185","static/chunks/app/layout-48b9b0831a5e20aa.js"],"default"]
9:I[8003,["667","static/chunks/667-0e9ce0520c411a2c.js","185","static/chunks/app/layout-48b9b0831a5e20aa.js"],""]
6:T491,{"@context":"https://schema.org","@type":"Product","name":"Definamax","description":"Suplemento natural para emagrecimento saudável e eficaz","image":["https://www.definamaxoficial.com/mockup2.png","https://www.definamaxoficial.com/opengraph-image.jpg"],"brand":{"@type":"Brand","name":"Definamax"},"offers":{"@type":"AggregateOffer","lowPrice":"279.90","highPrice":"479.40","priceCurrency":"BRL","availability":"https://schema.org/InStock","offerCount":"3","seller":{"@type":"Organization","name":"Definamax"},"priceValidUntil":"2025-12-31"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","bestRating":"5","worstRating":"1","reviewCount":"3842"},"review":[{"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"Mariana C."},"datePublished":"2025-05-05","reviewBody":"Perdi 8kg em 2 meses com o Definamax. Realmente funciona!"},{"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"Lucas M."},"datePublished":"2025-04-28","reviewBody":"Em 3 meses, perdi 9kg e agora consigo jogar uma pelada sem passar vergonha."}]}a:T953,
            function getUTMParameters() {
              const urlParams = new URLSearchParams(window.location.search);
              const utmParams = ['source', 'medium', 'campaign', 'term', 'content'];
              const params = {};
              
              utmParams.forEach(param => {
                const value = urlParams.get('utm_' + param);
                if (value) {
                  params['utm_' + param] = value;
                  localStorage.setItem('utm_' + param, value);
                }
              });
              
              return params;
            }

            function getStoredUTMs() {
              const utmParams = ['source', 'medium', 'campaign', 'term', 'content'];
              const params = {};
              
              utmParams.forEach(param => {
                const value = localStorage.getItem('utm_' + param);
                if (value) params['utm_' + param] = value;
              });
              
              return params;
            }

            function attachUTMsToLinks() {
              const urlUTMs = getUTMParameters();
              const storedUTMs = getStoredUTMs();
              const utmParams = { ...storedUTMs, ...urlUTMs };
              
              if (Object.keys(utmParams).length === 0) return;

              document.querySelectorAll('a[href*="full.sale"]').forEach(link => {
                try {
                  const url = new URL(link.href);
                  Object.entries(utmParams).forEach(([key, value]) => {
                    url.searchParams.set(key, value);
                  });
                  link.href = url.toString();
                } catch (e) {
                  console.error('Error updating UTMs for link:', link.href);
                }
              });
            }

            // Attach UTMs on page load
            window.addEventListener('load', attachUTMsToLinks);
            
            // Reattach UTMs when new elements are added to the DOM
            const observer = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                  attachUTMsToLinks();
                }
              });
            });

            observer.observe(document.body, {
              childList: true,
              subtree: true
            });
          0:["TPn8kD0qJAs7oxf4J2-kW",[[["",{"children":["produto",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",{"children":["produto",{"children":["__PAGE__",{},[["$L1",["$","$L2",null,{"props":{"params":{},"searchParams":{}},"Component":"$3"}],null],null],null]},[[null,["$","html",null,{"lang":"pt-BR","children":[["$","head",null,{"children":[["$","script",null,{"dangerouslySetInnerHTML":{"__html":"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','G-RTEPB48RDY');"}}],["$","script",null,{"async":true,"src":"https://www.googletagmanager.com/gtag/js?id=G-RTEPB48RDY"}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'G-RTEPB48RDY');\n            "}}]]}],["$","body",null,{"className":"__className_f367f3","children":[["$","noscript",null,{"children":["$","iframe",null,{"src":"https://www.googletagmanager.com/ns.html?id=G-RTEPB48RDY","height":"0","width":"0","style":{"display":"none","visibility":"hidden"}}]}],["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children","produto","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined"}]]}]]}]],null],null]},[[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/8cd184f5c326001b.css","precedence":"next","crossOrigin":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/css/7cca8e2c5137bd71.css","precedence":"next","crossOrigin":"$undefined"}]],["$","html",null,{"lang":"pt-BR","children":[["$","head",null,{"children":[["$","meta",null,{"name":"format-detection","content":"telephone=no"}],["$","link",null,{"rel":"canonical","href":"https://www.definamaxoficial.com"}],["$","link",null,{"rel":"apple-touch-icon","sizes":"180x180","href":"/apple-touch-icon.png"}],["$","link",null,{"rel":"icon","type":"image/png","sizes":"32x32","href":"/bfavicon.png"}],["$","link",null,{"rel":"icon","type":"image/png","sizes":"16x16","href":"/bfavicon.png"}],["$","link",null,{"rel":"manifest","href":"/site.webmanifest"}],["$","link",null,{"rel":"mask-icon","href":"/safari-pinned-tab.svg","color":"#10b981"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","script",null,{"async":true,"src":"https://www.googletagmanager.com/gtag/js?id=G-GEJ71JEFEM"}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'G-GEJ71JEFEM');\n            "}}],["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"$6"}}],["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"Definamax\",\"url\":\"https://www.definamaxoficial.com\",\"logo\":\"https://www.definamaxoficial.com/logo-phynamax.png\",\"sameAs\":[\"https://www.instagram.com/definamax\",\"https://www.facebook.com/definamax\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+55-41-98454-9172\",\"contactType\":\"customer service\",\"areaServed\":\"BR\",\"availableLanguage\":\"Portuguese\"}}"}}],["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://www.definamaxoficial.com\"}]}"}}]]}],["$","body",null,{"className":"__className_f367f3","children":[["$","$L7",null,{}],["$","$L8",null,{}],["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[]}],["$","$L9",null,{"id":"utm-tracking","strategy":"afterInteractive","children":"$a"}]]}]]}]],null],null],["$Lb",null]]]]
b:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"Definamax - Produto | Suplemento Natural para Emagrecimento"}],["$","meta","3",{"name":"description","content":"Conheça o Definamax, um suplemento alimentar natural que pode auxiliar no seu processo de emagrecimento quando combinado com uma alimentação equilibrada."}],["$","link","4",{"rel":"manifest","href":"/manifest.webmanifest","crossOrigin":"use-credentials"}],["$","meta","5",{"name":"keywords","content":"Definamax, suplemento natural, emagrecimento saudável, perda de peso, bem-estar, saúde"}],["$","meta","6",{"name":"robots","content":"index, follow"}],["$","meta","7",{"name":"googlebot","content":"index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"}],["$","meta","8",{"name":"msapplication-TileColor","content":"#15803d"}],["$","meta","9",{"name":"theme-color","content":"#15803d"}],["$","link","10",{"rel":"canonical","href":"https://www.definamaxoficial.com"}],["$","meta","11",{"name":"google-site-verification","content":"055Y8Zlr7CXBMOD8_TVqgFAiashS0o5vcUD8K7vxO_s"}],["$","meta","12",{"property":"og:title","content":"Definamax - Suplemento Alimentar Natural"}],["$","meta","13",{"property":"og:description","content":"Conheça as fibras alimentares de Definamax"}],["$","meta","14",{"property":"og:url","content":"https://www.definamaxoficial.com"}],["$","meta","15",{"property":"og:site_name","content":"Definamax"}],["$","meta","16",{"property":"og:locale","content":"pt_BR"}],["$","meta","17",{"property":"og:image","content":"https://www.definamaxoficial.com/og.png"}],["$","meta","18",{"property":"og:image:width","content":"1200"}],["$","meta","19",{"property":"og:image:height","content":"630"}],["$","meta","20",{"property":"og:image:alt","content":"Definamax - Suplemento Natural para Emagrecimento"}],["$","meta","21",{"property":"og:type","content":"website"}],["$","meta","22",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","23",{"name":"twitter:title","content":"Definamax - Suplemento Alimentar Natural"}],["$","meta","24",{"name":"twitter:description","content":"Conheça as fibras alimentares de Definamax"}],["$","meta","25",{"name":"twitter:image","content":"https://www.definamaxoficial.com/og.png"}],["$","link","26",{"rel":"icon","href":"/ico.png"}],["$","link","27",{"rel":"apple-touch-icon","href":"/ico.png"}],["$","meta","28",{"name":"next-size-adjust"}]]
1:null
