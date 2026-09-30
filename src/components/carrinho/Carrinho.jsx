import { useEffect, useRef } from 'react'
import styles from './Carrinho.module.css'
import Botao from '../botao/Botao.jsx'
import Quantidade from '../quantidade/Quantidade.jsx'
import { useCarrinho } from '../../context/CarrinhoContext.jsx'
import { linkWhatsapp, moeda, montarMensagem } from '../../utils/formato.js'

function Carrinho({ aberto, onFechar, empresa }) {
    const carrinho = useCarrinho()
    const fechar = useRef(null)
    const aoFechar = useRef(onFechar)
    aoFechar.current = onFechar

    useEffect(() => {
        if (!aberto) return
        fechar.current?.focus()
        const tecla = (e) => e.key === 'Escape' && aoFechar.current()
        document.addEventListener('keydown', tecla)
        return () => document.removeEventListener('keydown', tecla)
    }, [aberto])

    const { linhas, total } = carrinho
    const vazio = linhas.length === 0
    const href = linkWhatsapp(empresa.link, montarMensagem(empresa.nome, linhas, total))

    return (
        <>
            <div className={`${styles.fundo} ${aberto ? styles.on : ''}`} onClick={onFechar} />
            <aside className={`${styles.painel} ${aberto ? styles.on : ''}`} aria-label="Meu orçamento" inert={!aberto}>
                <div className={styles.topo}>
                    <h2>Meu orçamento</h2>
                    <button ref={fechar} type="button" className={styles.fechar} onClick={onFechar} aria-label="Fechar">×</button>
                </div>

                <div className={styles.lista}>
                    {vazio && <p className={styles.vazio}>Seu orçamento está vazio. Toque em "Adicionar" nos produtos que você quer.</p>}
                    {linhas.map((l) => (
                        <div key={l.chave} className={styles.linha}>
                            <div className={styles.texto}>
                                <h3>{l.item.nome}</h3>
                                {l.rotulo && <p className={styles.variacao}>{l.rotulo}</p>}
                                {l.item.preco && <p>R$ {l.item.preco} cada</p>}
                            </div>
                            <Quantidade
                                qtd={l.qtd}
                                onMenos={() => carrinho.diminuir(l.chave)}
                                onMais={() => carrinho.aumentar(l.chave)}
                            />
                            <button
                                type="button"
                                className={styles.remover}
                                onClick={() => carrinho.remover(l.chave)}
                                aria-label={`Remover ${l.item.nome}`}
                            >×</button>
                        </div>
                    ))}
                </div>

                <div className={styles.rodape}>
                    {total > 0 && (
                        <div className={styles.total}>
                            <span>Total estimado</span>
                            <span>{moeda(total)}</span>
                        </div>
                    )}
                    {vazio
                        ? <Botao disabled>Fazer orçamento no WhatsApp</Botao>
                        : <Botao href={href} target="_blank" rel="noopener noreferrer">Fazer orçamento no WhatsApp</Botao>}
                    {!vazio && <button type="button" className={styles.limpar} onClick={carrinho.limpar}>Limpar orçamento</button>}
                    <small>O valor final e a disponibilidade são confirmados pelo vendedor.</small>
                </div>
            </aside>
        </>
    )
}

export default Carrinho
