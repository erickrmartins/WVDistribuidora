import styles from './Beneficios.module.css'

function Beneficios({ beneficios }) {
    return (
        <section className={styles.beneficios}>
            <div className={styles.grade}>
                {beneficios.map((b) => (
                    <div key={b.id} className={styles.item}>
                        <h3>{b.titulo}</h3>
                        <span>{b.texto}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Beneficios
