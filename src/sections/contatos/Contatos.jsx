import styles from './Contatos.module.css'
import TituloSecao from '../../components/titulo-secao/TituloSecao.jsx'

function Contatos({ contatos, link }) {
    const { pedidos, endereco, redes, horario } = contatos
    return (
        <section id="contatos">
            <TituloSecao titulo={contatos.titulo} subtitulo={contatos.subtitulo} />
            <div className={styles.grade}>
                <div className={styles.caixa}>
                    <label>{pedidos.label}</label>
                    <a href={link} target="_blank" rel="noopener noreferrer">{pedidos.botao}</a>
                </div>
                <div className={styles.caixa}>
                    <label>{endereco.label}</label>
                    <a href={endereco.url}>{endereco.texto}</a>
                </div>
                <div className={styles.caixa}>
                    <label>{redes.label}</label>
                    {redes.itens.map((r) => (
                        <a key={r.id} href={r.url}>{r.label}</a>
                    ))}
                </div>
                <div className={styles.caixa}>
                    <label>{horario.label}</label>
                    {horario.itens.map((h) => (
                        <div key={h.id} className={styles.horario}>
                            <p>{h.dia}</p>
                            <p>{h.horas}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contatos
