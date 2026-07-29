# Landing Page Template — Guia de Customização

## 1. Personalização via `js/site-config.js` (recomendado)

Edite apenas este arquivo para alterar a maioria dos dados do site:

```js
brand: {
    name: 'Sua Empresa',              // Nome da empresa
    nameHtml: 'SUA<strong class="brand-accent">EMPRESA</strong>', // Nome com destaque
    phone: '(11) 93437-6059',          // Telefone para exibição
    phoneRaw: '5511934376059',         // Telefone para links (só números)
    email: 'contato@suaempresa.com.br',
    address: 'Av. Principal do Seu Bairro, 1000 - Cidade / UF',
    hours: 'Seg a Sex: 08h às 18h | Sáb: 08h às 12h',
    foundedYear: 2016,                  // Usado para calcular "X anos de experiência"
    employees: 12
}
```

Outras seções configuráveis:
- `social` — Links de WhatsApp, Instagram, LinkedIn, Facebook, YouTube
- `seo` — Title, description, OG tags, canonical URL, favicon
- `whatsappMessages` — Textos padrão para cada botão do WhatsApp
- `whatsAppPopup` — Ativar/desativar popup de boas-vindas e tempo de delay
- `form` — Método de envio: `'whatsapp'` (padrão), `'emailjs'` ou `'formspree'`
- `analytics` — Ativar/desativar GA4, GTM, Meta Pixel (insira os IDs diretamente)
- `sections` — Mostrar/ocultar seções (`true`/`false`)
- `stats` — Números da seção de estatísticas
- `services`, `faq`, `testimonials`, `portfolio`, `plans` — Conteúdo dinâmico
- `budgetCalculator` — Opções e preços da calculadora de orçamento

### Exemplo: Configurar formulário para EmailJS

```js
form: {
    method: 'emailjs',
    emailjs: {
        serviceId: 'service_xxxxx',
        templateId: 'template_xxxxx',
        userId: 'user_xxxxx'
    }
}
```

### Exemplo: Ativar Analytics

```js
analytics: {
    enabled: true,
    googleTagManagerId: 'GTM-XXXXXXX',
    googleAnalyticsId: 'G-XXXXXXXXX',
    metaPixelId: '1234567890'
}
```

O preloader (tela de carregamento) pode ser desabilitado por completo — inclusive na troca de temas — com a opção:

```js
performance: {
    preloader: false,  // true = mostra preloader na troca de tema, false = nunca mostra
    // ... demais opções
}
```

A seção de orçamento (calculadora) vem desabilitada por padrão (`orcamento: false` em `sections`).
Para ativá-la, mude para `orcamento: true`.

## 2. Paleta de Cores, Modo e Fontes (para sites de clientes)

Para fixar a identidade visual do cliente (sem widget de troca de temas), use a seção `theme` no `site-config.js`:

```js
theme: {
    // Modo: '' (permite alternar), 'dark' (fixo escuro), 'light' (fixo claro)
    mode: 'dark',

    // Paleta fixa — preencha para desativar o Niche Switcher
    palette: {
        primary: '#2563eb',
        primaryText: '#60a5fa',
        accent: '#0ea5e9',
        gradPrimary: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
        gradText: 'linear-gradient(135deg, #ffffff 30%, #93c5fd 60%, #38bdf8 100%)',
        glow: 'rgba(37, 99, 235, 0.35)'
    },

    // Fontes customizadas (opcional)
    fonts: {
        heading: "'Plus Jakarta Sans', sans-serif",
        body: "'Inter', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap'
    }
}
```

Quando `palette` está preenchido, o widget Niche Switcher desaparece automaticamente.
Quando `mode` é `'light'` ou `'dark'`, o botão de alternar modo claro/escuro some.

**Importante:** se trocar a fonte, atualize também o link do Google Fonts no `<head>` do `index.html` (linha 22).

## 3. Rebuild do JS Bundle

Após editar qualquer arquivo em `js/`, reconstrua o bundle:

```powershell
npm run build
```

Certifique-se de ter as dependências instaladas:

```powershell
npm install
```

## 4. Estrutura de Arquivos

```
/
├── index.html                     # Página principal
├── politica-de-privacidade.html   # Política de privacidade
├── obrigado.html                  # Página de agradecimento
├── css/
│   ├── variables.css              # Design tokens, variáveis, reset
│   ├── components.css             # Componentes reutilizáveis (navbar, botões, etc)
│   ├── sections.css               # Estilos específicos de cada seção
│   └── themes.css                 # Light mode e overrides de tema
├── js/
│   ├── site-config.js             # CONFIG — edite aqui os dados
│   ├── engine.js                  # Injeção de dados no HTML
│   ├── performance.js             # Otimizações (lazy load, prefetch)
│   ├── theme-switcher.js          # Preloader, navbar, troca de temas
│   ├── animations.js              # Canvas particles, typewriter, scroll reveals
│   ├── components.js              # Filtros, carrossel, FAQ, formulário, cookies
│   ├── conversion.js              # WhatsApp widget, calculadora, analytics
│   ├── script.js                  # Orquestrador (chama todos os init*)
│   └── bundle.js                  # BUNDLE MINIFICADO (gerado, não editar)
├── assets/
│   ├── fontawesome/               # Ícones auto-hospedados
│   ├── images/                    # SVGs do hero, about, portfolio, avatares
│   └── fonts/                     # Fontes locais (fallback)
├── sitemap.xml
├── robots.txt
├── vercel.json                    # Config de deploy Vercel
└── AGENTS.md                      # Este arquivo
```

## 5. Navbar (Menu de Navegação)

Os links do menu estão no `index.html` dentro de `<ul class="nav-menu">`. Para adicionar/remover links:

```html
<li><a href="#beneficios" class="nav-link">Benefícios</a></li>
```

A seção de orçamento (`#orcamento`) só aparece no menu se `orcamento: true` em `sections`.

## 6. Footer e Redes Sociais

O footer usa dados do `site-config.js`:
- **Nome/logo** — vem de `brand.nameHtml`
- **Redes sociais** — links em `social.*` (whatsapp, instagram, linkedin, facebook, youtube)
- **Copyright** — gerado automaticamente com o ano atual e nome da marca
- **Política de Privacidade** — link para `politica-de-privacidade.html`

## 7. Imagens para Substituir

| Arquivo | Descrição |
|---|---|
| `assets/images/hero-graphic.svg` | Ilustração principal do hero (LCP candidate) |
| `assets/images/about-graphic.svg` | Imagem da seção "Sobre" |
| `assets/images/portfolio-1..6.svg` | 6 imagens do portfólio |
| `assets/images/avatar-1..3.svg` | Avatares de depoimentos |
| `assets/favicon.svg` | Favicon do site |

## 8. Estilos CSS

Os estilos seguem uma arquitetura modular:
- **`variables.css`** — Altere cores, fontes, bordas, sombras e transições globais
- **`components.css`** — Modifique navbar, botões, cookie banner, WhatsApp widget
- **`sections.css`** — Estilos por seção (hero, benefícios, planos, contato etc)
- **`themes.css`** — Overrides do light mode (quase todos com `!important`)

O CSS crítico está inline no `<head>` do `index.html` para first paint rápido. Os arquivos externos carregam de forma assíncrona.

**Atenção:** O CSS inline duplica parcialmente os arquivos `css/`. Ao alterar cores, variáveis ou estilos do hero/navbar nos arquivos CSS, verifique também o bloco inline no `<head>` do `index.html` para manter a consistência.

## 9. Comandos Úteis

```powershell
# Rebuild do bundle JS (após editar arquivos em js/)
npm run build

# Verificar sintaxe do bundle
npm run build:check

# Verificar tamanho dos assets
Get-ChildItem -Recurse assets/ | Measure-Object -Property Length -Sum

# Deploy via Vercel (se configurado)
vercel --prod
```

## 10. Performance

O template já inclui:
- Bundle JS único minificado
- Lazy loading de imagens (exceto hero)
- Preload de fontes e hero image
- Canvas particles pausados quando a aba não está ativa
- 3D tilt apenas em desktop (hover + pointer)
- CSS assíncrono não bloqueante
- Preloader apenas na troca de temas (não no load inicial)
