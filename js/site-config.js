var SITE_CONFIG = {
  // ==========================================================================
  // DADOS DO DESENVOLVEDOR
  // ==========================================================================

  brand: {
    name: 'Leonardo Gomes',
    nameHtml: 'LEONARDO<strong class="brand-accent">GOMES</strong>',
    tagline: 'Sites e Sistemas Sob Medida',
    description: 'Criação de sites profissionais, landing pages e sistemas personalizados. Transforme sua ideia em um projeto digital pronto para o mercado.',
    phone: '(11) 93437-6059',
    phoneRaw: '5511934376059',
    email: 'leogb1200@gmail.com',
    address: 'Atendimento 100% Online em todo o Brasil',
    hours: 'Seg a Sex: 08h às 18h | Sáb: 08h às 12h | Plantão WhatsApp',
    foundedYear: 2025,
    employees: 1
  },

  // ==========================================================================
  // TEMA
  // ==========================================================================

  theme: {
    mode: 'dark',
    palette: {
      primary: '#7c3aed',
      primaryText: '#a78bfa',
      accent: '#a855f7',
      gradPrimary: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
      gradText: 'linear-gradient(135deg, #ffffff 30%, #d8b4fe 60%, #c084fc 100%)',
      glow: 'rgba(124, 58, 237, 0.35)'
    },
    fonts: {}
  },

  // ==========================================================================
  // REDES SOCIAIS
  // ==========================================================================

  social: {
    whatsapp: 'https://wa.me/5511934376059',
    instagram: '',
    linkedin: 'https://www.linkedin.com/in/leonardo-gomes-8b6975292/',
    facebook: '',
    youtube: '',
    github: 'https://github.com/Hazard-lz',
    portfolio: 'https://hazard-lz.github.io/Portfolio/#projetos'
  },

  // ==========================================================================
  // SEO & META TAGS
  // ==========================================================================

  seo: {
    enabled: true,
    title: 'Leonardo Gomes | Criação de Sites e Sistemas Sob Medida',
    description: 'Crio landing pages, sites institucionais, e-commerces e sistemas personalizados. Atendimento online em todo o Brasil. Solicite seu orçamento.',
    keywords: 'criação de sites, landing pages, desenvolvimento web, sistemas personalizados, sites profissionais, ecommerce, seo, performance web, hazardlz, leonardo gomes',
    ogTitle: 'Leonardo Gomes | Desenvolvimento Web',
    ogDescription: 'Sites profissionais, landing pages de alta conversão e sistemas personalizados para o seu negócio.',
    ogType: 'website',
    ogLocale: 'pt_BR',
    ogSiteName: 'Leonardo Gomes',
    ogImage: 'assets/images/hero-graphic-og.png',
    canonicalUrl: 'https://leonardo-gomes.vercel.app',
    robotsEnabled: true,
    sitemapUrl: 'https://leonardo-gomes.vercel.app/sitemap.xml',
    twitterCard: 'summary_large_image',
    twitterSite: '',
    twitterCreator: '',
    favicon: 'assets/favicon.svg'
  },

  // ==========================================================================
  // MENSAGENS PADRÃO DE WHATSAPP
  // ==========================================================================

  whatsappMessages: {
    default: 'Olá! Vi seu portfólio e gostaria de solicitar um orçamento para um projeto.',
    plan: function(planName) {
      return `Olá! Tenho interesse no projeto ${planName} e gostaria de mais informações.`;
    },
    service: function(serviceName) {
      return `Olá! Gostaria de saber mais sobre o serviço: ${serviceName}.`;
    },
    budget: function(items) {
      const summary = items.map(i => `- ${i}`).join('\n');
      return `Olá! Montei meu orçamento com as seguintes opções:\n\n${summary}\n\nPodemos conversar sobre os valores?`;
    },
    form: function(data) {
      return `*Novo Lead pelo Site*\n\nNome: ${data.name}\nE-mail: ${data.email}\nTelefone: ${data.phone}\nMensagem: ${data.message}`;
    },
    formAlert: function(message) {
      return `${message}`;
    }
  },

  // ==========================================================================
  // FORMULÁRIO DE CONTATO
  // ==========================================================================

  form: {
    method: 'emailjs',
    emailjs: {
      serviceId: 'service_ilji7rx',
      templateId: 'template_dl17ocy',
      userId: 'zTahZC9jxWvLfIaaj'
    },
    formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID'
  },

  // ==========================================================================
  // ANALYTICS
  // ==========================================================================

  analytics: {
    enabled: true,
    googleTagManagerId: '',
    googleAnalyticsId: 'G-DDLFV265C6',
    metaPixelId: '',
    googleAdsConversionId: ''
  },

  whatsAppPopup: {
    enabled: true,
    delay: 15000,
    title: 'Precisa de um Site?',
    description: 'Me chame no WhatsApp e faço uma proposta personalizada para seu projeto!',
    buttonText: 'Falar Agora'
  },

  // ==========================================================================
  // PERFORMANCE
  // ==========================================================================

  performance: {
    enabled: true,
    preloader: true,
    lazyLoadImages: true,
    deferScripts: true,
    preconnectOrigins: [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ],
    prefetchLinks: [
      { href: 'js/site-config.js', as: 'script' }
    ]
  },

  // ==========================================================================
  // SEÇÕES ATIVAS
  // ==========================================================================

  sections: {
    hero: true,
    beneficios: true,
    importancia: false,
    sobre: true,
    stats: false,
    servicos: true,
    portfolio: true,
    planos: true,
    depoimentos: false,
    faq: true,
    orcamento: false,
    cta: true,
    contato: true
  },

  // ==========================================================================
  // PLANOS / TIPOS DE PROJETO
  // ==========================================================================

  plans: [
    {
      name: 'Landing Page',
      icon: 'fa-file-lines',
      description: 'Página única e impactante para campanhas, promoções ou captação de leads.',
      monthly: 0,
      annual: 0,
      annualSavings: 0,
      popular: false,
      features: [
        { text: 'Design responsivo e moderno', included: true },
        { text: 'Integração com WhatsApp', included: true },
        { text: 'Formulário de captação de leads', included: true },
        { text: 'Otimização de performance', included: true },
        { text: 'Hospedagem + Domínio (opcional)', included: false }
      ],
      cta: 'Solicitar Orçamento'
    },
    {
      name: 'Site Institucional',
      icon: 'fa-globe',
      description: 'Site completo para o seu negócio com múltiplas páginas e presença profissional.',
      monthly: 0,
      annual: 0,
      annualSavings: 0,
      popular: true,
      features: [
        { text: 'Até 5 páginas personalizadas', included: true },
        { text: 'Design responsivo e moderno', included: true },
        { text: 'Integração com WhatsApp', included: true },
        { text: 'Blog integrado', included: true },
        { text: 'Otimização SEO básica', included: true },
        { text: 'Hospedagem + Domínio (opcional)', included: false }
      ],
      cta: 'Solicitar Orçamento'
    },
    {
      name: 'E-commerce / Sistema',
      icon: 'fa-cart-shopping',
      description: 'Loja virtual completa ou sistema web personalizado para seu negócio.',
      monthly: 0,
      annual: 0,
      annualSavings: 0,
      popular: false,
      features: [
        { text: 'Funcionalidades sob medida', included: true },
        { text: 'Painel administrativo', included: true },
        { text: 'Integrações personalizadas', included: true },
        { text: 'Otimização SEO avançada', included: true },
        { text: 'Suporte e manutenção inclusos', included: true },
        { text: 'Hospedagem + Domínio (opcional)', included: false }
      ],
      cta: 'Solicitar Orçamento'
    }
  ],

  // ==========================================================================
  // SERVIÇOS OFERECIDOS
  // ==========================================================================

  services: [
    {
      icon: 'fa-file-lines',
      title: 'Landing Pages',
      description: 'Páginas de alta conversão para campanhas, promoções e captação de leads. Design moderno, carregamento ultrarrápido e foco em resultado.'
    },
    {
      icon: 'fa-globe',
      title: 'Sites Institucionais',
      description: 'Site completo para o seu negócio com múltiplas páginas, blog integrado e presença profissional na internet. Sua marca merece um site à altura.'
    },
    {
      icon: 'fa-cart-shopping',
      title: 'E-commerce',
      description: 'Lojas virtuais completas para vender online. Catálogo de produtos, carrinho de compras, pagamentos integrados e gestão de pedidos.'
    },
    {
      icon: 'fa-gears',
      title: 'Sistemas Web',
      description: 'Sistemas web personalizados, dashboards, painéis administrativos e aplicações sob medida para automatizar e escalar seu negócio.'
    },
    {
      icon: 'fa-magnifying-glass-chart',
      title: 'Otimização SEO',
      description: 'Seu site preparado para rankear no Google. Metatags, estrutura semântica, dados estruturados e práticas de SEO on-page.'
    },
    {
      icon: 'fa-bolt',
      title: 'Performance Web',
      description: 'Otimização de velocidade, Core Web Vitals, lazy loading e técnicas avançadas para seu site carregar em menos de 1 segundo.'
    }
  ],

  // ==========================================================================
  // FAQ
  // ==========================================================================

  faq: [
    {
      question: 'Quanto custa criar um site?',
      answer: 'Cada projeto é único. O valor depende da complexidade, número de páginas e funcionalidades. Me chame no WhatsApp com os detalhes do seu projeto que te envio uma proposta personalizada sem compromisso.'
    },
    {
      question: 'Quanto tempo leva para ficar pronto?',
      answer: 'Landing pages ficam prontas em 3-7 dias. Sites institucionais em 7-15 dias. Projetos mais complexos como e-commerce ou sistemas sob medida têm prazos alinhados durante o orçamento.'
    },
    {
      question: 'Você oferece hospedagem e domínio?',
      answer: 'Sim, posso incluir hospedagem e domínio no seu projeto. Trabalho com as melhores plataformas para garantir performance e segurança.'
    },
    {
      question: 'E depois que o site ficar pronto?',
      answer: 'Ofereço planos de manutenção mensal para manter seu site sempre atualizado, seguro e com suporte contínuo. Perfeito se você não quer se preocupar com nada técnico.'
    },
    {
      question: 'Como solicito um orçamento?',
      answer: 'Clique no WhatsApp em qualquer lugar da página ou preencha o formulário de contato. Me conte sobre seu projeto e te respondo em minutos com uma proposta personalizada.'
    }
  ],

  // ==========================================================================
  // CALCULADORA DE ORÇAMENTO
  // ==========================================================================

  budgetCalculator: {
    title: 'Monte Seu Orçamento',
    description: 'Selecione os recursos que você precisa. Os valores são referência — o preço final combinamos no WhatsApp.',
    options: [
      { id: 'landing', label: 'Landing Page', price: 597, icon: 'fa-file-lines' },
      { id: 'institutional', label: 'Site Institucional', price: 1297, icon: 'fa-globe' },
      { id: 'ecommerce', label: 'E-commerce', price: 2497, icon: 'fa-cart-shopping' },
      { id: 'system', label: 'Sistema Personalizado', price: 3997, icon: 'fa-gears' },
      { id: 'seo', label: 'Pacote SEO', price: 297, icon: 'fa-magnifying-glass-chart' },
      { id: 'speed', label: 'Otimização de Performance', price: 197, icon: 'fa-bolt' },
      { id: 'whatsapp', label: 'Integração com WhatsApp', price: 147, icon: 'fa-brands fa-whatsapp' },
      { id: 'maintenance', label: 'Manutenção Mensal', price: 97, icon: 'fa-screwdriver-wrench' }
    ],
    cta: 'Solicitar Proposta no WhatsApp'
  }
};