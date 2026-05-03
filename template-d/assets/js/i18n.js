/* BlueSky i18n: EN <-> PT toggle, zero-markup install.
   Default: EN. Persists choice in localStorage. */
(function () {
  const STORAGE_KEY = 'bsk_lang';
  const DEFAULT_LANG = 'en';

  // ---------- Translation dictionary ----------
  // Keys are exact EN trimmed text. Values are PT translations.
  const PT = {
    // ===== NAVBAR =====
    'Home': 'Início',
    'Services': 'Serviços',
    'Industries': 'Indústrias',
    'Case Studies': 'Cases',
    'About': 'Sobre',
    'Careers': 'Carreiras',
    'Sustainability': 'Sustentabilidade',
    'Contact': 'Contato',
    'Request a Proposal': 'Solicitar Proposta',
    'General Services': 'General Services',

    // ===== MEGAMENU SERVICES =====
    'Janitorial': 'Limpeza Profissional',
    'Recurring commercial cleaning programs': 'Programas recorrentes de limpeza comercial',
    'Pressure Washing': 'Lavagem de Alta Pressão',
    'Exterior high-pressure cleaning': 'Limpeza externa de alta pressão',
    'Window Cleaning': 'Limpeza de Vidros',
    'Interior & high-rise glass care': 'Vidros internos e fachadas em altura',
    'Carpet Cleaning': 'Limpeza de Carpetes',
    'Extraction & restoration': 'Extração e restauração',
    'Floor Stripping & Waxing': 'Decapagem e Enceramento',
    'Hard-surface restoration': 'Restauração de pisos rígidos',
    'Post-Construction': 'Pós-Obra',
    'Disaster recovery & turnover cleanup': 'Recuperação de desastres e entrega de obra',
    'Property Decommission': 'Descomissionamento de Imóveis',
    'Decommission & fog disinfect': 'Descomissionamento e desinfecção por fog',

    // ===== MEGAMENU INDUSTRIES =====
    'Corporate Offices': 'Escritórios Corporativos',
    'Class A / Class B environments': 'Ambientes Classe A / Classe B',
    'Medical & Healthcare': 'Médico e Saúde',
    'Clinics, medical offices, labs': 'Clínicas, consultórios, laboratórios',
    'Retail & Commercial': 'Varejo e Comércio',
    'Shopping centers & storefronts': 'Shoppings e lojas de rua',
    'Education': 'Educação',
    'Schools, colleges, training centers': 'Escolas, universidades, centros de treinamento',
    'Construction': 'Construção',
    'Developer & contractor partnerships': 'Parcerias com construtoras e empreiteiros',
    'Property Management': 'Administração Predial',
    'Multi-tenant & HOA portfolios': 'Multi-locatário e condomínios',

    // ===== HERO HOMEPAGE =====
    'BlueSky General Services': 'BlueSky General Services',
    'cleaning,': 'limpeza,',
    'executed at enterprise standard.': 'executada em padrão enterprise.',
    'A facility services partner for buildings that cannot fail: Class A offices, medical facilities, post-construction turnover, disaster recovery. Licensed, insured, bonded. Measured every shift.':
      'Um parceiro de serviços prediais para edifícios que não podem falhar: escritórios Classe A, instalações médicas, entrega pós-obra, recuperação de desastres. Licenciado, segurado, com fiança. Medido a cada turno.',
    'Explore Services': 'Ver Serviços',

    // Rotating words
    'Commercial': 'Comercial',
    'Residential': 'Residencial',
    'Medical': 'Médico',
    'Retail': 'Varejo',
    'Industrial': 'Industrial',

    // ===== METRICS =====
    'Commercial Clients': 'Clientes Comerciais',
    'Industry Experience': 'Anos de Indústria',
    'Emergency Response': 'Resposta Emergencial',
    'Multi-State Coverage': 'Cobertura Multi-Estadual',

    // ===== SERVICES SECTION =====
    'What We Do': 'O Que Fazemos',
    'Services built for buildings that cannot fail.': 'Serviços para edifícios que não podem falhar.',
    'Seven specialized programs, delivered by trained teams under measurable service-level standards. Choose one, or let us integrate them into a single facility contract.':
      'Sete programas especializados, executados por equipes treinadas sob padrões mensuráveis de nível de serviço. Escolha um, ou integre todos em um único contrato.',
    'Janitorial Services': 'Limpeza Profissional',
    'Recurring commercial programs (nightly, weekly, or custom frequency) calibrated to occupancy, traffic, and compliance.':
      'Programas comerciais recorrentes (noturnos, semanais ou frequência customizada) calibrados para ocupação, tráfego e compliance.',
    'Exterior surfaces, parking structures, sidewalks and building envelopes restored with calibrated high-pressure systems.':
      'Superfícies externas, estacionamentos, calçadas e envoltórias de edifícios restauradas com sistemas calibrados de alta pressão.',
    'Interior and high-rise glass: waterfed poles, rope access, full-height facades, delivered under safety program.':
      'Vidros internos e altura: hastes com água purificada, acesso por corda, fachadas completas, sob programa de segurança.',
    'Hot-water extraction, spot treatment, and full restoration, including water-damage recovery for carpeted environments.':
      'Extração com água quente, tratamento de manchas e restauração completa, incluindo recuperação de danos por água em carpetes.',
    'VCT, terrazzo, and concrete restoration (strip, scrub, seal, finish) on schedules that respect occupancy.':
      'Restauração de VCT, granilite e concreto (decapagem, polimento, selagem, acabamento) em horários que respeitam a ocupação.',
    'Rough, final, and turnover cleaning for active construction projects, with recovery response capabilities available when damage events escalate beyond normal closeout.':
      'Limpeza grosseira, fina e de entrega para obras ativas, com capacidade de resposta a danos quando eventos extrapolam o fechamento normal.',
    'Turnover-ready decommissioning for vacated, transitioning, or post-event commercial spaces, including final cleaning, removal coordination, and specialty treatment where required.':
      'Descomissionamento pronto-para-entrega de espaços comerciais vagos, em transição ou pós-evento, incluindo limpeza final, coordenação de remoção e tratamento especializado.',
    'Learn more': 'Saiba mais',

    // ===== INDUSTRIES SECTION =====
    'Who We Serve': 'Quem Atendemos',
    'Six industries. One standard of care.': 'Seis indústrias. Um padrão de cuidado.',
    'The compliance demands of a medical lab are not the compliance demands of a retail floor. Our programs are tuned to each environment, with the same measurable discipline.':
      'As exigências de compliance de um laboratório médico não são as mesmas de uma loja de varejo. Nossos programas são calibrados para cada ambiente, com a mesma disciplina mensurável.',
    'Class A and Class B environments (lobbies, executive floors, conference and amenity spaces), cleaned to the standards occupants notice.':
      'Ambientes Classe A e Classe B (lobbies, andares executivos, salas de reunião e amenidades), limpos no padrão que os ocupantes percebem.',
    'Medical offices, clinics, dental and veterinary facilities with disinfection protocols that respect HIPAA-adjacent expectations.':
      'Consultórios médicos, clínicas, instalações odontológicas e veterinárias com protocolos de desinfecção que respeitam expectativas adjacentes a HIPAA.',
    'Shopping centers, storefronts, restaurants, and service commerce, scheduled around customer traffic, never through it.':
      'Shoppings, lojas de rua, restaurantes e comércio de serviços, agendados em volta do tráfego de clientes, nunca atravessando ele.',
    'Schools, colleges, and training centers with standards-driven cleaning that protects student and staff environments.':
      'Escolas, faculdades e centros de treinamento com limpeza baseada em padrões que protege ambientes de alunos e funcionários.',
    'General contractors and developers get rough, final, and turnover cleans that get certificates of occupancy signed on time.':
      'Empreiteiras e construtoras recebem limpezas grosseiras, finais e de entrega que garantem certificados de ocupação assinados no prazo.',
    'Multi-tenant buildings, HOAs, and mixed-use portfolios: one partner, multiple properties, consolidated reporting.':
      'Edifícios multi-locatário, condomínios e portfólios de uso misto: um parceiro, múltiplas propriedades, relatórios consolidados.',
    'See programs': 'Ver programas',

    // ===== WHY US =====
    'Why BlueSky': 'Por Que a BlueSky',
    'Three commitments. Measured every shift.': 'Três compromissos. Medidos a cada turno.',
    'The facility services market is not short on vendors. What it lacks, and what we exist to deliver, is the discipline large operations expect: people trained to the standard, results reported against the standard, and technology that keeps the standard visible.':
      'O mercado de facility services não carece de fornecedores. O que falta, e o que existimos para entregar, é a disciplina que grandes operações esperam: pessoas treinadas no padrão, resultados reportados contra o padrão, e tecnologia que mantém o padrão visível.',
    'People first.': 'Pessoas em primeiro lugar.',
    'Every team member is background-checked, insured, and trained on written service-level standards, not verbal instructions. Supervisors walk every shift. Turnover is measured and reported to the client.':
      'Cada membro da equipe passa por verificação de antecedentes, é segurado e treinado em padrões escritos de nível de serviço, não em instruções verbais. Supervisores acompanham cada turno. A rotatividade é medida e reportada ao cliente.',
    'Standards, not slogans.': 'Padrões, não slogans.',
    'Scopes are written. Frequencies are written. Inspections are scored. When something falls out of standard, it is documented, escalated, and corrected within the same operating cycle, not the next contract review.':
      'Escopos são escritos. Frequências são escritas. Inspeções são pontuadas. Quando algo sai do padrão, é documentado, escalado e corrigido dentro do mesmo ciclo operacional, não na próxima revisão de contrato.',
    'Reporting that reports.': 'Relatórios que relatam.',
    'Every facility receives a monthly performance brief: scope coverage, inspection scores, incidents, response times, and completed extras. Your finance team knows what they paid for. Your operations team knows what they received.':
      'Cada instalação recebe um briefing mensal de performance: cobertura de escopo, notas de inspeção, incidentes, tempos de resposta e extras concluídos. Seu time financeiro sabe pelo que pagou. Seu time de operações sabe o que recebeu.',

    // ===== FEATURED CASE =====
    'Featured Case Study · Disaster Recovery': 'Case em Destaque · Recuperação de Desastre',
    'Hurricane Milton.': 'Furacão Milton.',
    'Thirty-plus team. Full restoration.': 'Equipe de 30+. Restauração completa.',
    'When Milton made landfall, we mobilized a multi-floor commercial recovery operation within 24 hours: debris removal, water extraction, industrial dehumidification, carpet and hard-surface restoration, and full reopening inside the owner\'s insurance window.':
      'Quando o Milton atingiu, mobilizamos uma operação de recuperação comercial multi-andar em 24 horas: remoção de escombros, extração de água, desumidificação industrial, restauração de carpetes e pisos rígidos, e reabertura completa dentro da janela do seguro do proprietário.',
    'Team on site': 'Equipe no local',
    'Response cycle': 'Ciclo de resposta',
    'Floor restoration': 'Restauração de andares',
    'Read the case study': 'Ler o case completo',

    // ===== CERTIFICATIONS =====
    'Credentials': 'Credenciais',
    'Licensed. Insured. Bonded. Certified to standards that large contracts require.':
      'Licenciada. Segurada. Caucionada. Certificada nos padrões que grandes contratos exigem.',
    'Licensed': 'Licenciada',
    'Insured': 'Segurada',
    'Bonded': 'Caucionada',
    'OSHA Compliant': 'Conforme OSHA',
    'ISSA Aligned': 'Alinhada à ISSA',
    'Green Seal Practice': 'Prática Green Seal',
    '24/7 Response': 'Resposta 24/7',

    // ===== TESTIMONIAL =====
    'Every result measured. Every shift reported. They cleaned what our previous vendor kept telling us they were cleaning.':
      'Cada resultado medido. Cada turno reportado. Eles limparam aquilo que nosso fornecedor anterior dizia estar limpando.',
    'Facility Operations Director': 'Diretor de Operações Prediais',
    'Multi-property corporate campus': 'Campus corporativo multi-propriedade',

    // ===== CAREERS TEASER =====
    'Work where the standard is the product.': 'Trabalhe onde o padrão é o produto.',
    'We hire people who want to measure their work: supervisors, technicians, account managers, and recovery specialists. Training is paid. Expectations are written. Performance is reviewed, not assumed.':
      'Contratamos pessoas que querem medir seu trabalho: supervisores, técnicos, gerentes de conta e especialistas em recuperação. Treinamento pago. Expectativas escritas. Performance revisada, não presumida.',
    'See how we work': 'Veja como trabalhamos',

    // ===== CTA BANNER =====
    'Ready to upgrade your facility services?': 'Pronto para elevar seus serviços prediais?',
    'Tell us about your building. We will send a scoped proposal (pricing, schedule, and service-level standard) within three business days.':
      'Conte sobre seu edifício. Enviaremos uma proposta detalhada (preço, cronograma e padrão de serviço) em até três dias úteis.',
    'Review Services': 'Revisar Serviços',

    // ===== FOOTER =====
    'A commercial facility services partner. Cleaning, maintenance, and recovery programs delivered under measurable standards across the Southeast United States.':
      'Um parceiro de serviços prediais comerciais. Programas de limpeza, manutenção e recuperação entregues sob padrões mensuráveis no Sudeste dos Estados Unidos.',
    'Company': 'Empresa',
    'Connect': 'Contato',
    'Corporate': 'Corporativo',
    'Retail': 'Varejo',
    'Property Mgmt': 'Adm. Predial',
    '© 2026 BlueSky General Services. All rights reserved.': '© 2026 BlueSky General Services. Todos os direitos reservados.',

    // Mobile drawer
    'Open menu': 'Abrir menu',
    'Close menu': 'Fechar menu',
  };

  const TRANSLATABLE_ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'CODE', 'NOSCRIPT']);
  const ORIGINAL_KEY = '__bsk_orig__';

  function t(text, lang) {
    if (lang === 'en') return text;
    const trimmed = text.trim();
    if (!trimmed) return text;
    const translated = PT[trimmed];
    if (!translated) return text;
    return text.replace(trimmed, translated);
  }

  function walkAndTranslate(root, lang) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const p = node.parentNode;
        if (!p || SKIP_TAGS.has(p.tagName)) return NodeFilter.FILTER_REJECT;
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    let n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach((node) => {
      if (node[ORIGINAL_KEY] === undefined) node[ORIGINAL_KEY] = node.nodeValue;
      node.nodeValue = lang === 'en' ? node[ORIGINAL_KEY] : t(node[ORIGINAL_KEY], lang);
    });

    // Attributes
    const all = root.querySelectorAll('*');
    all.forEach((el) => {
      TRANSLATABLE_ATTRS.forEach((attr) => {
        if (!el.hasAttribute(attr)) return;
        const cacheKey = `__bsk_orig_${attr}__`;
        if (el[cacheKey] === undefined) el[cacheKey] = el.getAttribute(attr);
        el.setAttribute(attr, lang === 'en' ? el[cacheKey] : t(el[cacheKey], lang));
      });
    });

    // <title>
    if (document.title) {
      if (document[ORIGINAL_KEY] === undefined) document[ORIGINAL_KEY] = document.title;
      document.title = lang === 'en' ? document[ORIGINAL_KEY] : t(document[ORIGINAL_KEY], lang);
    }
  }

  function injectStyles() {
    if (document.getElementById('bsk-i18n-style')) return;
    const css = `
.bsk-lang-toggle{display:inline-flex;align-items:center;gap:0;border:1px solid rgba(0,0,0,0.15);border-radius:999px;overflow:hidden;font-family:inherit;font-size:0.72rem;letter-spacing:0.08em;font-weight:600;background:transparent;margin-right:0.85rem;line-height:1;}
.bsk-lang-toggle button{appearance:none;background:transparent;border:0;padding:0.42rem 0.72rem;cursor:pointer;color:rgba(0,0,0,0.55);font-family:inherit;font-size:inherit;letter-spacing:inherit;font-weight:inherit;transition:background 0.15s ease,color 0.15s ease;}
.bsk-lang-toggle button:hover{color:rgba(0,0,0,0.9);}
.bsk-lang-toggle button.active{background:#1e3a8a;color:#fff;}
.navbar-links .bsk-lang-li{display:flex;align-items:center;}
.mobile-drawer .bsk-lang-toggle{margin:1rem 0 0;}
@media (max-width:880px){.navbar-links .bsk-lang-li{display:none;}}
`;
    const style = document.createElement('style');
    style.id = 'bsk-i18n-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function buildToggle(currentLang) {
    const wrap = document.createElement('div');
    wrap.className = 'bsk-lang-toggle';
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', 'Language');
    ['en', 'pt'].forEach((code) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.dataset.lang = code;
      b.textContent = code.toUpperCase();
      if (code === currentLang) b.classList.add('active');
      b.addEventListener('click', () => setLang(code));
      wrap.appendChild(b);
    });
    return wrap;
  }

  function injectToggle(currentLang) {
    // Desktop navbar
    const navList = document.querySelector('.navbar-links');
    if (navList && !navList.querySelector('.bsk-lang-toggle')) {
      const li = document.createElement('li');
      li.className = 'bsk-lang-li';
      li.appendChild(buildToggle(currentLang));
      const lastLi = navList.querySelector('li:last-child');
      if (lastLi) navList.insertBefore(li, lastLi);
      else navList.appendChild(li);
    }
    // Mobile drawer
    const drawer = document.querySelector('.mobile-drawer ul');
    if (drawer && !drawer.querySelector('.bsk-lang-toggle')) {
      const li = document.createElement('li');
      li.appendChild(buildToggle(currentLang));
      drawer.appendChild(li);
    }
  }

  function refreshToggleActive(lang) {
    document.querySelectorAll('.bsk-lang-toggle button').forEach((b) => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }

  let currentLang = DEFAULT_LANG;

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'pt') return;
    currentLang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.documentElement.setAttribute('lang', lang);
    walkAndTranslate(document.body, lang);
    refreshToggleActive(lang);
    document.dispatchEvent(new CustomEvent('bsk:lang-changed', { detail: { lang } }));
  }

  // Public API
  window.bskI18n = {
    translate: (text) => t(text, currentLang),
    getLang: () => currentLang,
    setLang,
  };

  function init() {
    let lang = DEFAULT_LANG;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'pt') lang = stored;
    } catch (e) {}
    currentLang = lang;
    injectStyles();
    injectToggle(lang);
    if (lang !== 'en') {
      document.documentElement.setAttribute('lang', lang);
      walkAndTranslate(document.body, lang);
    }
    document.dispatchEvent(new CustomEvent('bsk:lang-changed', { detail: { lang } }));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
