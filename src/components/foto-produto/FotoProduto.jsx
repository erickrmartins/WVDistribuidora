import styles from './FotoProduto.module.css'
import Imagem from '../imagem/Imagem.jsx'
import IconeCategoria from '../icone-categoria/IconeCategoria.jsx'

// imagem pode ser sobrescrita pela combinação de variações escolhida.
function FotoProduto({ item, imagem = null }) {
    const arquivo = imagem ?? item.imagem

    return (
        <div className={styles.foto}>
            <Imagem
                src={arquivo ? `produtos/${arquivo}` : null}
                alt={item.nome}
                fallback={<IconeCategoria id={item.categoria} />}
            />
        </div>
    )
}

export default FotoProduto
