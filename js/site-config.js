var SITE_CONFIG = {
  // ==========================================================================
  // DADOS DA EMPRESA / CLIENTE
  // Edite apenas este arquivo para personalizar o site inteiro.
  // ==========================================================================

  brand: {
    name: 'Sua Empresa',
    nameHtml: 'SUA<strong class="brand-accent">EMPRESA</strong>',
    tagline: 'Solução Perfeita Para o Seu Negócio',
    description: 'Oferecemos soluções modernas e personalizadas para alavancar o seu negócio na internet.',
    phone: '(11) 93437-6059',
    phoneRaw: '5511934376059',
    email: 'leogb1200@gmail.com',
    address: 'Av. Principal do Seu Bairro, 1000 - Cidade / UF',
    hours: 'Segunda a Sexta: 08h às 18h | Sábado: 08h às 12h',
    foundedYear: 2016,
    employees: 12
  },

  // ==========================================================================
  // TEMA (CORES, MODO CLARO/ESCURO E FONTES)
  // Preencha para fixar a identidade visual do cliente.
  // Deixe palette vazio {} para usar o Niche Switcher interativo.
  // mode: '' (permite alternar), 'dark' (fixo), 'light' (fixo)
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
    title: 'Modelo Demonstrativo | Template de Landing Page de Alta Conversão',
    description: 'Demonstração interativa de Landing Page profissional. Exemplo de estrutura moderna, responsiva e de alta conversão adaptável a qualquer empresa.',
    keywords: 'landing page demonstrativa, template de site, modelo de site, site para empresa, alta conversão, modelo responsivo',
    ogTitle: 'Modelo Demonstrativo | Template de Landing Page',
    ogDescription: 'Veja como o site da sua empresa pode ficar com este modelo moderno, ultra rápido e responsivo.',
    ogType: 'website',
    ogLocale: 'pt_BR',
    ogSiteName: 'Sua Empresa',
    ogImage: 'assets/images/hero-graphic-og.png',
    canonicalUrl: 'https://landing-page-template-hazardlg.vercel.app',
    robotsEnabled: true,
    sitemapUrl: 'https://landing-page-template-hazardlg.vercel.app/sitemap.xml',
    twitterCard: 'summary_large_image',
    twitterSite: '',
    twitterCreator: '',
    favicon: 'assets/favicon.svg'
  },

  // ==========================================================================
  // MENSAGENS PADRÃO DE WHATSAPP
  // ==========================================================================

  whatsappMessages: {
    default: 'Olá! Estive vendo a demonstração da landing page e gostaria de solicitar um orçamento para o site da minha empresa!',
    plan: function(planName) {
      return `Olá! Tenho interesse no plano ${planName} e gostaria de mais informações.`;
    },
    service: function(serviceName) {
      return `Olá! Gostaria de saber mais sobre o serviço: ${serviceName}.`;
    },
    budget: function(items) {
      const summary = items.map(i => `- ${i}`).join('\n');
      return `Olá! Gostaria de solicitar um orçamento com base nas seguintes opções:\n\n${summary}\n\nPode me enviar uma proposta?`;
    },
    form: function(data) {
      return `*Novo Lead pelo Site*\n\nNome: ${data.name}\nE-mail: ${data.email}\nTelefone: ${data.phone}\nMensagem: ${data.message}`;
    }
  },

  // ==========================================================================
  // FORMULÁRIO DE CONTATO
  // Escolha o método de envio: 'whatsapp' | 'emailjs' | 'formspree'
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
  // ANALYTICS & TRACKING
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
    delay: 20000,
    title: 'Olá! Precisa de um site?',
    description: 'Posso ajudar com um orçamento personalizado para o seu negócio!',
    buttonText: 'Falar Agora'
  },

  // ==========================================================================
  // OTIMIZAÇÃO DE PERFORMANCE
  // ==========================================================================

  performance: {
    enabled: true,
    preloader: true,       // false = desabilita o preloader completamente (inclusive na troca de temas)
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
  // SEÇÕES ATIVAS (true = exibir, false = ocultar)
  // ==========================================================================

  sections: {
    hero: true,
    beneficios: true,
    importancia: true,
    comparativo: true,
    sobre: true,
    stats: true,
    servicos: true,
    processo: true,
    portfolio: true,
    planos: true,
    depoimentos: true,
    faq: true,
    orcamento: false,
    cta: true,
    contato: true
  },

  // ==========================================================================
  // NÚMEROS E ESTATÍSTICAS (para a seção de contadores)
  // ==========================================================================

  stats: [
    { count: 500, prefix: '+', suffix: '', label: 'Clientes Atendidos' },
    { count: 99, prefix: '', suffix: '%', label: 'Satisfação Garantida' },
    { count: 10, prefix: '', suffix: ' Anos', label: 'Anos no Mercado' },
    { count: 24, prefix: '', suffix: '/7', label: 'Suporte e Prontidão' }
  ],

  // ==========================================================================
  // PLANOS / PREÇOS
  // ==========================================================================

  plans: [
    {
      name: 'Plano Básico',
      icon: 'fa-paper-plane',
      description: 'Ideal para atendimentos individuais e serviços essenciais.',
      monthly: 199,
      annual: 159,
      annualSavings: 480,
      popular: false,
      features: [
        { text: 'Atendimento em Horário Comercial', included: true },
        { text: 'Suporte via WhatsApp & E-mail', included: true },
        { text: 'Acesso aos Serviços Fundamentais', included: true },
        { text: 'Atendimento Prioritário VIP', included: false },
        { text: 'Descontos Exclusivos em Serviços', included: false }
      ],
      cta: 'Escolher Básico'
    },
    {
      name: 'Plano Completo',
      icon: 'fa-rocket',
      description: 'A escolha perfeita para quem busca o máximo de benefícios.',
      monthly: 399,
      annual: 319,
      annualSavings: 960,
      popular: true,
      features: [
        { text: 'Tudo do Plano Básico', included: true },
        { text: 'Atendimento Prioritário VIP', included: true },
        { text: 'Avaliações e Acompanhamento Mensal', included: true },
        { text: 'Descontos Exclusivos em Serviços', included: true },
        { text: 'Agendamento Flexível 7 dias/semana', included: true }
      ],
      cta: 'Escolher Completo'
    },
    {
      name: 'Plano VIP',
      icon: 'fa-crown',
      description: 'Solução personalizada para empresas e contratações de grande porte.',
      monthly: 799,
      annual: 639,
      annualSavings: 1920,
      popular: false,
      features: [
        { text: 'Atendimento Exclusivo 24/7', included: true },
        { text: 'Consultor Dedicado', included: true },
        { text: 'Garantias Estendidas e Relatórios', included: true },
        { text: 'Descontos Máximos em Novos Projetos', included: true },
        { text: 'Prioridade Máxima na Fila', included: true }
      ],
      cta: 'Escolher VIP'
    }
  ],

  // ==========================================================================
  // SERVIÇOS OFERECIDOS
  // ==========================================================================

  services: [
    {
      icon: 'fa-award',
      title: 'Serviço 1 - Atendimento Especializado',
      description: 'Descreva aqui o primeiro serviço principal oferecido pela sua empresa, destacando os maiores benefícios para o cliente.'
    },
    {
      icon: 'fa-sliders',
      title: 'Serviço 2 - Soluções Sob Medida',
      description: 'Apresente tratamentos, projetos ou produtos personalizados de acordo com a necessidade específica de cada cliente.'
    },
    {
      icon: 'fa-clock',
      title: 'Serviço 3 - Atendimento Prioritário',
      description: 'Destaque a agilidade no atendimento, pontualidade de entrega e suporte dedicado que sua empresa oferece.'
    },
    {
      icon: 'fa-gem',
      title: 'Serviço 4 - Linha Premium',
      description: 'Exiba seus produtos de alto padrão ou pacotes exclusivos voltados a clientes que buscam a máxima qualidade.'
    },
    {
      icon: 'fa-handshake',
      title: 'Serviço 5 - Pacotes Corporativos',
      description: 'Mostre opções preparadas para atender empresas, grupos ou contratações de maior volume.'
    },
    {
      icon: 'fa-comments',
      title: 'Serviço 6 - Avaliação Gratuita',
      description: 'Ofereça um diagnóstico inicial ou orçamento sem compromisso para atrair novos contatos no seu site.'
    }
  ],

  // ==========================================================================
  // PERGUNTAS FREQUENTES (FAQ)
  // ==========================================================================

  faq: [
    {
      question: 'Como faço para agendar um horário ou orçamento?',
      answer: 'Você pode clicar em qualquer botão de WhatsApp nesta página ou preencher o formulário no final do site. Nossa equipe responderá em minutos!'
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Aceitamos Pix, cartões de crédito em até 12x, boleto bancário e transferência. Oferecemos condições especiais para pagamento à vista.'
    },
    {
      question: 'Onde fica localizada a empresa / onde os serviços são prestados?',
      answer: 'Realizamos atendimentos presenciais em nossa sede bem como atendimento online / entregas em todo o Brasil dependendo do seu nicho.'
    },
    {
      question: 'Quais são os horários de atendimento?',
      answer: 'Nosso atendimento funciona de Segunda a Sexta, das 08h às 18h, e aos Sábados das 09h às 13h via WhatsApp.'
    }
  ],

  // ==========================================================================
  // DEPOIMENTOS
  // ==========================================================================

  testimonials: [
    {
      text: 'Excelente atendimento! O profissionalismo e a agilidade da equipe superaram todas as minhas expectativas. Recomendo de olhos fechados!',
      name: 'Mariana Silva',
      role: 'Cliente Satisfeita',
      avatar: 'assets/images/avatar-1.svg',
      rating: 5
    },
    {
      text: 'Qualidade impecável do produto e atenção em cada detalhe. Com certeza voltarei a contratar os serviços no futuro!',
      name: 'Fernanda Oliveira',
      role: 'Cliente Frequente',
      avatar: 'assets/images/avatar-2.svg',
      rating: 5
    },
    {
      text: 'Transparência, pontualidade e resultado acima do esperado. Sem dúvidas a melhor escolha da região!',
      name: 'Lucas Santos',
      role: 'Cliente Corporativo',
      avatar: 'assets/images/avatar-3.svg',
      rating: 5
    }
  ],

  // ==========================================================================
  // PORTFOLIO / GALERIA
  // ==========================================================================

  portfolio: [
    { image: 'assets/images/portfolio-1.svg', category: 'saas', tag: 'Categoria 1', title: 'Exemplo de Trabalho Realizado', description: 'Descrição curta demonstrando o resultado obtido pelo cliente.' },
    { image: 'assets/images/portfolio-2.svg', category: 'design', tag: 'Categoria 2', title: 'Projeto de Alto Padrão', description: 'Foto detalhada do produto ou espaço da empresa.' },
    { image: 'assets/images/portfolio-3.svg', category: 'ecommerce', tag: 'Categoria 3', title: 'Transformação & Resultado', description: 'Registro visual do serviço concluído com sucesso.' },
    { image: 'assets/images/portfolio-4.svg', category: 'branding', tag: 'Categoria 1', title: 'Linha de Produtos Exclusiva', description: 'Demonstração visual do catálogo disponível para o cliente.' },
    { image: 'assets/images/portfolio-5.svg', category: 'saas', tag: 'Categoria 2', title: 'Atendimento Especializado', description: 'Exemplo de projeto entregue com máxima pontualidade.' },
    { image: 'assets/images/portfolio-6.svg', category: 'design', tag: 'Categoria 3', title: 'Especialidade da Casa', description: 'Destaque do principal diferencial competitivo do negócio.' }
  ],

  // ==========================================================================
  // CALCULADORA DE ORÇAMENTO 
  // ==========================================================================

  budgetCalculator: {
    title: 'Monte o Seu Orçamento',
    description: 'Selecione os recursos que você precisa e receba uma proposta personalizada no WhatsApp.',
    options: [
      { id: 'landing', label: 'Landing Page', price: 497, icon: 'fa-file-lines' },
      { id: 'speed', label: 'Otimização de Velocidade', price: 197, icon: 'fa-bolt' },
      { id: 'seo', label: 'Otimização SEO', price: 297, icon: 'fa-magnifying-glass-chart' },
      { id: 'whatsapp', label: 'Integração com WhatsApp', price: 147, icon: 'fa-brands fa-whatsapp' },
      { id: 'analytics', label: 'GA4 + Meta Pixel', price: 197, icon: 'fa-chart-simple' },
      { id: 'blog', label: 'Blog Integrado', price: 397, icon: 'fa-newspaper' },
      { id: 'cms', label: 'Painel CMS (editar conteúdo)', price: 597, icon: 'fa-gears' },
      { id: 'hosting', label: 'Hospedagem + Domínio (1 ano)', price: 360, icon: 'fa-server' }
    ],
    cta: 'Solicitar Proposta no WhatsApp'
  }
};