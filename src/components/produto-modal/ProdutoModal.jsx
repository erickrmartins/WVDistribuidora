import { useEffect, useRef, useState } from 'react'
import styles from './ProdutoModal.module.css'
import Botao from '../botao/Botao.jsx'
import FotoProduto from '../foto-produto/FotoProduto.jsx'
import AcoesProduto from '../acoes-produto/AcoesProduto.jsx'
import { faltando, variacoesDe, imagemDaSelecao } from '../../utils/carrinho.js'

function ProdutoModal({ item, categoria, onFechar, onAbrirCarrinho }) {
    const variacoes = variacoesDe(item)
    const [selecao, setSelecao] = useState(() => variacoes.map(() => null))
    const fechar = useRef(null)
    const aoFechar = useRef(onFechar)
    aoFechar.current = onFechar

    useEffect(() => {
        const origem = document.activeElement
        const overflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        fechar.current?.focus()
        const tecla = (e) => e.key === 'Escape' && aoFechar.current()
        document.addEventListener('keydown', tecla)
        return () => {
            document.removeEventListener('keydown', tecla)
            document.body.style.overflow = overflow
            origem?.focus?.()
        }
    }, [])

    // Clicar numa opção já escolhida desmarca
    const escolher = (j, x) =>
        setSelecao((s) => s.map((atual, k) => (k === j ? (atual === x ? null : x) : atual)))

    const falta = faltando(item, selecao)
    const imagemSelecionada = imagemDaSelecao(item, selecao)

    return (
        <div
            className={styles.fundo}
            role="dialog"
            aria-modal="true"
            aria-labelledby="produto-titulo"
            onMouseDown={(e) => e.target === e.currentTarget && onFechar()}
        >
            <div className={styles.cartao}>
                <button ref={fechar} type="button" className={styles.fechar} onClick={onFechar} aria-label="Fechar">×</button>
                <div className={styles.foto}>
                    <FotoProduto item={item} imagem={imagemSelecionada} />
                    {item.esgotado && <span className={styles.seloEsgotado}>Esgotado</span>}
                </div>
                <div className={styles.info}>
                    {categoria && <span className={styles.categoria}>{categoria.nome}</span>}
                    <h2 id="produto-titulo" className={styles.titulo}>{item.nome}</h2>
                    <p>{item.descricao}</p>
                    {item.preco && <p className={styles.preco}>R$ {item.preco}</p>}
                    {item.esgotado && <p className={styles.avisoEsgotado}>Este produto está temporariamente esgotado.</p>}

                    {variacoes.map((v, j) => (
                        <div key={v.tipo} className={styles.grupo} role="group" aria-label={v.tipo}>
                            <span className={styles.rotulo}>{v.tipo}{v.obrigatorio ? ' *' : ''}</span>
                            <div className={styles.opcoes}>
                                {v.opcoes.map((o, x) => (
                                    <button
                                        key={o}
                                        type="button"
                                        className={styles.opcao}
                                        aria-pressed={selecao[j] === x}
                                        onClick={() => escolher(j, x)}
                                    >
                                        {o}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}

                    {falta.length > 0 && <p className={styles.aviso}>Escolha: {falta.join(', ')}</p>}
                    <AcoesProduto item={item} selecao={selecao} modal cheio />
                    <Botao variante="contorno" onClick={onAbrirCarrinho}>Ver meu orçamento</Botao>
                </div>
            </div>
        </div>
    )
}

export default ProdutoModal
