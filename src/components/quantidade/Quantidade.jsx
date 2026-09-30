import styles from './Quantidade.module.css'

function Quantidade({ qtd, onMenos, onMais, grande = false }) {
    return (
        <div className={`${styles.qtd} ${grande ? styles.grande : ''}`}>
            <button type="button" onClick={onMenos} aria-label="Diminuir">−</button>
            <span>{qtd}</span>
            <button type="button" data-mais onClick={onMais} aria-label="Aumentar">+</button>
        </div>
    )
}

export default Quantidade
