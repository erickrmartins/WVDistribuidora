import styles from './IconeCategoria.module.css'

const caminhos = {
    maq: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z',
    pan: 'M4 10h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zM2 10h20M9 6h6',
    faq: 'M7 3v7M5 3v5a2 2 0 0 0 4 0V3M7 10v11M17 3c-2 2-2 6 0 8v10',
    out: 'M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10',
}

function IconeCategoria({ id }) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icone}>
            <path d={caminhos[id] ?? caminhos.out} />
        </svg>
    )
}

export default IconeCategoria
