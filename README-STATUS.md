# Bluesky - Status do Projeto (04/03/2026)

## O que foi feito (todas as sessoes)

### Sessao 1 (original)
- Logo real do cliente (cropped-bluesky.png) em todos os 12 arquivos HTML
- Imagens genericas trocadas por fotos tematicas (Unsplash)
- Script fix_overlaps.py eliminou duplicatas entre templates

### Sessao 2
- Corrigidas 5 imagens 404
- Template C hero (piloto) substituido por window cleaners
- Template B hero substituido

### Sessao 3
- Template B: 3 hero backgrounds trocados por imagens de limpeza
- Template B: overlay clareado para mostrar melhor as imagens
- Template B: logos aumentadas (56px navbar)

### Sessao 4
- **Marcus Rebello removido** de todos os 12 arquivos (substituido por "our founder", "BlueSky's founder", etc.)
- **Cidades especificas removidas** (Orlando, Tampa, Daytona, etc.) → "Southeast United States", "across the Southeast"
- **Logos padronizadas**: navbar 60px, footer 44px em TODOS os 3 templates
- **~15 imagens genericas substituidas** por fotos relacionadas a limpeza:
  - Imagens de "team collaboration" → trabalhadores limpando
  - Imagens de "data reporting" → spray bottles / produtos de limpeza
  - Imagens de "green plant" → spray bottles eco-friendly
  - Imagem duplicada no template-a/index.html corrigida
- **Zero sobreposicao** entre templates confirmada
- **Zero imagens 404** confirmado
- **Zero duplicatas** dentro do mesmo arquivo

### Sessao 5 (atual)
- **TODAS as referencias geograficas removidas** (Southeast, Florida, Alabama, Georgia, United States, nationwide, regional, multiple states) → textos genericos
- **Template B: paleta de cores reformulada** — navy+gold (#080e1a/#d4a54a) → blue-themed (#0c1929/#38bdf8) para combinar com logo BlueSky
  - Backgrounds: #0c1929 (dark), #0f2035 (mid), #162d4a (lighter)
  - Accent: #38bdf8 (sky blue) substitui gold em todos os 4 arquivos
  - Hover: #0ea5e9 substitui #c4952e
  - Todos os rgba(212,165,74) → rgba(56,189,248)
- **Imagem pressure washing corrigida** no template-b/services.html → URL fornecida pelo cliente (myshyft.blob)
- **Service Areas → Our Services** nos footers de contact (Templates A e B)
- Scripts utilitarios adicionados: fix_geography.py

## Imagens por template
- Template A: 18 imagens unicas
- Template B: 13 imagens unicas
- Template C: 16 imagens unicas

## Notas tecnicas
- Unsplash API napi: URLs com formato photo-TIMESTAMP-HASH (images.unsplash.com)
- Imagens premium (plus.unsplash.com) NAO funcionam com images.unsplash.com
- Claude nao consegue processar imagens do Unsplash para preview visual (erro 400)
- IDs curtos da API NAO funcionam como URL direta — precisa do ID completo photo-XXXX
- Scripts utilitarios: fix_overlaps.py, fix_cities.py, fix_images.py

## Estrutura dos arquivos
```
bluesky/
  template-a/  (index.html, services.html, about.html, contact.html)
  template-b/  (index.html, services.html, about.html, contact.html)
  template-c/  (index.html, services.html, about.html, contact.html)
  assets/img/cropped-bluesky.png  (logo do cliente)
  fix_overlaps.py, fix_cities.py, fix_images.py  (scripts utilitarios)
  test-imgs/, test-imgs2/  (imagens de teste - pode deletar)
```

---

# Bluesky - Status do Projeto (04/25/2026)

## Direcao atual
- O foco principal saiu de exploracoes em templates paralelos e ficou concentrado no `template-d`
- O `template-d` e a base oficial de trabalho
- A estrategia adotada foi `refino sem mudar pesado a estrutura`
- O objetivo visual atual e:
  - site com cara mais real e menos template
  - prova visual distribuida por servico
  - home e paginas de servico com mais credibilidade
  - usar midia real sempre que possivel
  - usar imagens externas so para completar onde o acervo real ainda nao sustenta a pagina

## Regras de trabalho que ficaram claras
- Nao reinventar o layout inteiro do `template-d`
- Nao mexer pesado na arquitetura quando nao for necessario
- Cada servico deve ter:
  - hero forte e legivel
  - prova visual coerente com a natureza do servico
  - mini-case ou bloco de prova quando fizer sentido
  - library de apoio quando houver material suficiente
- `Before/After` so entra quando o pareamento realmente faz sentido
- Quando `before/after` nao for forte, usar mini-case de execucao/processo em vez de forcar comparacao
- `Property Decommission` e servico principal
- `Fog Disinfect` fica dentro de `Property Decommission` como capability / subservico
- `Post-Construction` e servico principal
- `Disaster Recovery` fica dentro de `Post-Construction` como capability / prova
- `Window Cleaning` permanece principal
- `Rope Access` aparece como capability dentro de `Window Cleaning`, nao como servico separado

## Backup e area de experimento
- Backup criado de `template-d` em:
  - `backups/template-d-2026-04-22`
- `template-codex` foi usado como area de teste em um momento, mas a orientacao final foi ignorar essa linha e seguir so no `template-d`

## Estrutura final de servicos adotada
1. `Janitorial Services`
2. `Pressure Washing`
3. `Window Cleaning`
4. `Carpet Cleaning`
5. `Floor Strip & Waxing`
6. `Post-Construction`
7. `Property Decommission`

## Midias e logica por servico
- `Janitorial`
  - hero generico explicativo funciona bem
  - mini-case do aeroporto usa arquivos pareados por numero
  - library pode usar imagens externas de apoio institucional
- `Pressure Washing`
  - hero pode ser externo
  - mini-case principal usa slider `before/after`
  - library deve evitar repetir imagens do bloco principal
- `Window Cleaning`
  - sem forcar `before/after`
  - mini-case deve mostrar execucao e mixed access
  - `Rope Access / Boom Lift` aparece como capability
- `Carpet Cleaning`
  - pouco acervo real
  - pagina deve ficar mais enxuta
  - mini-case curto com 2 imagens reais
  - library curta e complementar
- `Floor Care`
  - Apple e o mini-case principal
  - outros casos entram no `before/after`
- `Post-Construction`
  - hero deve vender closeout / handoff / entrega
  - `Disaster Recovery` aparece abaixo como capability com ancora no caso Milton
- `Property Decommission`
  - acervo real ainda fraco
  - pagina usa abordagem hibrida:
    - 1 imagem real de fogging
    - imagens externas de vacancy / turnover / handoff

## Arquivos alterados nesta fase
- `template-d/index.html`
- `template-d/services.html` (pode ainda precisar de limpeza complementar de nomenclatura em alguns pontos)
- `template-d/services/janitorial.html`
- `template-d/services/pressure-washing.html`
- `template-d/services/window-cleaning.html`
- `template-d/services/carpet-cleaning.html`
- `template-d/services/floor-care.html`
- `template-d/services/post-construction.html`
- `template-d/services/property-decommission.html`
- varios assets dentro de:
  - `template-d/assets/img/services/janitorial/`
  - `template-d/assets/img/services/pressure/`
  - `template-d/assets/img/services/windows/`
  - `template-d/assets/img/services/carpet/`
  - `template-d/assets/img/services/post-construction/`
  - `template-d/assets/img/services/property-decommission/`

## Home (`template-d/index.html`)
- Ajustado o card de `Property Decommission` para aparecer so como `Property Decommission`
- `Fog Disinfect` saiu do nome principal
- Ajustado o card de `Post-Construction` para aparecer so como `Post-Construction`
- `Disaster Recovery` saiu do nome principal
- Trocas de imagens feitas em momentos anteriores:
  - `Janitorial Services` passou a usar a foto `after 4` do banheiro
  - `Pressure Washing` passou a usar imagem real
  - `Post-Construction` passou a usar foto real

## Janitorial (`template-d/services/janitorial.html`)
- Hero trocado para imagem externa gratuita que explica melhor o servico
- Ordem da pagina definida como:
  - `What's Included`
  - mini-case do aeroporto
  - `Our Process`
  - `Janitorial Library`
- Mini-case do aeroporto:
  - usa pares reais pelo nome dos arquivos
  - `before 1` com `after 1`
  - `before 2` com `after 2`
  - `before 3` com `after 3`
  - `before 4` com `after 4`
- Foi testado um modelo de slider igual ao de pressure washing, mas o usuario nao gostou
- O mini-case foi revertido para `before` e `after` lado a lado
- Library:
  - saiu da mistura de imagens antigas
  - foi convertida para imagens externas de apoio institucional

## Pressure Washing (`template-d/services/pressure-washing.html`)
- Pagina recebeu:
  - hero
  - mini-case `before/after`
  - process
  - `Pressure Washing Library`
- Ordem final ajustada para:
  - `What's Included`
  - mini-case `before/after`
  - `Our Process`
  - library
- Mini-case usa 4 casos:
  - `before 1 / after 1`
  - `before 2 / after 2`
  - `before 3 / after 3`
  - `pressure wash before 1.jpeg / pressure washer after 1.jpeg`
- Library foi refinada varias vezes para evitar repeticao
- Hoje a library usa uma mistura mais forte de imagens externas e 1 imagem real
- Hero:
  - varias trocas foram testadas
  - em um ponto foi usada imagem enviada pelo usuario (`wet-inc`)
- Problema tecnico resolvido:
  - script do slider estava quebrado e deixando a pagina em branco
  - foi normalizado

## Window Cleaning (`template-d/services/window-cleaning.html`)
- Hero trocado para imagem externa melhor de `rope access`
- Mini-case foi reconstruido para nao fingir `before/after`
- Mini-case atual:
  - `Retail Glass Program / Mixed Access`
  - destaca `Rope Access / Boom Lift`
  - usa combinacao de assets locais `windows-*` e fotos reais de boom lift
- `Four Steps` reescrito com linguagem de acesso/elevacao
- `Window Cleaning Library` adicionada com:
  - imagens externas fortes de rope access
  - imagens reais suas de boom lift
- Textos de `industries`, `related case` e `CTA` corrigidos

## Carpet Cleaning (`template-d/services/carpet-cleaning.html`)
- Pagina estava fraca e generica
- Foi adicionada uma estrutura mais contida:
  - mini-case
  - process reescrito
  - library curta
- Mini-case:
  - hoje ficou com 2 imagens reais apenas
  - isso foi proposital para evitar repeticao
- Hero:
  - trocado para imagem externa que mostra carpete de forma mais clara
- Library:
  - curta
  - complementar
  - mistura 1 imagem real e 2 externas

## Floor Care (`template-d/services/floor-care.html`)
- Apple foi definido como mini-case principal
- A estrutura foi reorganizada para:
  - `What's Included`
  - mini-case da Apple
  - `Our Process`
  - `Before/After` com outros casos
- O bloco de comparacao geral deixou de competir com a Apple
- `Four Steps` foi reescrito para fazer sentido com acabamento, coat count, cure windows, etc.
- Hero:
  - varios testes foram feitos
  - stock foi rejeitado
  - tentativa atual foi alinhada para algo mais coerente, mas este hero ainda e ponto sensivel e pode precisar de nova curadoria
- Problema tecnico resolvido:
  - script do slider quebrado no fim do arquivo
  - pagina em branco corrigida

## Post-Construction (`template-d/services/post-construction.html`)
- Estrategia final:
  - `Post-Construction` e o servico principal
  - `Disaster Recovery` fica dentro da pagina como capability
- Hero deixou de vender desastre como servico principal
- `Disaster Recovery` ganhou um bloco proprio ancorado no caso `Hurricane Milton`
- Caso Milton usa varias imagens reais copiadas da pasta de midia
- `Lobby restoration` foi movido para a ultima posicao do bloco `Before/After`
- Hero foi testado com imagem externa melhor
- Problema tecnico resolvido:
  - script do slider quebrado no fim do arquivo
  - pagina em branco corrigida

## Property Decommission (`template-d/services/property-decommission.html`)
- Nome principal corrigido para `Property Decommission`
- `Fog Disinfect` deixou de ser headline principal e virou capability interna
- Hero e related ainda usam material de fogging
- Foi adicionada `Property Decommission Library`
- A library segue logica hibrida:
  - 1 imagem real de fog disinfect
  - imagens externas para vacancy / transition / handoff
- Textos corrigidos em:
  - hero
  - included
  - industries
  - related case
  - CTA
- Esta pagina ainda precisa de mais acervo real se quisermos subir o nivel de prova

## Problemas tecnicos que aconteceram e foram corrigidos
- `template-d/services/pressure-washing.html`
  - pagina ficou branca por script final quebrado
  - corrigido
- `template-d/services/floor-care.html`
  - pagina ficou branca por script final quebrado
  - corrigido
- `template-d/services/post-construction.html`
  - pagina ficou branca por script final quebrado
  - corrigido

## Assets reais copiados da pasta `MIDIA`
- `Janitorial Services`
  - caso aeroporto com pares `before/after`
  - banheiro `after 4`
- `Pressure Washer`
  - pares `before 1..3 / after 1..3`
  - par adicional `pressure wash before 1.jpeg / pressure washer after 1.jpeg`
  - imagens de execucao
- `Windows Clean`
  - imagens de boom lift
- `Carpet Cleaning`
  - 2 screenshots/copias para mini-case
- `Floor Stripping & Waxing`
  - casos 1, 2, 3
  - caso Apple (before, during, after)
- `Post-Construction & Disaster Recovery`
  - before/after gerais
  - imagens reais do Hurricane Milton
- `Property Decommission`
  - screenshot de `Fog Disinfect`

## Estilo que estamos seguindo
- `template-d` como espinha dorsal
- mais `proof-driven` do que `concept-driven`
- menos “site de IA / agencia inventando layout”
- mais:
  - institucional
  - enterprise
  - servico real
  - operacao
  - credibility first
- Quando falta prova real:
  - completar com imagens externas boas
  - mas sem esconder a diferenca entre acervo proprio e apoio visual
- Quando existe caso forte:
  - destacar como mini-case central
  - exemplos: `Apple`, `Airport`, `Hurricane Milton`

## Pendencias / proximos passos recomendados
- Revisar consistencia de nomenclatura em `template-d/services.html` e eventualmente em alguns megamenus
- Revisar o hero atual de `floor-care`, que ainda pode precisar de nova curadoria
- Conseguir mais fotos reais para `Property Decommission`
- Revisar se o `post-construction` precisa de mini-case proprio alem de Milton
- Revisar a home de novo depois que todas as paginas de servico estiverem fechadas

## Resumo operacional para retomar depois
- Base oficial: `template-d`
- Backup existe: `backups/template-d-2026-04-22`
- Paginas mais fortes hoje:
  - `janitorial`
  - `pressure-washing`
  - `window-cleaning`
  - `post-construction`
- Paginas que ainda podem precisar de refinamento:
  - `floor-care` (hero)
  - `property-decommission` (mais prova real)
  - `carpet-cleaning` (library/hero podem ser refinados se aparecer novo acervo)
