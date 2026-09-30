import styles from './TituloSecao.module.css'

function TituloSecao({ titulo, subtitulo }) {
    return (
        <div className={styles.titulo}>
            <h1>{titulo}</h1>
            {subtitulo && <h2>{subtitulo}</h2>}
        </div>
    )
}

export default TituloSecao
