# Template-D · Changelog & Work Log

Cliente: **BlueSky General Services** (Marcus) — comercial cleaning enterprise, Sudeste dos EUA.
Branch: `template-d` (também publicada em `main` no GitHub).
Repo: `kortxpro/bluesky`.
Deploy: `https://bluesky-rev1.vercel.app/` (Vercel project separado, root directory `template-d/`).

---

## 1. Visão geral do template-d

Site enterprise multi-página construído do zero com design system editorial premium. 15+ páginas HTML estáticas, sem framework. Navy accent (`#1e3a8a`), tipografia Playfair Display (serif italic) + DM Sans (sans-serif), paleta mono pedra (stone-50 a stone-500 + black/charcoal/white).

### Páginas (16 totais)

**Root (8):**
- `index.html` — Home com hero rotator, métricas, 7 services, indústrias, why-us, featured Milton case, certificações, testimonial, careers teaser, CTA
- `services.html` — hub dos 7 serviços
- `industries.html` — 6 indústrias com fotos e detalhamento
- `projects.html` — case studies (Milton + 4 mini-cases)
- `about.html` — história/equipe
- `careers.html` — vagas + cultura
- `contact.html` — formulário (mockado, sem backend)
- `sustainability.html` — práticas verdes

**Services (7):**
- `services/janitorial.html` — Tampa/St Pete Airport mini-case
- `services/pressure-washing.html` — exterior/fachada
- `services/window-cleaning.html` — mixed access (rope/lift/ladder/pole)
- `services/carpet-cleaning.html` — extração + restauração
- `services/floor-care.html` — Floor Stripping & Waxing, Apple mini-case
- `services/post-construction.html` — disaster recovery anchor (Milton)
- `services/property-decommission.html` — fog disinfect / decommission

**Projects (2):**
- `projects/hurricane-milton.html` — case study completo
- `projects/orange-county-courts.html` — case study completo (rope access)

### Sistema de componentes

- **Navbar**: logo + 7 links + botão CTA + hamburger mobile
- **Mega-menu**: dropdown em Services e Industries, hover/focus
- **Mobile drawer**: 82% width, slide-in
- **Hero rotator**: palavra rotativa com slide-up + width animado (Commercial → Residential → Medical → Retail → Industrial)
- **Before/after slider**: clip-path drag interaction (sem JS lib externa)
- **Mini-case pattern**: 4 fotos + texto + 3 stats
- **Related-case section**: dark band com imagem/texto/CTA
- **Carrossel de hero**: opacity transitions com dots (Milton, OC)
- **Reveal on scroll**: IntersectionObserver

### Variáveis CSS (todas as 16 páginas)

```css
:root {
  --black: #1c1917; --charcoal: #292524;
  --stone-500: #78716c; --stone-400: #a8a29e; --stone-300: #d6d3d1;
  --stone-200: #e7e5e4; --stone-100: #f5f5f4; --stone-50: #fafaf9;
  --white: #ffffff;
  --accent: #1e3a8a; --accent-hover: #1e40af; --accent-soft: #dbeafe;
}
```

---

## 2. Acervo de imagens (assets/img/)

### Milton (recuperação de furacão, Out 2024)
- 14 fotos em `milton-*.jpg/jpeg` (root assets/img/) — lobby, debris, dehumidifiers, exterior, TV interview
- 4 fotos em `milton/capa/*.webp` — aerial, top-down, street-impact, street-people (capa do case)
- Pasta extra `services/post-construction/milton-*.jpeg` — debris-floor, exterior-damage, media, reception-floor, team-photo

### Service-specific
- `services/janitorial/airport-*.png` — 30+ fotos do Tampa/St Pete Airport (before/after singles + composites + library)
- `services/floor/apple-*.png` + `case[1-3]-*.png` — Apple retail + outras restaurações
- `services/windows/windows-*.png` + `boom-lift-*.jpeg` + `orange-county-courts-*.jpeg` — vidros
- `services/pressure/` — externos, fachadas
- `services/carpet/carpet-*.png` — extração
- `services/post-construction/*.png` — antes/depois
- `services/property-decommission/fog-disinfect-*.png` — desinfecção

### Hero / outras
- `hero-options/boom-lift.jpg`, `boom-lift-action.jpg`, `pressure-field.jpg`

### Vídeos (assets/video/)
- `hero-challenging-windows.mp4` (4.8MB)
- `milton-floods.mp4` (4.7MB)
- `orange-county-courts-rope-1.mp4` (1.1MB)
- `orange-county-courts-rope-2.mp4` (6.1MB)
- `orange-county-courts-rope-3.mp4` (4.7MB)

---

## 3. Histórico de mudanças (commits)

### Fase de construção inicial (não no git history desta branch)
- Estrutura base de 15 páginas
- Hero com rotator (várias iterações: typewriter rejeitado, slide-up aceito, layout shift corrigido com measureWidths + width locking)
- Photo refresh em todos os 6 serviços iniciais
- Before/after sliders adicionados
- Mini-case pattern criado (Apple, Kendra, Tampa)
- Mega-menu fixo (markup `<a><div></div></a>` corrigido pra `<a></a><div></div>` em 10 arquivos)
- 7º serviço criado: Property Decommission
- Hurricane Milton case page criada

### Phase A — Limpeza + fixes críticos (Task #20)
- Ajustes de copy
- Fix de overlap de seções

### Phase B — Refatoração megamenu (Task #21)
- Markup semântico correto
- Fix de bug onde clique dentro do megamenu disparava nav do parent

### Phase C — Polish (Task #22)
- Cards otimizados
- Fotos repetidas reduzidas
- Tag do Milton ajustada ("Tampa, Oct 2024" → "SE Florida, Oct 2024")
- Project cards relabeled de "See case →" pra "View capability →" (mais honesto sobre apontar pra mini-cases)

### Mudança de cor: verde → navy (commit retroativo no template-d)
- 3 hex values trocados em todos os arquivos:
  - `#166534` → `#1e3a8a` (--accent)
  - `#14532d` → `#1e40af` (--accent-hover)
  - `#dcfce7` → `#dbeafe` (--accent-soft)
- Justificativa: alinhar com nome BlueSky, padrão B2B (JLL/ABM/IBM), melhor contraste WCAG, não competir com fotos quentes

### Deploy Vercel (Task #23)
- Branch `template-d` criada local
- 160 arquivos commitados (`vercel.json` com cleanUrls + sitemap base)
- Push pra `main` no `kortxpro/bluesky` via fast-forward (`refs/heads/template-d:refs/heads/main`)
- Vercel project criado com Root Directory: `template-d`
- URL: `https://bluesky-rev1.vercel.app/`
- Workflow contínuo: editar local → `git push origin refs/heads/template-d:refs/heads/main` → Vercel auto-deploy

### Toggle EN/PT (Task #24) — implementado e revertido
- Implementação inicial:
  - `assets/js/i18n.js` self-contained (injeta botão + CSS + dicionário)
  - `<script src="...i18n.js">` em todas as 16 páginas
  - `localStorage.bsk_lang`, default EN
  - Hero h1 reestruturado com prefix/suffix spans pra ordem PT ("Limpeza para Escritórios,")
  - Array PT separada pras palavras rotativas (Escritórios, Residências, Hospitais, Lojas, Indústrias)
  - CSS `html[lang="pt"] .hero h1 { max-width: 26ch; }` pra evitar quebra de linha
- Reversão completa:
  - `i18n.js` deletado
  - script tag removida das 16 páginas
  - hero markup voltou ao original
  - rotate script voltou pra versão sem lang-switching
  - Site único idioma: inglês

### Diversificação de related-cases (sessão atual)
Antes: 7 service pages com Milton no related-case. Repetitivo.

Trocas aplicadas:
- `services/janitorial.html` → Tampa/St Pete Airport (`airport-2.png`)
- `services/floor-care.html` → Apple Retail (`apple-after-3.png`)
- `services/window-cleaning.html` → primeiro Pinellas County Utilities, depois corrigido (boom-lift)

Mantidos com Milton:
- `services/carpet-cleaning.html` — water extraction
- `services/pressure-washing.html` — exterior debris
- `services/property-decommission.html` — recuperação
- `services/post-construction.html` — seção dedicada Disaster Recovery (não related-case, é maior)

### Correções de cliente em window-cleaning
- "Kendra Scott" estava errado → corrigido pra "Pinellas County Utilities" (boom lift work)
- Adicionado novo case "Orange County Clerk of Courts · Rope Access" (case separado, não substituiu Pinellas)

### Industries — fotos 404 corrigidas
- Retail & Commercial: Unsplash photo 1567449303078 (404) → 1481437156560 (shopping moderno)
- Education: Unsplash photo 1523050854058 (404) → 1497633762265 (biblioteca acadêmica)
- Outras 4 indústrias verificadas (corporate, medical, construction, property) — todas 200

### Careers teaser foto trocada
- Antes: `milton-tv-interview-group.jpg` (entrevista TV durante Milton — confundia "Carreiras = Disaster Recovery")
- Depois: `services/post-construction/milton-team-photo.jpeg` — equipe inteira BlueSky reunida (30+ pessoas uniforme amarelo/preto em lobby)
- Justificativa: visualmente forte, faz sentido com "Work where the standard is the product"

### Orange County Clerk of Courts — 5º case study (Task #25)
Criação completa nos moldes do hurricane-milton.

**Arquivos novos:**
- `projects/orange-county-courts.html` — case page completa
- 7 fotos em `assets/img/services/windows/orange-county-courts-*.jpeg` (facade, tower, rope-1 a rope-5)
- 3 vídeos em `assets/video/orange-county-courts-rope-[1,2,3].mp4` (1.1MB + 6.1MB + 4.7MB)

**Estrutura da case page:**
1. Hero carrossel (4 fotos do prédio + rope access, autorotate 4.5s)
2. Meta strip (Orlando FL, multi-story, rope access, off-hours)
3. Narrative dupla (Challenge: prédio público + alturas / Scope: rope access program)
4. Results grid (Multi/Rope/Zero/OSHA)
5. **Case-video carrossel** com 3 clips e setinhas prev/next + counter "01/03"
   - `preload="none"` em vídeos inativos pra não baixar 12MB upfront
   - Active video plays, others pause
6. Galeria horizontal scroll-snap (7 fotos)
7. Pull quote em fundo preto
8. Related services (Window Cleaning + Pressure + Janitorial)
9. CTA banner

**Sizing do case-video** (tunado depois):
- min-height: 760px (era 560)
- grid-template-columns: 0.78fr 1fr (mais estreito que o body)
- Mobile: aspect-ratio 3/4 (era 16/10) — respeita formato vertical dos vídeos WhatsApp

### projects.html — 5º card adicionado
- 5 cases reais agora: Milton, Apple, Tampa Airport, Pinellas County Utilities, Orange County Clerk of Courts
- 1 placeholder restante (Education - private school summer reset)

### window-cleaning.html mini-case — foto trocada
- Removida `windows-3.png` (Kendra Scott jewelry store, claramente Kendra)
- Adicionada `orange-county-courts-rope-3.jpeg` (rope access em ação)
- Tag mudou de "Retail Glass Program / Mixed Access" pra "Mixed Access Glass Program"
- Stats reformulados: "Mixed access" / "High-rise ready" / "OSHA-ready"

### janitorial.html mini-case — reestruturação (Task #26)
Problema: arquivos `airport-*-detail-*` são imagens compostas (antes/depois lado-a-lado dentro do mesmo PNG). Tentar pareá-los como figuras separadas criava slots incompatíveis.

Solução:
- **Comparison 01** mantém 2 figuras (before-1 + after-1, fotos separadas reais do banheiro completo)
- **Comparisons 02-04** vira 1 figura única com composite:
  - 02 — Sink edge: `airport-after-detail-1.png`
  - 03 — Chrome faucet: `airport-after-detail-2.png`
  - 04 — Toilet bowl: `airport-after-detail-3.png`

CSS adicionado: `.case-pair--composite` modifier (single column, sem crop, sem overlay gradient)

---

## 4. Comportamentos específicos / quirks

### Hero rotator (index.html)
- `measureWidths()` mede largura de cada palavra antes da animação pra evitar layout shift
- `setInterval(3500ms)` cicla; `out` slide up 420ms, depois `pre` repositiona embaixo, então remove pra slide novo entrar
- `.rotate-host` tem `margin-right: 0.18em` pra dar espaço da próxima palavra ("cleaning,")

### Mega-menu
- Hover/focus-within abre painel
- Painel é sibling de `<a>`, não nested (corrigido em 10 arquivos)
- Dropdown grid 2 colunas, 520px min-width

### Before/after slider
- Clip-path em pseudo-elemento ::after sobre a imagem AFTER
- Drag handler atualiza --pos CSS variable em %
- Mantém 50/50 split inicial

### Carrossel de hero (Milton, OC)
- Slides absolute positioned
- `setInterval(4500ms)` rotaciona via classes
- Dots clicáveis pra ir direto

### Vídeo carrossel (OC case)
- 3 vídeos stacked com opacity
- Apenas active toca; outros pausam
- `preload="metadata"` no first, `preload="none"` nos outros
- Setinhas prev/next com `currentTime = 0` pra reiniciar do começo

### Word rotator EN/PT (REMOVIDO)
- Ficou history mas código foi revertido
- Se reimplementar: array PT separada + prefix/suffix dinâmico no h1

---

## 5. Workflow de deploy

### Push pra produção
```bash
git -C /Users/ildodaniel/Desktop/bluesky push origin refs/heads/template-d:refs/heads/main
```
- Faz fast-forward `template-d` local → `main` remoto
- Vercel auto-deploya em ~30s

### Verificação
```bash
curl -sIL -o /dev/null -w "%{http_code}\n" "https://bluesky-rev1.vercel.app/"
```

---

## 6. Pendências conhecidas

- [ ] Form de contato é mockado (sem backend) — produção precisa Formspree/Netlify Forms
- [ ] 2 case study pages dedicadas faltando: Apple, Tampa Airport (Phase 2 — Task #18)
- [ ] Vídeos pesam ~5MB cada — vale comprimir com ffmpeg quando disponível
- [ ] Logo final pendente (atualmente texto "Blue<em>Sky</em>" no navbar)
- [ ] Permissões do Marcus pra usar nomes Apple/Pinellas County Utilities/Orange County Clerk of Courts em produção
- [ ] Conteúdo PT (toggle removido — pode reimplementar futuramente)
- [ ] 1 placeholder card em projects.html (Private school summer reset)

---

## 6A. Refinamento de serviços — fase atual (late April / early May 2026)

Nesta fase o foco saiu de experimentos paralelos e ficou concentrado no `template-d` como base oficial. A linha adotada foi:

- refino sem mudar pesado a estrutura
- mais prova visual e menos “layout conceitual”
- uso de mídia real sempre que possível
- completar com imagens externas apenas onde o acervo real ainda não sustenta a página

### Estrutura final de serviços adotada
1. Janitorial Services
2. Pressure Washing
3. Window Cleaning
4. Carpet Cleaning
5. Floor Stripping & Waxing
6. Post-Construction
7. Property Decommission

### Regras que passaram a guiar o projeto
- `Property Decommission` é o serviço principal; `Fog Disinfect` fica dentro dele como capability
- `Post-Construction` é o serviço principal; `Disaster Recovery` aparece dentro dele como capability
- `Window Cleaning` continua principal; `Rope Access` e `Boom Lift` entram como formas de acesso/capability
- `Before/After` só entra quando o pareamento realmente faz sentido
- Quando não há `before/after` forte, a página deve usar mini-case de execução/processo
- O padrão forte de ordem passou a ser:
  - `What's Included`
  - mini-case ou prova principal
  - `Our Process`
  - library / prova complementar

### Janitorial (`services/janitorial.html`)
- Hero passou a usar imagem explicativa externa mais clara
- Mini-case do aeroporto foi refeito com pares reais por numeração:
  - `before 1 / after 1`
  - `before 2 / after 2`
  - `before 3 / after 3`
  - `before 4 / after 4`
- Foi testado slider igual ao de pressure washing, mas a direção final voltou para `before` e `after` lado a lado
- A `Janitorial Library` virou apoio visual institucional e não mais uma mistura confusa de imagens antigas

### Pressure Washing (`services/pressure-washing.html`)
- Mini-case principal usa 4 pares
- Ordem reestruturada:
  - `What's Included`
  - `Pressure Washing Mini-Case`
  - `Our Process`
  - `Pressure Washing Library`
- Library foi refinada várias vezes para evitar repetição do mini-case
- Hero passou por várias trocas; em um momento usou imagem enviada pelo cliente
- Página chegou a ficar em branco por script de slider quebrado no final e foi corrigida

### Window Cleaning (`services/window-cleaning.html`)
- Hero atualizado com foco em rope access
- A página foi redirecionada para mini-case de execução, não `before/after`
- Mini-case final:
  - `Retail Glass Program / Mixed Access`
  - destaca `Rope Access / Boom Lift`
- `Window Cleaning Library` foi adicionada com mistura de:
  - imagens externas fortes de rope access
  - imagens reais de boom lift
- `Four Steps` foi reescrito para altura, acesso e método

### Carpet Cleaning (`services/carpet-cleaning.html`)
- Página reconstruída de forma mais enxuta
- Hero passou a usar imagem externa mais legível de carpet
- Mini-case ficou propositalmente curto com 2 imagens reais
- Foi adicionada uma library curta, complementar, sem inflar artificialmente a prova
- A lógica adotada foi tratar carpet como recovery/presentation service, não forçar um `before/after` fraco

### Floor Care (`services/floor-care.html`)
- Apple virou o mini-case principal da página
- Estrutura reordenada para:
  - `What's Included`
  - mini-case da Apple
  - `Our Process`
  - `Before/After` com os outros casos
- O slider geral deixou de competir com o mini-case principal
- `Lobby restoration` não se aplica aqui; a força desta página é o caso Apple
- Hero virou ponto sensível: várias trocas foram testadas entre stock e mídia local; esse hero ainda pode precisar de nova curadoria
- A página chegou a ficar em branco por script de slider quebrado no final e foi corrigida

### Post-Construction (`services/post-construction.html`)
- `Post-Construction` consolidado como serviço principal
- `Disaster Recovery` foi mantido como capability interna, ancorado no case Hurricane Milton
- Hero foi reposicionado para vender closeout / turnover / entrega, não desastre como headline principal
- `Lobby restoration` foi movido para a última posição do bloco `Before/After`
- A página chegou a ficar em branco por script de slider quebrado no final e foi corrigida

### Property Decommission (`services/property-decommission.html`)
- Nome principal corrigido no conteúdo para `Property Decommission`
- `Fog Disinfect` saiu do headline principal da página e passou a ser capability/subescopo
- Foi criada `Property Decommission Library`
- A library segue lógica híbrida:
  - 1 imagem real de fogging
  - imagens externas de vacancy / turnover / handoff
- Esta página ainda depende de mais acervo real para subir o nível da prova

### Problemas técnicos corrigidos nesta fase
- `services/pressure-washing.html` — branco por script quebrado no final
- `services/floor-care.html` — branco por script quebrado no final
- `services/post-construction.html` — branco por script quebrado no final

### Estado editorial/estrutural que ainda exige revisão
- `services.html` ainda precisa de limpeza completa de nomenclatura:
  - ainda sobrou `Post-Construction & Disaster Recovery`
  - ainda sobrou `Property Decommission & Fog Disinfect`
- alguns megamenus ainda usam subtítulos antigos:
  - `Disaster recovery & turnover cleanup`
  - `Decommission & fog disinfect`
- `projects.html` ainda mistura case study real com páginas de serviço
- `floor-care` hero ainda não está fechado
- `property-decommission` ainda precisa de mais prova real

### Decisões que a equipe da BlueSky ainda precisa tomar
- logo final
- fluxo de contato:
  - só `Request a Proposal`
  - formulário
  - telefone/e-mail
  - ou botão flutuante de WhatsApp
- nome da seção `Industries`
- manter ou não a página `Careers`
- logos de clientes / governos / empresas atendidas para uma futura seção `Trusted By`
- envio de documentações:
  - licenses
  - certifications
  - insured / bonded
  - capability statement
  - material institucional/comercial

---

## 7. Convenções de código

- HTML estático (sem framework, sem build step)
- CSS inline em `<style>` em cada página (não compartilhado entre arquivos)
- JS inline em `<script>` no fim do body
- Classes BEM-ish (`.case-pair`, `.case-pair--composite`, `.case-shot`, `.case-shot-meta`)
- Imagens em `assets/img/<service>/<filename>` ou `assets/img/<filename>` pro root
- Vídeos em `assets/video/`
- IDs apenas onde necessário (carrosséis, drawer, hamburger)
- Reveal animation via `.reveal` + IntersectionObserver
- Delay via `data-delay="1|2|3|4|5"` (CSS handles transition-delay)

---

## 8. URLs e referências externas

- Site: https://bluesky-rev1.vercel.app/
- Repo: https://github.com/kortxpro/bluesky/tree/main/template-d
- Branch original: https://github.com/kortxpro/bluesky/tree/template-d
- Email: contact@blueskygeneralserv.com
- Tel: (781) 558-3458
- Instagram: @bluesky_clean_service
- Documento complementar de continuidade local: `/Users/ildodaniel/Desktop/bluesky/README-STATUS.md`

---

*Última atualização: 2026-05-03*
