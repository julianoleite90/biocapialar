(()=>{var e={};e.id=3,e.ids=[3],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1350:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>m,routeModule:()=>g,tree:()=>c}),t(8748),t(1506),t(5866);var r=t(3191),s=t(8716),i=t(7922),n=t.n(i),o=t(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(a,l);let c=["",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,8748)),"/Users/julianoleite/novo-biocapilar-vendas/app/admin/page.tsx"]}]},{metadata:{icon:[],apple:[],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1506)),"/Users/julianoleite/novo-biocapilar-vendas/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[],apple:[],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}}],m=["/Users/julianoleite/novo-biocapilar-vendas/app/admin/page.tsx"],d="/admin/page",p={require:t,loadChunk:()=>Promise.resolve()},g=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/admin/page",pathname:"/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2275:(e,a,t)=>{Promise.resolve().then(t.bind(t,6450))},8318:(e,a,t)=>{Promise.resolve().then(t.bind(t,3625)),Promise.resolve().then(t.bind(t,6057)),Promise.resolve().then(t.t.bind(t,4064,23))},4482:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},6450:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>n});var r=t(326),s=t(7577);let i=(0,t(6557).Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);function n(){let[e,a]=(0,s.useState)([]),[t,n]=(0,s.useState)(!0),[o,l]=(0,s.useState)(null);return t?(0,r.jsxs)("div",{className:"min-h-screen flex items-center justify-center",children:[r.jsx(i,{className:"h-8 w-8 animate-spin text-green-600"}),r.jsx("span",{className:"ml-2 text-lg",children:"Carregando avalia\xe7\xf5es..."})]}):o?r.jsx("div",{className:"min-h-screen flex items-center justify-center",children:(0,r.jsxs)("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200 text-red-700",children:[r.jsx("h2",{className:"text-lg font-semibold mb-2",children:"Erro"}),r.jsx("p",{children:o})]})}):r.jsx("div",{className:"min-h-screen bg-gray-50 p-6",children:(0,r.jsxs)("div",{className:"max-w-6xl mx-auto",children:[r.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Painel Administrativo - Avalia\xe7\xf5es"}),(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-6",children:[r.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Avalia\xe7\xf5es Recentes"}),0===e.length?r.jsx("p",{className:"text-gray-500",children:"Nenhuma avalia\xe7\xe3o encontrada."}):r.jsx("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[r.jsx("thead",{children:(0,r.jsxs)("tr",{children:[r.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Data"}),r.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Nome"}),r.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Idade"}),r.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"IMC"}),r.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Objetivo"}),r.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Kit Recomendado"})]})}),r.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:e.map(e=>(0,r.jsxs)("tr",{children:[r.jsx("td",{className:"px-4 py-4 whitespace-nowrap text-sm text-gray-500",children:new Date(e.createdAt).toLocaleDateString("pt-BR")}),r.jsx("td",{className:"px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:e.userData.name}),r.jsx("td",{className:"px-4 py-4 whitespace-nowrap text-sm text-gray-500",children:e.userData.age}),r.jsx("td",{className:"px-4 py-4 whitespace-nowrap text-sm text-gray-500",children:e.results.bmi}),(0,r.jsxs)("td",{className:"px-4 py-4 whitespace-nowrap text-sm text-gray-500",children:[e.userData.goal," kg"]}),r.jsx("td",{className:"px-4 py-4 whitespace-nowrap text-sm text-gray-500",children:e.results.recommendedKit})]},e.id))})]})})]})]})})}},3625:(e,a,t)=>{"use strict";t.d(a,{default:()=>i});var r=t(326),s=t(6931);function i(){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(s.default,{src:"https://www.googletagmanager.com/gtag/js?id=G-RTEPB48RDY",strategy:"afterInteractive"}),r.jsx(s.default,{id:"google-analytics",strategy:"afterInteractive",children:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RTEPB48RDY');
        `})]})}},6057:(e,a,t)=>{"use strict";function r(){return null}t.d(a,{default:()=>r}),t(7577)},6557:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});var r=t(7577),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),n=(e,a)=>{let t=(0,r.forwardRef)(({color:t="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:c="",children:m,...d},p)=>(0,r.createElement)("svg",{ref:p,...s,width:n,height:n,stroke:t,strokeWidth:l?24*Number(o)/Number(n):o,className:["lucide",`lucide-${i(e)}`,c].join(" "),...d},[...a.map(([e,a])=>(0,r.createElement)(e,a)),...Array.isArray(m)?m:[m]]));return t.displayName=`${e}`,t}},8748:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>r});let r=(0,t(8570).createProxy)(String.raw`/Users/julianoleite/novo-biocapilar-vendas/app/admin/page.tsx#default`)},2812:(e,a,t)=>{"use strict";t.d(a,{Z:()=>r});let r=(0,t(8570).createProxy)(String.raw`/Users/julianoleite/novo-biocapilar-vendas/app/components/GoogleAnalytics.tsx#default`)},6842:(e,a,t)=>{"use strict";t.d(a,{Z:()=>r});let r=(0,t(8570).createProxy)(String.raw`/Users/julianoleite/novo-biocapilar-vendas/app/components/UTMHandler.tsx#default`)},1506:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>g,metadata:()=>c});var r=t(9510),s=t(5384),i=t.n(s),n=t(9720);t(7272);var o=t(2812),l=t(6842);let c={metadataBase:new URL("https://www.definamaxoficial.com"),title:"Biocapilar - Restaure seus cabelos, acabe com a queda e preencha as falhas",description:"Emagre\xe7a at\xe9 10kg em 30 dias com Definamax, o emagrecedor natural mais vendido do Brasil. ✓ 100% Natural ✓ Envio Imediato ✓ Resultados Garantidos ✓ Frete Gr\xe1tis",keywords:"definamax, emagrecedor natural, perda de peso, metabolismo, compuls\xe3o alimentar, emagrecer, perder peso, gordura localizada",alternates:{canonical:"https://www.definamaxoficial.com"},openGraph:{title:"Definamax - Site Oficial | Emagrecedor Natural",description:"Emagre\xe7a at\xe9 10kg em 30 dias com Definamax, o emagrecedor natural mais vendido do Brasil. ✓ 100% Natural ✓ Envio Imediato ✓ Resultados Garantidos ✓ Frete Gr\xe1tis",url:"https://www.definamaxoficial.com",siteName:"Definamax Oficial",type:"website",locale:"pt_BR",images:[{url:"/opengraph-image.jpg",width:1200,height:630,alt:"Definamax - Emagrecedor Natural",type:"image/jpeg"},{url:"/mockup2.png",width:800,height:600,alt:"Frasco Definamax",type:"image/png"}]},twitter:{card:"summary_large_image",title:"Definamax - Site Oficial | Resultados em 30 Dias",description:"Emagre\xe7a at\xe9 10kg em 30 dias com Definamax. ✓ 100% Natural ✓ Envio Imediato ✓ Resultados Garantidos ✓ Frete Gr\xe1tis",images:["/opengraph-image.jpg"],creator:"@definamax",site:"@definamax"},robots:{index:!0,follow:!0,googleBot:{index:!0,follow:!0,"max-video-preview":-1,"max-image-preview":"large","max-snippet":-1}},verification:{google:"055Y8Zlr7CXBMOD8_TVqgFAiashS0o5vcUD8K7vxO_s"},other:{"msapplication-TileColor":"#15803d","theme-color":"#15803d"}},m={"@context":"https://schema.org","@type":"Product",name:"Definamax",description:"Suplemento natural para emagrecimento saud\xe1vel e eficaz",image:["https://www.definamaxoficial.com/mockup2.png","https://www.definamaxoficial.com/opengraph-image.jpg"],brand:{"@type":"Brand",name:"Definamax"},offers:{"@type":"AggregateOffer",lowPrice:"279.90",highPrice:"479.40",priceCurrency:"BRL",availability:"https://schema.org/InStock",offerCount:"3",seller:{"@type":"Organization",name:"Definamax"},priceValidUntil:"2025-12-31"},aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",bestRating:"5",worstRating:"1",reviewCount:"3842"},review:[{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:"5",bestRating:"5"},author:{"@type":"Person",name:"Mariana C."},datePublished:"2025-05-05",reviewBody:"Perdi 8kg em 2 meses com o Definamax. Realmente funciona!"},{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:"5",bestRating:"5"},author:{"@type":"Person",name:"Lucas M."},datePublished:"2025-04-28",reviewBody:"Em 3 meses, perdi 9kg e agora consigo jogar uma pelada sem passar vergonha."}]},d={"@context":"https://schema.org","@type":"Organization",name:"Definamax",url:"https://www.definamaxoficial.com",logo:"https://www.definamaxoficial.com/logo-phynamax.png",sameAs:["https://www.instagram.com/definamax","https://www.facebook.com/definamax"],contactPoint:{"@type":"ContactPoint",telephone:"+55-41-98454-9172",contactType:"customer service",areaServed:"BR",availableLanguage:"Portuguese"}},p={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.definamaxoficial.com"}]};function g({children:e}){return(0,r.jsxs)("html",{lang:"pt-BR",children:[(0,r.jsxs)("head",{children:[r.jsx("meta",{name:"format-detection",content:"telephone=no"}),r.jsx("link",{rel:"canonical",href:"https://www.definamaxoficial.com"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/bfavicon.png"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/bfavicon.png"}),r.jsx("link",{rel:"manifest",href:"/site.webmanifest"}),r.jsx("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#10b981"}),r.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),r.jsx("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-GEJ71JEFEM"}),r.jsx("script",{dangerouslySetInnerHTML:{__html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GEJ71JEFEM');
            `}}),r.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(m)}}),r.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(d)}}),r.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(p)}})]}),(0,r.jsxs)("body",{className:i().className,children:[r.jsx(o.Z,{}),r.jsx(l.Z,{}),e,r.jsx(n.default,{id:"utm-tracking",strategy:"afterInteractive",children:`
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
          `})]})]})}},7272:()=>{}};var a=require("../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),r=a.X(0,[948,869],()=>t(1350));module.exports=r})();