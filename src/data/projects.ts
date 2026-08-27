export interface Project {
  id: string;
  title: string;
  category: 'Web App' | 'E-commerce' | 'Business Site' | 'Enterprise';
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Web Application',
    category: 'E-commerce',
    description: 'Plataforma de comercio electrónico de alta gama en React/Redux con catálogo de productos, carrito dinámico y flujo de pago.',
    longDescription: 'Plataforma e-commerce completa con arquitectura de componentes escalables, gestión de estado con Redux, checkout interactivo multidispositivo e integración de pasarela de pago.',
    tech: ['React', 'Redux', 'TypeScript', 'REST API', 'Material UI', 'Responsive Design'],
    features: [
      'Arquitectura con 10+ componentes UI altamente reutilizables',
      'Gestión de estado con Redux reduciendo errores en ~30%',
      'Flujo de pago y carrito responsivo para cualquier dispositivo',
      'Capa de datos lista para integración con Stripe / PayPal'
    ],
    demo: 'https://appeccomerce.com',
    image: '/images/ecommerce.jpg',
    featured: true
  },
  {
    id: 'js-topografia',
    title: 'JS Topografía — Sitio Web de Ingeniería',
    category: 'Business Site',
    description: 'Sitio web profesional para empresa de ingeniería y topografía con alta velocidad de carga, catálogo de servicios y captación de clientes.',
    longDescription: 'Página web corporativa a medida diseñada para firma de ingeniería con portafolio de proyectos, catálogo interactivo de servicios, formularios dinámicos de contacto y SEO optimizado.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SEO Optimization', 'UI/UX'],
    features: [
      'Diseño web moderno 100% responsivo y optimizado para móviles',
      'Catálogo interactivo de servicios y galería de proyectos reales',
      'Velocidad de carga ultrarrápida y optimización para buscadores (SEO)',
      'Sistema directo de solicitud de cotización e integración de contacto'
    ],
    demo: 'https://jstopografia.net/',
    image: '/images/topografia.jpg',
    featured: true
  },
  {
    id: 'digital-invitations',
    title: 'Aplicación Web de Invitaciones Digitales',
    category: 'Web App',
    description: 'Plataforma web interactiva en React y TypeScript para invitaciones digitales de eventos con confirmación RSVP y pases QR.',
    longDescription: 'Aplicación para eventos especiales con sistema RSVP en tiempo real, mapas dinámicos interactivos, cuenta regresiva, generación de pases digitales con código QR y animaciones responsivas.',
    tech: ['React', 'TypeScript', 'Material UI', 'CSS Animations', 'Figma', 'REST APIs'],
    features: [
      'Confirmación de asistencia RSVP en tiempo real y seguimiento de invitados',
      'Integración con mapas interactivos y pases digitales con código QR',
      '10+ maquetas en Figma con animaciones responsivas orientadas a móviles',
      'Integración de pagos para personalización de invitaciones'
    ],
    image: '/images/invitations.jpg',
    featured: true
  },

  {
    id: 'amoverte-fisioterapia',
    title: 'Amoverte — Fisioterapia & Salud (En Desarrollo)',
    category: 'Business Site',
    description: 'Plataforma web profesional para clínica de fisioterapia y rehabilitación física con sistema interactivo de agendamiento de citas.',
    longDescription: 'Plataforma web clínica desarrollada a medida para centro de fisioterapia y movimiento. Incluye catálogo de tratamientos especializados, agendamiento de citas en línea, perfiles de especialistas y diseño de alta fidelidad.',
    tech: ['React', 'TypeScript', 'Material UI', 'Figma', 'Responsive Design', 'En Desarrollo'],
    features: [
      'Sistema interactivo de agendamiento de citas y valoración inicial',
      'Catálogo de servicios de rehabilitación y terapias de movimiento',
      'Diseño centrado en la experiencia del paciente con interfaz limpia',
      'Desarrollo responsivo adaptable a todos los dispositivos'
    ],
    image: '/images/amoverte.jpg',
    featured: true
  },
  {
    id: 'inflaparty-ecommerce',
    title: 'InflaParty — E-Commerce de Renta de Eventos',
    category: 'E-commerce',
    description: 'Plataforma e-commerce de renta de equipos para eventos con catálogo, reservaciones y maquetado responsivo.',
    longDescription: 'Plataforma e-commerce desarrollada de extremo a extremo desde diseños en Figma hasta producción, incluyendo autenticación, reservas y catálogo de renta.',
    tech: ['React', 'JavaScript', 'CSS3', 'REST API', 'Figma', 'Responsive Design'],
    features: [
      'Flujo de reservación de renta y autenticación de usuarios',
      'Catálogo de productos con fechas de reservación personalizadas',
      'Implementación de UI de alta fidelidad desde Figma',
      'Entrega de producto en entorno startup bajo metodología Agile'
    ],
    github: 'https://github.com/axelolea/inflaparty-e-commerce',
    demo: 'https://axelolea.github.io/inflaparty-e-commerce/',
    featured: true
  }
];

export default projects;
