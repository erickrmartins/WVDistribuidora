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

### Produto esgotado
Para marcar um produto como esgotado, basta adicionar `esgotado: true` no item em `src/data/data.js`:
```js
{
  id: 19,
  categoria: "maq",
  nome: "Produto Exemplo",
  descricao: "Descrição do produto.",
  preco: "199,00",
  imagem: "produto-exemplo.webp",
  esgotado: true
}
```
Quando `esgotado` é `true`, o card recebe o selo **Esgotado** e o botão de adição ao orçamento fica desativado. O produto continua podendo ser aberto para consulta.

### Imagem por variação
Uma variação pode ter imagens próprias. Use o campo `imagens` dentro da variação, relacionando o nome de cada opção ao arquivo em `public/produtos/`:
```js
{
  id: 20,
  categoria: "pan",
  nome: "Jogo de Panelas Exemplo",
  descricao: "Descrição do produto.",
  preco: "430,00",
  imagem: "panela-padrao.webp",
  variacoes: [
    {
      tipo: "Cor",
      opcoes: ["Preta", "Marrom", "Verde"],
      obrigatorio: true,
      imagens: {
        "Preta": "panela-preta.webp",
        "Marrom": "panela-marrom.webp",
        "Verde": "panela-verde.webp"
      }
    }
  ]
}
```
Ao selecionar uma opção no modal, a foto muda automaticamente para a imagem correspondente. Se uma opção não tiver imagem cadastrada, o sistema usa a imagem principal definida em `imagem`.

Também é possível usar um array na mesma ordem de `opcoes`:
```js
imagens: ["panela-preta.webp", "panela-marrom.webp", "panela-verde.webp"]
```
