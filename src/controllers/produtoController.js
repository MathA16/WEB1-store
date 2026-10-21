import { buscarTodosProdutos } from '../repositories/produtoRepository.js';
import { buscarProdutoEspecifico } from '../repositories/produtoRepository.js';

async function buscarProdutos(req, res) {
    const produtos = await buscarTodosProdutos();
    res.json(produtos);
};
async function buscarProdutoUnico(req, res) {
    const produtos = await buscarProdutoEspecifico();
    const id = req.params.id;

    const idConvertido = Number(id);

    if(isNaN(idConvertido)) {
        res.status(400).send("Parametro id inválido");
    }

    const produto = produtos.find(produto => produto.id === idConvertido);

    if (!produto) {
        res.status(404).json({ erro: "Produto não encontrado" });
    }

    res.json(produto);
}

export {
    buscarProdutos,
    buscarProdutoUnico
}