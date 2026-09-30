import styles from './Catalogo.module.css'
import TituloSecao from '../../components/titulo-secao/TituloSecao.jsx'
import ItemProduto from '../../components/item-produto/ItemProduto.jsx'

function Catalogo({ catalogo, onAbrirProduto }) {
    return (
        <section id="catalogo" className={styles.catalogo}>
            <TituloSecao titulo={catalogo.titulo} subtitulo={catalogo.subtitulo} />
            <div className={styles.lista}>
                {catalogo.categorias.map((cat) => {
                    const itens = catalogo.itens.filter((i) => i.categoria === cat.id)
                    if (itens.length === 0) return null
                    return (
                        <div key={cat.id} className={styles.grupo}>
                            <h3>{cat.nome}</h3>
                            {itens.map((item) => (
                                <ItemProduto key={item.id} item={item} onAbrir={onAbrirProduto} />
                            ))}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Catalogo
