# riegulate / Rieg Rodig · portfólio

Site estático em **Astro**, com fundo em **Three.js** e detalhes gráficos em **p5.js**.

## Conteúdo

- `src/data/work.mjs`: trabalhos recentes, descrições, áreas, status e links verificados.
- `src/data/projects.mjs`: lançamentos e links anteriores, além dos PDFs de portfólio.
- `src/components/ProjectCard.astro`: cards de trabalho, capas tipográficas e chips.
- `src/pages/index.astro`: página principal, filtro por área/ano e busca.
- `src/pages/trabalhos/[id].astro`: páginas individuais dos trabalhos recentes.
- `public/site.js`: filtros combinados, query string, Three.js e p5.js.
- `src/styles/portfolio.css`: estilos do portfólio e mobile.

## Filtros

Os botões de **Arte, Vídeo, Desenvolvimento, Aulas e Áudio** permitem selecionar uma área.
O seletor de ano e a pesquisa são combináveis. O endereço preserva os filtros na
query string, por exemplo: `?area=audio&ano=2026`. O botão **Limpar filtros**
restaura o acervo completo.

Ao cadastrar trabalhos, preencha `categories` com os IDs documentados em
`disciplines`, e use `year` no formato `YYYY` quando o ano for conhecido.
Para trabalhos sem material público, não crie URLs nem imagens fictícias: uma
página própria é gerada a partir do `id`. `externalUrl` é opcional e aparece
como botão de referência pública na página do projeto.

## Desenvolvimento

```bash
npm install
npm test
npm run dev
npm run build
```

## Publicação

Mudanças em pull requests passam por `Verify portfolio changes`. Um merge em
`main` aciona o GitHub Pages, que publica o `dist/`. O projeto também é
compatível com deploy em Vercel.
