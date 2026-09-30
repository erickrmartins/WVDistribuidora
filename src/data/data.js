export const data = {
    empresa: {
        nome: "WV Distribuidora",
        cnpj: "00.000.000/0001-00",
        // Link base do WhatsApp (código do país + DDD + número)
        link: "https://wa.me/553291128995"
    },
    inicio: {
        titulo: "Compre por unidade ou monte seu pedido no atacado",
        subtitulo: "Preço de distribuidora para quem compra para casa, obra ou revenda. Peça o orçamento em poucos minutos.",
        botaoCatalogo: "Ver catálogo",
        botaoOrcamento: "Ver meu orçamento"
    },
    beneficios: [
        { id: 1, titulo: "Retirada no galpão", texto: "Pedido separado e pronto no balcão." },
        { id: 2, titulo: "Entrega na cidade", texto: "Combine o frete pelo WhatsApp." },
        { id: 3, titulo: "Atacado e varejo", texto: "Descontos para quantidade." }
    ],
    catalogo: {
        titulo: "Lista de produtos",
        subtitulo: "Adicione os produtos e envie o orçamento pelo WhatsApp. Para quantidade, peça preço de atacado.",
        categorias: [
            { id: "maq", nome: "Máquinas e ferramentas" },
            { id: "pan", nome: "Panelas" },
            { id: "faq", nome: "Faqueiros" },
            { id: "tal", nome: "Talheres" }
        ],
        // imagem: arquivo dentro de public/produtos/ (opcional)
        // variacoes: opcional. tipo é livre; obrigatorio é opcional (padrão: false)
        itens: [
            {
                id: 1, categoria: "maq", nome: "Furadeira de impacto 650W",
                descricao: "Mandril de 13 mm, com maleta e jogo de brocas.",
                preco: "289,00", imagem: "furadeira-impacto.jpg",
                variacoes: [{ tipo: "Voltagem", opcoes: ["110V", "220V"], obrigatorio: true }]
            },
            {
                id: 2, categoria: "maq", nome: "Esmerilhadeira 4 1/2\"",
                descricao: "850W, para corte e desbaste de metal.",
                preco: "219,00", imagem: "esmerilhadeira.jpg",
                variacoes: [{ tipo: "Voltagem", opcoes: ["110V", "220V"] }]
            },
            {
                id: 3, categoria: "maq", nome: "Serra circular 7 1/4\"",
                descricao: "1.500W, guia paralela e disco incluso.",
                preco: "399,00", imagem: "serra-circular.jpg"
            },
            {
                id: 4, categoria: "pan", nome: "Jogo de panelas inox 5 peças",
                descricao: "Fundo triplo, serve em fogão e indução.",
                preco: "329,00", imagem: "jogo-panelas-inox.jpg"
            },
            {
                id: 5, categoria: "pan", nome: "Panela de pressão 7 L",
                descricao: "Alumínio reforçado, três válvulas de segurança.",
                preco: "149,00", imagem: "panela-pressao.jpg",
                variacoes: [{ tipo: "Cor", opcoes: ["Prata", "Vermelha"] }]
            },
            {
                id: 6, categoria: "faq", nome: "Faqueiro inox 42 peças",
                descricao: "Garfos, facas, colheres e talheres de sobremesa.",
                preco: "119,00", imagem: "faqueiro-42.jpg"
            },
            {
                id: 7, categoria: "faq", nome: "Faqueiro inox 24 peças",
                descricao: "Conjunto para seis pessoas, com estojo.",
                preco: "79,00", imagem: "faqueiro-24.jpg"
            },
            {
                id: 8, categoria: "out", nome: "Caixa de ferramentas",
                descricao: "Plástico reforçado, com bandeja removível.",
                preco: "69,00", imagem: "caixa-ferramentas.jpg",
                variacoes: [
                    { tipo: "Tamanho", opcoes: ["16\"", "19\"", "22\""] },
                    { tipo: "Cor", opcoes: ["Preta", "Amarela"] }
                ]
            }
        ]
    },
    sobre: {
        titulo: "Um galpão que começou pequeno",
        destaque: "Produto à mostra, estoque no local",
        subtitulo: "Começamos vendendo ferramentas para quem trabalha com obra. Hoje reunimos também utilidades para a casa, sempre com produto à mostra e estoque no local.",
        texto: "Trabalhamos com marcas conhecidas e com linhas de custo menor, e explicamos as diferenças antes da compra. Todo produto elétrico sai testado, com nota fiscal e garantia.",
        imagem: "sobre/1.jpg"
    },
    contatos: {
        titulo: "Contatos",
        subtitulo: "Fale com a gente ou passe no galpão.",
        pedidos: { label: "Pedidos", botao: "WhatsApp" },
        endereco: { label: "Localização", texto: "Rua Exemplo, 000, Bairro, Cidade/UF", url: "#" },
        redes: {
            label: "Redes sociais",
            itens: [
                { id: 1, label: "Instagram", url: "#" },
                { id: 2, label: "Facebook", url: "#" }
            ]
        },
        horario: {
            label: "Funcionamento",
            itens: [
                { id: 1, dia: "SEG-SEX:", horas: "08:00 - 18:00" },
                { id: 2, dia: "SÁBADO:", horas: "08:00 - 13:00" },
                { id: 3, dia: "DOMINGO:", horas: "FECHADO" }
            ]
        }
    }
}
