export const moeda = (n) =>
    n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// "1.289,90" -> 1289.9 (aceita preço ausente)
export const num = (p) => (p ? Number(String(p).replace(/\./g, '').replace(',', '.')) : 0)

export const montarMensagem = (nome, linhas, total) => {
    const itens = linhas
        .map((l) => `• ${l.qtd}x ${l.item.nome}${l.rotulo ? ` (${l.rotulo})` : ''}${l.item.preco ? ` (R$ ${l.item.preco} un.)` : ''}`)
        .join('\n')
    const soma = total > 0 ? `\n\nTotal estimado: ${moeda(total)}` : ''
    return `Olá, ${nome}! Gostaria de um orçamento dos itens abaixo:\n\n${itens}${soma}\n\nPode confirmar a disponibilidade e o valor final?`
}

export const linkWhatsapp = (link, texto) =>
    `${link}${link.includes('?') ? '&' : '?'}text=${encodeURIComponent(texto)}`
