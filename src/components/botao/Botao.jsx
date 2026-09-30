import styles from './Botao.module.css'

function Botao({ variante = 'primario', tamanho = 'md', href, className = '', ...props }) {
    const classes = [
        styles.botao,
        variante === 'contorno' ? styles.contorno : '',
        tamanho === 'sm' ? styles.pequeno : '',
        className,
    ].join(' ')

    return href
        ? <a className={classes} href={href} {...props} />
        : <button type="button" className={classes} {...props} />
}

export default Botao
