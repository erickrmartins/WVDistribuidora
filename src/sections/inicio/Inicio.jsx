import styles from './Inicio.module.css'
import Botao from '../../components/botao/Botao.jsx'

function Inicio({ inicio, onCarrinho }) {
    return (
        <section id="inicio" className={styles.inicio}>
            <h1>{inicio.titulo}</h1>
            <h2>{inicio.subtitulo}</h2>
            <div className={styles.botoes}>
                <Botao variante="contorno" href="#catalogo">{inicio.botaoCatalogo}</Botao>
                <Botao onClick={onCarrinho}>{inicio.botaoOrcamento}</Botao>
            </div>
        </section>
    )
}

export default Inicio
