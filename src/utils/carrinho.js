export const variacoesDe = (item) => item.variacoes ?? []

// Cada combinação de variações é uma linha própria: "8" (sem variação) ou "8#1,0"
export const chaveLinha = (id, selecao) =>
    selecao.some((x) => x != null) ? `${id}#${selecao.map((x) => x ?? '').join(',')}` : String(id)

// Tipos obrigatórios ainda sem escolha
export const faltando = (item, selecao) =>
    variacoesDe(item).filter((v, j) => v.obrigatorio && selecao[j] == null).map((v) => v.tipo)

// Converte a chave em { item, rotulo }; null se o produto/opção não existir mais
export function lerLinha(chave, itens) {
    const [id, sel] = chave.split('#')
    const item = itens.find((i) => String(i.id) === id)
    if (!item) return null
    const vars = variacoesDe(item)
    const rotulos = []
    const partes = sel ? sel.split(',') : []
    for (let j = 0; j < partes.length; j++) {
        if (partes[j] === '') continue
        const v = vars[j]
        const op = v?.opcoes[partes[j]]
        if (op === undefined) return null
        rotulos.push(`${v.tipo}: ${op}`)
    }
    return { item, rotulo: rotulos.join(', ') }
}
