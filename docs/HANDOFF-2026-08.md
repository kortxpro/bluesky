# BlueSky — estado do projeto, agosto de 2026

Documento de retomada. Tudo que foi feito, onde está cada coisa, e o que ficou pendente.

---

## 1. Onde vive cada peça

| Item | Onde | Quem controla |
|---|---|---|
| Site publicado | **https://blueskygeneralserv.com** | HostGator, servidor `srv78`, IP `192.185.217.247` |
| Painel de hospedagem | `blueskygeneralserv.com/cpanel` | conta não é do Daniel, acesso obtido |
| Raiz do documento | `/public_html` | domínio principal do plano |
| DNS do domínio | `account.squarespace.com/domains` | Daniel tem acesso |
| Nameservers reais | `ns-cloud-*.googledomains.com` | Squarespace / Google |
| E-mail `contact@` | Google Workspace, MX `aspmx.l.google.com` | **independente da hospedagem** |
| Formulário | Web3Forms, plano gratuito | key pública no HTML de `contact.html` |
| Repositório | `github.com/kortxpro/bluesky` | branch `main` |
| Responsável anterior | Jonathan Gabetta | fez o WordPress antigo |

### Armadilhas já descobertas

- O painel da HostGator lista `hgns1/hgns2.hostgator.com` como nameservers, mas **não estão em uso**. Por isso o domínio aparece como "External domain". Quem manda no DNS é o Squarespace.
- Mudança de servidor se faz no **Squarespace**, não no cPanel.
- Limpar o `public_html` **não afeta o e-mail**, porque é Google Workspace.
- Existiam duas instalações de WordPress no mesmo banco (prefixos `wp_` e `wp2a_`).

---

## 2. Backup do site antigo

O WordPress antigo foi **movido**, não apagado, para `public_html/_wordpress-antigo`.

Baixados antes da troca:
- Backup completo do cPanel (`.tar.gz`, inclui arquivos e bancos)
- Dump do banco `blueskyg_wp88` via phpMyAdmin (`.sql`)

O backup completo **não se restaura sozinho pelo cPanel**, é feito para migração e quem restaura é o suporte. O `.sql` é o arquivo que serve para recuperação de conteúdo sem depender de ninguém.

---

## 3. O que foi entregue

Base: varredura com 12 agentes que retornou **138 achados confirmados**, sendo 23 críticos.

### As três falhas mais graves encontradas

1. **O formulário descartava todos os leads em silêncio.** A access key do Web3Forms era um placeholder, então toda solicitação falhava e o visitante via a caixa de erro.
2. **Páginas pesavam de 17 a 31 MB.** `floor-care.html` sozinha tinha 30,67 MB.
3. **Notas internas de produção publicadas como texto do cliente** em 5 das 7 páginas de serviço, incluindo trechos que falavam com o desenvolvedor na segunda pessoa.

### Correções

**Performance:** 40 PNGs convertidos para JPEG 1600px q82 (142,5 MB para 11,5 MB, redução de 92%), `loading="lazy"` em 100 imagens abaixo da dobra, hero mantido eager. **Payload inicial por página caiu para menos de 0,35 MB.**

**Formulário:** key real instalada, assunto traduzido, `aria-live` nas mensagens. Reply-to já funcionava, porque o Web3Forms usa o campo `email` automaticamente.

**SEO nas 17 páginas:** title e description com geografia e o qualificador "commercial", canonical, Open Graph, Twitter card, JSON-LD `ProfessionalService`, `sitemap.xml`, `robots.txt`, CTA no hero das páginas de serviço.

**Acessibilidade:** drawer mobile saía do tab order, contraste de 2,42:1 para 4,6:1, skip link, `<main>`, carrosséis e sliders operáveis por teclado, anel de foco nos campos.

**Correções factuais:**
- Aeroporto era "Tampa/St Pete", o correto é **St. Pete-Clearwater International (PIE)**
- "Orange County Clerk of Courts" virou **Orange County Government**
- Milton atingiu a **costa do Golfo**, não SE Florida
- Equipe do Milton padronizada em **60+** nas 8 menções
- Instagram correto: `instagram.com/blueskycleanservice`
- Rotator do hero anunciava "Industrial", indústria não atendida; virou Education

**Copy:** cerca de 60 legendas e alt reescritos a partir da inspeção das próprias fotos. Removidas as notas internas e os "Comparison 01 / Before 1 / After 1".

**Menu:** o dropdown abria mas não deixava clicar, porque havia um vão morto de 19px entre o link e o painel. Corrigido com `::before` transparente. Descrições removidas, coluna única com `nowrap`.

**Ícones:** B da marca extraído do `logo.pdf`. Transparente na aba do navegador, fundo branco no compartilhamento e no iOS, porque o iOS compõe PNG transparente sobre preto.

---

## 4. O `.htaccess`

Fica em `/public_html/.htaccess`. É invisível no File Manager sem ativar **Configurações → Mostrar arquivos ocultos**.

Faz:
- URLs sem `.html` (o Vercel fazia isso com `cleanUrls`)
- `/page.html` redireciona 301 para `/page`
- HTTPS e non-www forçados
- gzip e cache
- 301 das URLs antigas do WordPress (`/about-us/` → `/about`, e mais 13)
- `ErrorDocument 404 /404.html`

### Dois bugs já corrigidos, não repetir

**403 em `/services` e `/projects`.** A regra tinha `!-d`, que bloqueava a reescrita quando existia diretório com o mesmo nome. Como há uma pasta `services/` **e** um `services.html`, o Apache tentava listar o diretório. Removido o `!-d` e adicionado `DirectorySlash Off`.

**Cache eterno nos ícones.** A regra de `max-age=31536000, immutable` pegava todo `.png`, incluindo favicons. Com `immutable` o navegador nem revalida, então quem carregasse um ícone antigo ficaria preso por um ano. Ícones e `og-default.jpg` passaram a 24h com `must-revalidate`, e as referências no HTML foram versionadas com `?v=2`.

---

## 5. Como publicar uma alteração

O site é estático. O fluxo é manual:

1. Editar em `template-d/`
2. Gerar um zip só com os arquivos alterados
3. cPanel → Gerenciador de Arquivos → `public_html` → Carregar → Extrair → apagar o zip

**Cuidado que já causou problema:** ao montar o pacote, coletar também os arquivos referenciados em atributos `content` de meta tag. A `og-default.jpg` ficou de fora numa das vezes porque o script só olhava `src`, `href` e `poster`, e o preview do WhatsApp quebrou.

---

## 6. Decisões do cliente que definem o escopo

- **Não trocar fotos.** Ele reverteu a substituição de 22 imagens de banco de imagem. Foto de Pexels e Unsplash é aceitável para ele. Só trocar quando pedir explicitamente.
- **Sem rastreamento de conversão**, por decisão dele. Vira o primeiro entregável pago quando ligar anúncio.
- Uso das marcas dos 9 logos: **autorizado**.

---

## 7. Pendências

**No servidor:**
- Apagar os zips de deploy largados no `public_html`
- Apagar o `favicon.svg` antigo, que ainda responde 200
- Remover `_wordpress-antigo` só depois de alguns dias com o site novo estável

**No site:**
- Sem rastreamento de conversão instalado
- Endereço não consta no JSON-LD, porque o site não publica endereço
- 39 PNGs órfãos no repositório, 109 MB sem referência

**Para o cliente confirmar:**
- Rodar `site:blueskygeneralserv.com` no Google e mandar as URLs antigas que aparecerem, para completar os redirecionamentos 301
- Google Business Profile precisa ser reivindicado pelo Marcus, exige verificação no endereço

---

## 8. Próximos passos comerciais

**Setup de anúncios, US$ 950 uma vez:** GA4, GTM, Pixel da Meta, eventos de conversão no formulário e no clique de telefone, Search Console, Google Business Profile, construção das campanhas.

**Gestão mensal:** US$ 700 só Google ou só Meta, US$ 1.100 os dois. Acima de US$ 5k de verba, mais 12% sobre o excedente.

**Verba de anúncio paga direto pelo cliente**, nunca pela conta do Daniel. Mínimo recomendado de US$ 1.500 a 2.000/mês. Contrato mínimo de 3 meses.

**Ordem de prioridade para ranquear**, já que a parte técnica do site está completa:
1. Google Business Profile
2. Avaliações
3. Páginas por cidade e serviço
4. Estudos de caso, que já existem e são um diferencial real
5. Blog por último, porque as AI Overviews derrubaram o retorno de conteúdo informativo nos EUA
