import { useEffect, useRef } from 'react'
import styles from './AcoesProduto.module.css'
import Botao from '../botao/Botao.jsx'
import Quantidade from '../quantidade/Quantidade.jsx'
import { useCarrinho } from '../../context/CarrinhoContext.jsx'
import { chaveLinha, faltando, variacoesDe } from '../../utils/carrinho.js'

// Na lista: "Adicionar" (ou "Ver opções" se o produto tem variações).
// No modal (modal=true): Adicionar / − quantidade + da combinação escolhida.
function AcoesProduto({ item, selecao = [], modal = false, cheio = false, onAbrir }) {
    const carrinho = useCarrinho()
    const raiz = useRef(null)
    const foco = useRef(null)

    // Devolve o foco do teclado ao botão que substituiu o clicado
    useEffect(() => {
        if (foco.current) {
            raiz.current?.querySelector(foco.current)?.focus()
            foco.current = null
        }
    })

    const temVariacoes = variacoesDe(item).length > 0
    const esgotado = item.esgotado === true
    const classes = `${styles.raiz} ${cheio ? styles.cheio : ''}`

    if (esgotado) {
        return (
            <div className={classes}>
                <Botao tamanho={modal ? 'md' : 'sm'} disabled>
                    Esgotado
                </Botao>
            </div>
        )
    }

    if (!modal && temVariacoes) {
        const n = carrinho.qtdDoItem(item.id)
        return (
            <div className={classes}>
                <Botao tamanho="sm" onClick={() => onAbrir(item.id)}>
                    Ver opções{n > 0 ? ` (${n})` : ''}
                </Botao>
            </div>
        )
    }

    const chave = chaveLinha(item.id, selecao)
    const qtd = carrinho.qtd(chave)
    const falta = faltando(item, selecao)

    return (
        <div ref={raiz} className={classes}>
            {qtd > 0 ? (
                <Quantidade
                    grande
                    qtd={qtd}
                    onMenos={() => { foco.current = '[data-adicionar]'; carrinho.diminuir(chave) }}
                    onMais={() => carrinho.aumentar(chave)}
                />
            ) : (
                <Botao
                    tamanho={modal ? 'md' : 'sm'}
                    data-adicionar
                    disabled={falta.length > 0}
                    onClick={() => { foco.current = '[data-mais]'; carrinho.aumentar(chave) }}
                >
                    Adicionar
                </Botao>
            )}
        </div>
    )
}

export default AcoesProduto
