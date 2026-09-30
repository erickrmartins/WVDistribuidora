# WV Distribuidora

Landing page em React + Vite, com catálogo, variações por produto e orçamento enviado pelo WhatsApp.

## Rodar localmente
```
npm install
npm run dev
```
Abra http://localhost:5173/WVDistribuidora/

## Publicar no GitHub Pages
1. Crie o repositório `WVDistribuidora` e envie o código para a branch `main`.
2. Em **Settings → Pages → Build and deployment**, escolha **Source: GitHub Actions**.
3. Cada push na `main` publica em `https://<usuario>.github.io/WVDistribuidora/`.

## Onde editar
- `src/data/data.js`: todos os textos, produtos, categorias, variações, contatos e o número do WhatsApp.
- `public/produtos/`: fotos dos produtos (nome do arquivo no campo `imagem` de cada item).
- `public/logo.png` e `public/sobre/1.jpg`: logo e foto da seção Sobre nós (opcionais).

Imagens da pasta `public` são lidas com `import.meta.env.BASE_URL`, então funcionam na base `/WVDistribuidora/`. Sem a foto, aparece o ícone da categoria.

### Variações (opcionais)
```js
variacoes: [
  { tipo: "Voltagem", opcoes: ["110V", "220V"], obrigatorio: true },
  { tipo: "Cor", opcoes: ["Preta", "Amarela"] }
]
```
`tipo` é livre e `obrigatorio` é opcional (padrão: falso). Produto sem `variacoes` funciona normalmente.
