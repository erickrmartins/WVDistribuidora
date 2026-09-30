import styles from './Footer.module.css'

function Footer({ empresa }) {
    return (
        <footer className={styles.footer}>
            <p>{empresa.nome} - Todos os direitos reservados - CNPJ: {empresa.cnpj}</p>
        </footer>
    )
}

export default Footer
