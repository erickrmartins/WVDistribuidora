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
                id: 1, categoria: "maq", nome: "Kit Martelete com Furadeira",
                descricao: "Mandril de 13 mm, acompanha maleta de transporte e jogo de brocas.",
                preco: "510,00", imagem: "martelete-furadeira.jpg"
            },
            {
                id: 2, categoria: "maq", nome: "Kit Furadeira + Impacto",
                descricao: "Potência de 850W, ideal para perfurações de alto desempenho e aperto de parafusos.",
                preco: "490,00", imagem: "furadeira-impacto.jpg"
            },
            {
                id: 3, categoria: "maq", nome: "Kit Lixadeira + Impacto",
                descricao: "Potência de 1.500W, acompanha guia paralela e disco para corte e desbaste.",
                preco: "500,00", imagem: "lixadeira-impacto.jpg"
            },
            {
                id: 4, categoria: "maq", nome: "Impacto Pequena",
                descricao: "Chave de impacto compacta para aperto e desaperto em locais de difícil acesso.",
                preco: "340,00", imagem: "impacto-pequena.jpg"
            },
            {
                id: 5, categoria: "maq", nome: "Catraca",
                descricao: "Chave catraca reforçada de alta durabilidade para trabalhos mecânicos.",
                preco: "340,00", imagem: "catraca.jpg"
            },
            {
                id: 6, categoria: "maq", nome: "Motosserra",
                descricao: "Motosserra potente para poda, corte de lenha e manejo florestal.",
                preco: "430,00", imagem: "motosserra.jpg"
            },
            {
                id: 7, categoria: "maq", nome: "Roçadeira",
                descricao: "Equipamento para corte de grama e roçagem de terrenos com motor potente.",
                preco: "430,00", imagem: "rocadeira.jpg"
            },
            {
                id: 8, categoria: "maq", nome: "Impacto Comum",
                descricao: "Chave de impacto padrão para manutenção geral e uso profissional.",
                preco: "300,00", imagem: "impacto-comum.jpg"
            },
            {
                id: 9, categoria: "maq", nome: "Impacto Pequena Makita",
                descricao: "Chave de impacto compacta da marca Makita, ergonômica e de alto rendimento.",
                preco: "340,00", imagem: "impacto-pequena-makita.jpg"
            },
            {
                id: 10, categoria: "maq", nome: "Impacto com Adaptador",
                descricao: "Chave de impacto acompanhada de adaptador para múltiplos encaixes de soquetes.",
                preco: "460,00", imagem: "impacto-adaptador.jpg"
            },
            {
                id: 11, categoria: "maq", nome: "Impacto 3/4",
                descricao: "Chave de impacto pesada com encaixe de 3/4 polegadas para serviços pesados.",
                preco: "560,00", imagem: "impacto-34.jpg"
            },
            {
                id: 12, categoria: "pan", nome: "Jogo de Panelas Donna 22 Peças",
                descricao: "Conjunto completo com revestimento antiaderente, fundo triplo e compatível com diversos fogões.",
                preco: "510,00", imagem: "donna-22.jpg",
                variacoes: [
                    { tipo: "Cor", opcoes: ["Preta", "Marrom", "Verde"] }
                ]
            },
            {
                id: 13, categoria: "pan", nome: "Jogo de Panelas Monaco 21 Peças",
                descricao: "Jogo de panelas em alumínio reforçado, com tampas de vidro temperado e saídas de vapor.",
                preco: "430,00", imagem: "monaco-21.jpg",
                variacoes: [
                    { tipo: "Cor", opcoes: ["Preto", "Marrom", "Dourado"] }
                ]
            },
            {
                id: 14, categoria: "pan", nome: "Jogo de Panelas Monaco 20 Peças",
                descricao: "Conjunto de panelas versátil para o dia a dia, com excelente distribuição de calor.",
                preco: "430,00", imagem: "monaco-20.jpg",
                variacoes: [
                    { tipo: "Cor", opcoes: ["Marrom", "Rose", "Kinder", "Branco", "Preto"] }
                ]
            },
            {
                id: 15, categoria: "faq", nome: "Faqueiro Monaco 12 Peças",
                descricao: "Jogo de facas em aço inox de alta precisão com cabo ergonômico.",
                preco: "45,00", imagem: "faqueiro-monaco-12.jpg"
            },
            {
                id: 16, categoria: "faq", nome: "Faqueiro Monaco 17 Peças",
                descricao: "Faqueiro completo de aço inoxidável com suporte/cepo para bancada.",
                preco: "55,00", imagem: "faqueiro-monaco-17.jpg"
            },
            {
                id: 17, categoria: "tal", nome: "Jogo de Talheres Monaco 48 Peças",
                descricao: "Garfos, facas, colheres e talheres de sobremesa em aço inox para até 8 pessoas.",
                preco: "260,00", imagem: "talheres-monaco-48.jpg"
            },
            {
                id: 18, categoria: "tal", nome: "Jogo de Talheres Monaco 84 Peças",
                descricao: "Jogo de talheres completo com estojo de luxo e peças de servir para ocasiões especiais.",
                preco: "360,00", imagem: "talheres-monaco-84.jpg"
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
        endereco: { label: "Localização", texto: "Rua Paulo Augusto Tucci, 64, Jardim Izolina, Ibitinga, SP - 14943440", url: "https://maps.app.goo.gl/WUcksipYshoBhqfy5" },
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
                { id: 1, dia: "SEG-SEX:", horas: "09:00 - 18:00" },
                { id: 2, dia: "SAB-DOM:", horas: "Sob Consulta" }
            ]
        }
    }
}
