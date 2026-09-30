import { useCallback, useState } from 'react'
import './App.css'
import { data } from './data/data.js'
import { CarrinhoProvider } from './context/CarrinhoContext.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Carrinho from './components/carrinho/Carrinho.jsx'
import ProdutoModal from './components/produto-modal/ProdutoModal.jsx'
import Inicio from './sections/inicio/Inicio.jsx'
import Beneficios from './sections/beneficios/Beneficios.jsx'
import Catalogo from './sections/catalogo/Catalogo.jsx'
import SobreNos from './sections/sobre-nos/SobreNos.jsx'
import Contatos from './sections/contatos/Contatos.jsx'

function App() {
    const [carrinhoAberto, setCarrinhoAberto] = useState(false)
    const [produtoId, setProdutoId] = useState(null)

    const abrirCarrinho = useCallback(() => setCarrinhoAberto(true), [])
    const fecharCarrinho = useCallback(() => setCarrinhoAberto(false), [])
    const fecharProduto = useCallback(() => setProdutoId(null), [])
    const carrinhoDoProduto = useCallback(() => {
        setProdutoId(null)
        setCarrinhoAberto(true)
    }, [])

    const { itens, categorias } = data.catalogo
    const produto = itens.find((i) => i.id === produtoId)

    return (
        <CarrinhoProvider itens={itens}>
            <div className="mainContainer">
                <Header empresa={data.empresa} onCarrinho={abrirCarrinho} />
                <main>
                    <Inicio inicio={data.inicio} onCarrinho={abrirCarrinho} />
                    <Beneficios beneficios={data.beneficios} />
                    <Catalogo catalogo={data.catalogo} onAbrirProduto={setProdutoId} />
                    <SobreNos sobre={data.sobre} />
                    <Contatos contatos={data.contatos} link={data.empresa.link} />
                </main>
                <Footer empresa={data.empresa} />
            </div>
            <Carrinho aberto={carrinhoAberto} onFechar={fecharCarrinho} empresa={data.empresa} />
            {produto && (
                <ProdutoModal
                    key={produto.id}
                    item={produto}
                    categoria={categorias.find((c) => c.id === produto.categoria)}
                    onFechar={fecharProduto}
                    onAbrirCarrinho={carrinhoDoProduto}
                />
            )}
        </CarrinhoProvider>
    )
}

export default App
