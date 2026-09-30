import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { lerLinha } from '../utils/carrinho.js'
import { num } from '../utils/formato.js'

const Contexto = createContext(null)
const STORAGE = 'wv-carrinho'

export function CarrinhoProvider({ itens, children }) {
    const [qtds, setQtds] = useState(() => {
        try { return JSON.parse(localStorage.getItem(STORAGE) || '{}') } catch { return {} }
    })

    useEffect(() => {
        try { localStorage.setItem(STORAGE, JSON.stringify(qtds)) } catch { /* sem storage */ }
    }, [qtds])

    const valor = useMemo(() => {
        const linhas = Object.entries(qtds)
            .map(([chave, qtd]) => {
                const l = qtd > 0 ? lerLinha(chave, itens) : null
                return l ? { ...l, chave, qtd } : null
            })
            .filter(Boolean)

        const alterar = (chave, delta) =>
            setQtds((q) => {
                const { [chave]: atual = 0, ...resto } = q
                const n = atual + delta
                return n > 0 ? { ...resto, [chave]: n } : resto
            })

        return {
            linhas,
            total: linhas.reduce((a, l) => a + l.qtd * num(l.item.preco), 0),
            quantidade: linhas.reduce((a, l) => a + l.qtd, 0),
            qtd: (chave) => qtds[chave] || 0,
            qtdDoItem: (id) => linhas.filter((l) => l.item.id === id).reduce((a, l) => a + l.qtd, 0),
            aumentar: (chave) => alterar(chave, 1),
            diminuir: (chave) => alterar(chave, -1),
            remover: (chave) => setQtds(({ [chave]: _, ...resto }) => resto),
            limpar: () => setQtds({}),
        }
    }, [qtds, itens])

    return <Contexto.Provider value={valor}>{children}</Contexto.Provider>
}

export const useCarrinho = () => useContext(Contexto)
