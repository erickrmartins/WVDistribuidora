import styles from './FotoProduto.module.css'
import Imagem from '../imagem/Imagem.jsx'
import IconeCategoria from '../icone-categoria/IconeCategoria.jsx'

// Preenche o espaço do elemento pai (o pai define o tamanho)
function FotoProduto({ item }) {
    return (
        <div className={styles.foto}>
            <Imagem
                src={item.imagem ? `produtos/${item.imagem}` : null}
                alt={item.nome}
                fallback={<IconeCategoria id={item.categoria} />}
            />
        </div>
    )
}

export default FotoProduto
