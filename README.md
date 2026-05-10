# BOLD Snacks · Landing Page

Landing page de proposta para a marca brasileira **BOLD Snacks**, focada na nova assinatura mensal **BOLD CLUB** (box mensal de produtos + desafios esportivos + sorteios de prêmios).

> **Proteína real. Sabor surreal.**

---

## ✨ Destaque

**Efeito raio-X interativo** na barra de proteína: ao passar o mouse sobre a embalagem, ela fica translúcida só na área ao redor do cursor (efeito spotlight/lente), revelando o interior real da barra. Em mobile/touch, o efeito roda em loop suave automaticamente.

Implementação 100% CSS (`mask-image: radial-gradient`) + JS vanilla com `pointermove`. Sem libs.

---

## 🛠 Stack

- **HTML + CSS + JavaScript vanilla**
- Sem frameworks, sem build, sem `npm install`
- Única dependência externa: Google Fonts (`Bagel Fat One` + `Inter`)
- Imagens dos produtos via CDN da BOLD (`boldsnacks.com.br/cdn/...`)

---

## 📁 Estrutura

```
.
├── index.html              # estrutura da página
├── styles.css              # design tokens + todas as seções
├── script.js               # raio-X, scroll reveals, FAQ, nav, newsletter
├── favicon.svg             # logo "B" verde limão (vetorial)
├── favicon-32.png          # fallback PNG 32x32
├── apple-touch-icon.png    # ícone iOS 180x180
└── img/
    ├── por-fora-pistache.png    # embalagem da barra (camada superior do raio-X)
    └── por-dentro-pistache.png  # interior da barra (camada inferior)
```

---

## 🎨 Identidade visual

| Token | Valor |
|---|---|
| Verde limão (primária) | `#CCFF00` |
| Verde escuro (texto sobre verde) | `#1A2E05` |
| Preto profundo (fundo) | `#0A0A0A` |
| Cinza grafite (fundo secundário) | `#141414` |
| Branco (texto) | `#F5F5F5` |

**Display:** Bagel Fat One (Google Fonts)
**Body:** Inter (Google Fonts)

---

## 🧱 Seções

1. **Nav** sticky com `backdrop-filter: blur` ao rolar
2. **Hero** (fundo branco) — headline gigante + raio-X interativo de uma BOLD Pistache
3. **Marquee** infinito (slogans rolando da direita pra esquerda, ~40s/volta)
4. **Linhas de produtos** — grid 3×2 com 6 linhas (BOLD, BOLD 14g, CRUNCH, WAFER, TUBE, WHEY)
5. **Galeria "Vê por dentro"** (fundo branco) — 4 cards com efeito raio-X
6. **BOLD CLUB** (verde limão chapado) — 3 features + 3 planos (LITE / PRO / ELITE)
7. **Desafios** — 4 cards com tag, prêmio, barra de progresso
8. **Benefícios** — 6 ícones com microcopy
9. **Prova social** — contadores grandes + 3 depoimentos
10. **FAQ** — accordion via `<details>` nativo
11. **CTA final** (verde limão chapado)
12. **Footer** — colunas + newsletter + ano dinâmico

---

## ▶️ Rodar local

Você precisa de um servidor estático (não funciona via `file://` por causa de CORS em algumas imagens).

**Opção 1 — Live Server (VSCode):**
Instale a extensão *Live Server* e clique em **"Go Live"** no rodapé. Abre em `http://127.0.0.1:5500`.

**Opção 2 — Python:**
```bash
python -m http.server 8000
```
Abra `http://localhost:8000`.

**Opção 3 — Node:**
```bash
npx serve .
```

---

## 🚀 Deploy (Vercel)

Como é só HTML/CSS/JS estático, o deploy na Vercel é trivial:

1. Empurre o repo pro GitHub
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório
3. Framework Preset: **Other** (ou *Static Site*)
4. Build & Output Settings: deixe em branco
5. Deploy

A Vercel serve `index.html` automaticamente como root.

---

## ♿ Acessibilidade

- HTML semântico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- `alt` em todas as imagens
- `aria-label` na nav e ícones decorativos com `aria-hidden`
- Foco visível em verde limão (`outline: 2px solid #CCFF00`)
- `@media (prefers-reduced-motion: reduce)` desliga marquee, raio-X automático e pulse do CTA

---

## 📝 Observações

- Os preços e nomes dos planos (LITE/PRO/ELITE) e os desafios são **propostas**, não dados reais da BOLD
- Imagens dos produtos são servidas direto do CDN da BOLD (boldsnacks.com.br)
- Esta é uma landing de **proposta de apresentação**, não um produto em produção

---

## 📜 Licença

Projeto de proposta. Marca, identidade visual e imagens de produtos pertencem à BOLD Snacks.
