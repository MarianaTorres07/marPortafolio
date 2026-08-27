import React, { createContext, useContext, useState } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Nav & Layout
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.hireMe': 'Contratarme / Hablemos',
    'nav.role': 'Frontend Engineer',
    'nav.degree': 'M.Sc. IA',
    'footer.role': 'Frontend Engineer | React, Angular, TypeScript & M.Sc. en IA',
    'footer.copyright': 'Mariana Torres Pozos. Creado con React 19, TypeScript & Material UI.',
    'layout.fabTooltip': 'Cotizar por WhatsApp',

    // Home Page
    'home.heroBadge1': 'Frontend Engineer & M.Sc. en IA',
    'home.heroBadge2': '🟢 Disponible para Contratación & Proyectos Web',
    'home.heroTitleLine1': 'Transformo ideas en ',
    'home.heroTitleGradient': 'Páginas Web & E-Commerce',
    'home.heroTitleLine2': ' de Alto Impacto',
    'home.heroSubtitle': 'Hola, soy Mariana Torres Pozos. Ayudo a empresas, profesionales y emprendedores a tener presencia web profesional en internet con diseños atractivos, rápidas velocidades de carga y tiendas en línea que convierten visitas en clientes.',
    'home.btnServices': 'Ver Servicios & Cotizar',
    'home.btnWhatsapp': 'Hablar por WhatsApp',
    'home.stat1Number': '4+ Años',
    'home.stat1Label': 'Experiencia Frontend',
    'home.stat2Number': '100%',
    'home.stat2Label': 'Móvil & SEO Listo',
    'home.stat3Number': '80%',
    'home.stat3Label': 'Automatización IA',
    'home.badgeLiveEng': '🌐 SITIO DE INGENIERÍA EN VIVO',
    'home.badgeLiveEcom': '🛒 TIENDA E-COMMERCE EN VIVO',
    'home.badgeDev': '⚡ SITIO EN DESARROLLO',
    'home.btnQuoteWeb': 'Ver Paquetes & Cotizar Mi Web',
    'home.helpSectionBadge': '💡 ¿CÓMO TE PUEDO AYUDAR?',
    'home.helpSectionTitle': 'Soluciones Web que Hacen Crecer tu Negocio',
    'home.helpSectionSub': 'Ya sea que necesites una página corporativa elegante, una tienda en línea o una aplicación a medida, te ofrezco desarrollo profesional rápido y transparente.',
    'home.h1Title': 'Sitios Web Corporativos',
    'home.h1Desc': 'Diseño profesional para empresas e ingenierías (Ej. JS Topografía).',
    'home.h2Title': 'Tiendas E-Commerce a Medida',
    'home.h2Desc': 'Catálogo, carrito y pagos en línea (Ej. appeccomerce.com).',
    'home.h3Title': 'Apps Web & Invitaciones Digitales',
    'home.h3Desc': 'Experiencias interactivas con RSVP en tiempo real y pases QR.',
    'home.btnDetails': 'Ver Paquetes & Detalles',
    'home.projectsSectionTitle': 'Proyectos & Sitios Web en Producción',
    'home.projectsSectionSub': 'Haz clic en cualquier proyecto para visitar el sitio web real en vivo',
    'home.btnViewAll': 'Ver Todos',
    'home.techStackTitle': '⚡ TECNOLOGÍAS & HERRAMIENTAS DE DESARROLLO',
    'home.reviewsBadge': '⭐ OPINIONES DE CLIENTES',
    'home.reviewsTitle': 'Experiencias de Trabajo & Resultados',
    'home.reviewsSub': 'Compromiso con entregas puntuales, excelente comunicación y código de máxima calidad.',

    // Services Page
    'services.pageBadge': '💼 SERVICIOS DE DESARROLLO WEB FREELANCE',
    'services.pageTitle': 'Planes & Servicios Web a Medida',
    'services.pageSub': 'Páginas web profesionales, tiendas virtuales e-commerce y aplicaciones interactivas diseñadas para hacer destacar tu negocio y atraer clientes.',
    'services.btnQuoteWa': 'Cotizar por WhatsApp',
    'services.popularBadge': 'MÁS SOLICITADO',
    'services.whatIncludes': '¿Qué incluye tu paquete?',
    'services.pkg1Title': 'Sitio Web Corporativo / Negocios',
    'services.pkg1Sub': 'Para empresas, despachos e ingenierías (Como JS Topografía - jstopografia.net)',
    'services.pkg1Price': 'Desde $6,500 MXN / $350 USD',
    'services.pkg2Title': 'Tienda Virtual / E-Commerce Completo',
    'services.pkg2Sub': 'Para vender productos físicos o servicios online (Como appeccomerce.com)',
    'services.pkg2Price': 'Desde $12,500 MXN / $650 USD',
    'services.pkg3Title': 'Invitaciones Digitales & Web Apps Interactivas',
    'services.pkg3Sub': 'Para bodas, XV años o eventos corporativos con pase digital QR',
    'services.pkg3Price': 'Desde $3,500 MXN / $180 USD',
    'services.whyTitle': '¿Por qué trabajar conmigo?',
    'services.whySub': 'Garantía de calidad, código limpio y atención personalizada en cada proyecto.',
    'services.why1Title': '100% Responsivo',
    'services.why1Desc': 'Tu sitio web se verá perfecto en iPhones, Androids, Tablets y Computadoras.',
    'services.why2Title': 'Velocidad & SEO',
    'services.why2Desc': 'Webs ultrarrápidas optimizadas para posicionarse mejor en búsquedas de Google.',
    'services.why3Title': 'Diseño Personalizado',
    'services.why3Desc': 'Sin plantillas aburridas. Diseños únicos creados en Figma según tu marca.',
    'services.why4Title': 'Atención Directa',
    'services.why4Desc': 'Tratas directamente con la ingeniera que construye tu software, sin intermediarios.',
    'services.processTitle': 'Proceso de Trabajo en 4 Pasos',
    'services.processSub': 'Un proceso claro y estructurado desde la idea inicial hasta el lanzamiento de tu sitio web en vivo.',
    'services.step1Title': 'Consulta & Cotización',
    'services.step1Desc': 'Analizamos tus necesidades, definimos la estructura del sitio y te envío una propuesta clara.',
    'services.step2Title': 'Diseño en Figma',
    'services.step2Desc': 'Creo el prototipo visual de tu página web para que apruebes los colores, fuentes y distribución.',
    'services.step3Title': 'Desarrollo Web',
    'services.step3Desc': 'Programo tu sitio web en React, Angular o HTML5 con animación fluida, SEO y velocidad.',
    'services.step4Title': 'Lanzamiento en Vivo',
    'services.step4Desc': 'Publicamos tu sitio web en tu dominio oficial y te entrego todo listo para funcionar.',
    'services.faqTitle': 'Preguntas Frecuentes',
    'services.faqSub': 'Respuestas a las dudas más comunes sobre la contratación y desarrollo de tu proyecto web.',
    'services.finalCtaTitle': '¿Listo para iniciar tu sitio web o contratarme?',
    'services.finalCtaSub': 'Escríbeme por WhatsApp o envíame un mensaje directo para platicar de tu proyecto y enviarte una cotización sin compromiso.',
    'services.btnEmail': 'Enviar Correo Electrónico',

    // Projects Page
    'projects.title': 'Mis Proyectos & Portafolio',
    'projects.sub': 'Explora aplicaciones web, plataformas e-commerce, sistemas de componentes y rediseños de UI construidos con React, Angular, TypeScript y estándares modernos.',
    'projects.tabAll': 'Todos',
    'projects.tabEcommerce': 'E-commerce',
    'projects.tabWebApp': 'Web App',
    'projects.tabBusiness': 'Sitios Web',
    'projects.btnLive': 'Ver Sitio en Vivo',
    'projects.btnCode': 'Código',
    'projects.liveTag': '🟢 Sitio en Vivo',
    'projects.devTag': '⚡ En Desarrollo',

    // Contact Page
    'contact.title': 'Hablemos de tu Proyecto',
    'contact.sub': 'Ya sea que tengas una oportunidad de trabajo, un proyecto freelance o quieras platicar — me encantará escucharte.',
    'contact.infoTitle': 'Información de Contacto',
    'contact.findMe': 'ENCUÉNTRAME EN',
    'contact.formTitle': 'Envíame un Mensaje Directo',
    'contact.formName': 'Tu Nombre',
    'contact.formEmail': 'Tu Correo Electrónico',
    'contact.formMessage': 'Mensaje',
    'contact.formSend': 'Enviar Mensaje',
    'contact.formSuccess': '¡Gracias! Tu mensaje ha sido enviado. Me pondré en contacto contigo a la brevedad.',
    'contact.locationLabel': 'Ubicación',
    'contact.locationVal': 'México (Disponible para Trabajo Remoto & Relocalización)',

    // Digital Card Page
    'card.badge': '🪪 TARJETA DIGITAL PROFESIONAL',
    'card.title': 'Mariana Torres Pozos',
    'card.role': 'Frontend Engineer & M.Sc. en IA',
    'card.call': 'Llamar',
    'card.mobile': 'Móvil',
    'card.whatsapp': 'WhatsApp',
    'card.email': 'Email',
    'card.saveContact': 'AGREGAR A CONTACTOS',
    'card.location': 'Ubicación',
    'card.locationVal': 'México (Disponible Remoto)',
    'card.portfolio': 'Portafolio Web Oficial',
    'card.engineeringSite': 'Sitio Web JS Topografía',
    'card.ecommerceSite': 'Tienda App Commerce',
    'card.physioSite': 'Amoverte Fisioterapia (En Dev)',
    'card.qrTitle': 'Escanea el Código QR',
    'card.qrDesc': 'Abre la cámara de tu teléfono para escanear y guardar la tarjeta',
    'card.shareBtn': 'Compartir Tarjeta',
    'card.copiedToast': '¡Enlace de tarjeta copiado!',
  },
  en: {
    // Nav & Layout
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.hireMe': "Hire Me / Let's Talk",
    'nav.role': 'Frontend Engineer',
    'nav.degree': 'M.Sc. AI',
    'footer.role': 'Frontend Engineer | React, Angular, TypeScript & M.Sc. in AI',
    'footer.copyright': 'Mariana Torres Pozos. Built with React 19, TypeScript & Material UI.',
    'layout.fabTooltip': 'Get a Quote on WhatsApp',

    // Home Page
    'home.heroBadge1': 'Frontend Engineer & M.Sc. in AI',
    'home.heroBadge2': '🟢 Available for Hire & Web Projects',
    'home.heroTitleLine1': 'Transforming ideas into ',
    'home.heroTitleGradient': 'Websites & E-Commerce',
    'home.heroTitleLine2': ' of High Impact',
    'home.heroSubtitle': 'Hello, I am Mariana Torres Pozos. I help companies, professionals, and entrepreneurs establish a high-impact web presence with stunning designs, fast loading speeds, and online stores that turn visitors into clients.',
    'home.btnServices': 'View Services & Quote',
    'home.btnWhatsapp': 'Chat on WhatsApp',
    'home.stat1Number': '4+ Years',
    'home.stat1Label': 'Frontend Experience',
    'home.stat2Number': '100%',
    'home.stat2Label': 'Mobile & SEO Ready',
    'home.stat3Number': '80%',
    'home.stat3Label': 'AI Automation',
    'home.badgeLiveEng': '🌐 LIVE ENGINEERING SITE',
    'home.badgeLiveEcom': '🛒 LIVE E-COMMERCE STORE',
    'home.badgeDev': '⚡ SITE IN DEVELOPMENT',
    'home.btnQuoteWeb': 'View Packages & Quote My Web',
    'home.helpSectionBadge': '💡 HOW CAN I HELP YOU?',
    'home.helpSectionTitle': 'Web Solutions that Grow Your Business',
    'home.helpSectionSub': 'Whether you need an elegant corporate website, an online store, or a custom web app, I deliver fast and transparent professional software.',
    'home.h1Title': 'Corporate & Business Websites',
    'home.h1Desc': 'Professional web design for engineering firms and corporate businesses (e.g. JS Topografía).',
    'home.h2Title': 'Custom E-Commerce Stores',
    'home.h2Desc': 'Product catalog, dynamic shopping cart, and online payments (e.g. appeccomerce.com).',
    'home.h3Title': 'Web Apps & Digital Invitations',
    'home.h3Desc': 'Interactive experiences with real-time RSVP & QR entry passes.',
    'home.btnDetails': 'View Packages & Details',
    'home.projectsSectionTitle': 'Projects & Live Websites',
    'home.projectsSectionSub': 'Click on any project to visit the live production website',
    'home.btnViewAll': 'View All',
    'home.techStackTitle': '⚡ TECHNOLOGIES & DEVELOPMENT TOOLS',
    'home.reviewsBadge': '⭐ CLIENT REVIEWS',
    'home.reviewsTitle': 'Work Experiences & Results',
    'home.reviewsSub': 'Commitment to on-time delivery, clear communication, and top-tier code quality.',

    // Services Page
    'services.pageBadge': '💼 FREELANCE WEB DEVELOPMENT SERVICES',
    'services.pageTitle': 'Tailored Web Plans & Services',
    'services.pageSub': 'Professional websites, e-commerce stores, and interactive web apps designed to make your business stand out and convert leads.',
    'services.btnQuoteWa': 'Quote on WhatsApp',
    'services.popularBadge': 'MOST POPULAR',
    'services.whatIncludes': "What's included in your package?",
    'services.pkg1Title': 'Corporate / Business Website',
    'services.pkg1Sub': 'For companies, firms, and engineering teams (like JS Topografía - jstopografia.net)',
    'services.pkg1Price': 'From $6,500 MXN / $350 USD',
    'services.pkg2Title': 'Full E-Commerce / Online Store',
    'services.pkg2Sub': 'To sell physical products or online services (like appeccomerce.com)',
    'services.pkg2Price': 'From $12,500 MXN / $650 USD',
    'services.pkg3Title': 'Digital Invitations & Interactive Web Apps',
    'services.pkg3Sub': 'For weddings, XV years, or corporate events with QR digital entry passes',
    'services.pkg3Price': 'From $3,500 MXN / $180 USD',
    'services.whyTitle': 'Why Work With Me?',
    'services.whySub': 'Quality guarantee, clean code, and personal attention on every single project.',
    'services.why1Title': '100% Responsive',
    'services.why1Desc': 'Your website will look perfect on iPhones, Androids, Tablets, and PCs.',
    'services.why2Title': 'Speed & SEO',
    'services.why2Desc': 'Ultra-fast websites optimized for higher search rankings on Google.',
    'services.why3Title': 'Custom Design',
    'services.why3Desc': 'No boring templates. Unique UI/UX designs crafted in Figma for your brand.',
    'services.why4Title': 'Direct Attention',
    'services.why4Desc': 'You communicate directly with the engineer building your software, no middlemen.',
    'services.processTitle': '4-Step Work Process',
    'services.processSub': 'A clear, structured process from initial concept to launching your live website.',
    'services.step1Title': 'Discovery & Quote',
    'services.step1Desc': 'We analyze your needs, define the site architecture, and send a clear proposal.',
    'services.step2Title': 'Figma UI/UX Design',
    'services.step2Desc': 'I build the visual prototype so you can approve colors, typography, and layout.',
    'services.step3Title': 'Web Development',
    'services.step3Desc': 'I code your site using React, Angular, or HTML5 with fluid animations, SEO, and speed.',
    'services.step4Title': 'Live Launch',
    'services.step4Desc': 'We deploy your website on your official domain and hand over everything ready to run.',
    'services.faqTitle': 'Frequently Asked Questions',
    'services.faqSub': 'Answers to common questions about hiring and web project development.',
    'services.finalCtaTitle': 'Ready to start your website or hire me?',
    'services.finalCtaSub': 'Chat with me on WhatsApp or send a direct email to discuss your project and get a free quote.',
    'services.btnEmail': 'Send Email',

    // Projects Page
    'projects.title': 'My Projects & Portfolio',
    'projects.sub': 'Explore web applications, e-commerce platforms, component systems, and UI redesigns built with React, Angular, TypeScript, and modern web standards.',
    'projects.tabAll': 'All',
    'projects.tabEcommerce': 'E-commerce',
    'projects.tabWebApp': 'Web App',
    'projects.tabBusiness': 'Business Sites',
    'projects.btnLive': 'View Live Site',
    'projects.btnCode': 'Code',
    'projects.liveTag': '🟢 Live Site',
    'projects.devTag': '⚡ In Development',

    // Contact Page
    'contact.title': "Let's Connect",
    'contact.sub': "Whether you have a job opportunity, a freelance project, or just want to connect — I'd love to hear from you.",
    'contact.infoTitle': 'Contact Information',
    'contact.findMe': 'FIND ME ON',
    'contact.formTitle': 'Send Me a Direct Message',
    'contact.formName': 'Your Name',
    'contact.formEmail': 'Your Email',
    'contact.formMessage': 'Message',
    'contact.formSend': 'Send Message',
    'contact.formSuccess': "Thank you! Your message has been received. I'll get back to you shortly.",
    'contact.locationLabel': 'Location',
    'contact.locationVal': 'Mexico (Available for Remote Work & Relocation)',

    // Digital Card Page
    'card.badge': '🪪 DIGITAL BUSINESS CARD',
    'card.title': 'Mariana Torres Pozos',
    'card.role': 'Frontend Engineer & M.Sc. in AI',
    'card.call': 'Call',
    'card.mobile': 'Mobile',
    'card.whatsapp': 'WhatsApp',
    'card.email': 'Email',
    'card.saveContact': 'ADD TO CONTACTS',
    'card.location': 'Location',
    'card.locationVal': 'Mexico (Remote Available)',
    'card.portfolio': 'Official Web Portfolio',
    'card.engineeringSite': 'JS Topografía Website',
    'card.ecommerceSite': 'App Commerce Store',
    'card.physioSite': 'Amoverte Physio (In Dev)',
    'card.qrTitle': 'Scan QR Code',
    'card.qrDesc': 'Open your phone camera to scan and save this digital card',
    'card.shareBtn': 'Share Digital Card',
    'card.copiedToast': 'Card link copied to clipboard!',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language');
    return (saved === 'en' || saved === 'es') ? saved : 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'es' ? 'en' : 'es';
    setLanguage(nextLang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['es'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
