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
    mode: '',
    palette: {},
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
    portfolio: 'https://hazard-lz.github.io/Portfolio/'
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
    canonicalUrl: 'https://hazard-lz.github.io/landing-page',
    robotsEnabled: true,
    sitemapUrl: 'https://hazard-lz.github.io/landing-page/sitemap.xml',
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
    }
  },

  // ==========================================================================
  // FORMULÁRIO DE CONTATO
  // ==========================================================================

  form: {
    method: 'whatsapp',
    emailjs: {
      serviceId: 'YOUR_SERVICE_ID',
      templateId: 'YOUR_TEMPLATE_ID',
      userId: 'YOUR_USER_ID'
    },
    formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID'
  },

  // ==========================================================================
  // ANALYTICS
  // ==========================================================================

  analytics: {
    enabled: false,
    googleTagManagerId: '',
    googleAnalyticsId: '',
    metaPixelId: '',
    googleAdsConversionId: ''
  },

  whatsAppPopup: {
    enabled: true,
    delay: 15000,
    title: 'Vamos Criar Seu Site?',
    description: 'Solicite um orçamento personalizado sem compromisso!',
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
    importancia: true,
    comparativo: true,
    sobre: true,
    stats: false,
    servicos: true,
    processo: true,
    portfolio: true,
    planos: true,
    depoimentos: false,
    faq: true,
    orcamento: true,
    cta: true,
    contato: true
  },

  // ==========================================================================
  // ESTATÍSTICAS (desativadas por enquanto)
  // ==========================================================================

  stats: [
    { count: 0, prefix: '', suffix: '', label: 'Projetos Realizados' },
    { count: 0, prefix: '', suffix: '%', label: 'Satisfação' },
    { count: 2025, prefix: '', suffix: '', label: 'Desde' },
    { count: 24, prefix: '', suffix: '/7', label: 'Dedicação Total' }
  ],

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
      description: 'Site completo para sua empresa com múltiplas páginas e presença profissional.',
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
      description: 'Site completo para sua empresa com múltiplas páginas, blog integrado e presença profissional na internet. Sua marca merece um site à altura.'
    },
    {
      icon: 'fa-cart-shopping',
      title: 'E-commerce',
      description: 'Lojas virtuais completas para vender online. Catálogo de produtos, carrinho de compras, pagamentos integrados e gestão de pedidos.'
    },
    {
      icon: 'fa-gears',
      title: 'Sistemas & Apps',
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
  // PORTFOLIO
  // ==========================================================================

  portfolio: [
    { image: 'assets/images/portfolio-1.svg', category: 'landing', tag: 'Landing Page', title: 'Landing Page de Alta Conversão', description: 'Exemplo de página única com design moderno e foco em conversão.' },
    { image: 'assets/images/portfolio-2.svg', category: 'institucional', tag: 'Site Institucional', title: 'Site Empresarial Completo', description: 'Site profissional com múltiplas páginas e blog integrado.' },
    { image: 'assets/images/portfolio-3.svg', category: 'ecommerce', tag: 'E-commerce', title: 'Loja Virtual Responsiva', description: 'E-commerce completo com catálogo, carrinho e pagamentos.' },
    { image: 'assets/images/portfolio-4.svg', category: 'landing', tag: 'Landing Page', title: 'Página de Vendas', description: 'Landing page focada em conversão com SEO integrado.' },
    { image: 'assets/images/portfolio-5.svg', category: 'institucional', tag: 'Site Institucional', title: 'Site para Prestador de Serviços', description: 'Site profissional com portfólio, depoimentos e contato direto.' },
    { image: 'assets/images/portfolio-6.svg', category: 'sistema', tag: 'Sistema Web', title: 'Painel Administrativo', description: 'Sistema personalizado com dashboard e gestão de dados.' }
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