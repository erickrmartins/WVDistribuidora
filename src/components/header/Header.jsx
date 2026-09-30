import { useState } from 'react'
import styles from './Header.module.css'
import Imagem from '../imagem/Imagem.jsx'
import { useCarrinho } from '../../context/CarrinhoContext.jsx'

function Header({ empresa, onCarrinho }) {
    const [menu, setMenu] = useState(false)
    const { quantidade } = useCarrinho()
    const fechar = () => setMenu(false)

    return (
        <header className={styles.header}>
            <a href="#inicio" className={styles.logo} onClick={fechar}>
                <Imagem
                    src="logo.png"
                    alt={empresa.nome}
                    fallback={<span className={styles.logoTexto}>{empresa.nome}</span>}
                />
            </a>
            <nav className={`${styles.nav} ${menu ? styles.on : ''}`} aria-label="Principal">
                <ul>
                    <li><a href="#inicio" onClick={fechar}>Início</a></li>
                    <li><a href="#catalogo" onClick={fechar}>Catálogo</a></li>
                    <li><a href="#sobre-nos" onClick={fechar}>Sobre nós</a></li>
                    <li><a href="#contatos" onClick={fechar}>Contatos</a></li>
                </ul>
            </nav>
            <div className={styles.acoes}>
                <button
                    type="button"
                    className={styles.carrinho}
                    onClick={onCarrinho}
                    aria-label={quantidade ? `Abrir orçamento, ${quantidade} ${quantidade > 1 ? 'itens' : 'item'}` : 'Abrir orçamento'}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.4 11h10.2L20 7H6.2M9 20h.01M17 20h.01" /></svg>
                    {quantidade > 0 && <span>{quantidade}</span>}
                </button>
                <button
                    type="button"
                    className={styles.menu}
                    onClick={() => setMenu(!menu)}
                    aria-label="Menu"
                    aria-expanded={menu}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
                </button>
            </div>
        </header>
    )
}

export default Header
