import styles from './ItemProduto.module.css'
import FotoProduto from '../foto-produto/FotoProduto.jsx'
import AcoesProduto from '../acoes-produto/AcoesProduto.jsx'

function ItemProduto({ item, onAbrir }) {
    return (
        <article className={styles.linha} onClick={() => onAbrir(item.id)}>
            <div className={styles.foto}>
                <FotoProduto item={item} />
            </div>
            <div className={styles.texto}>
                <h3>
                    <button
                        type="button"
                        className={styles.nome}
                        onClick={(e) => { e.stopPropagation(); onAbrir(item.id) }}
                    >
                        {item.nome}
                    </button>
                </h3>
                <p>{item.descricao}</p>
            </div>
            {item.preco && <span className={styles.preco}>R$ {item.preco}</span>}
            <div className={styles.acoes} onClick={(e) => e.stopPropagation()}>
                <AcoesProduto item={item} onAbrir={onAbrir} />
            </div>
        </article>
    )
}

export default ItemProduto
