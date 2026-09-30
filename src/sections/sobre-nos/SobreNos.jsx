import styles from './SobreNos.module.css'
import Imagem from '../../components/imagem/Imagem.jsx'
import IconeCategoria from '../../components/icone-categoria/IconeCategoria.jsx'

function SobreNos({ sobre }) {
    return (
        <section id="sobre-nos">
            <div className={styles.cabecalho}>
                <h1>{sobre.titulo}</h1>
            </div>
            <div className={styles.conteudo}>
                <div className={styles.imagem}>
                    <Imagem src={sobre.imagem} alt={sobre.destaque} fallback={<IconeCategoria id="maq" />} />
                </div>
                <div className={styles.texto}>
                    <h3>{sobre.destaque}</h3>
                    <h2>{sobre.subtitulo}</h2>
                    <p>{sobre.texto}</p>
                </div>
            </div>
        </section>
    )
}

export default SobreNos
