import { buscarTodosProdutos } from '../repositories/produtoRepository.js';
import { buscarProdutoEspecifico } from '../repositories/produtoRepository.js';
import { cadastrarProduto } from '../repositories/produtoRepository.js';

async function buscarProdutos(req, res) {
    const produtos = await buscarTodosProdutos();
    return res.json(produtos);
}

async function buscarProdutoUnico(req, res) {
    const produtos = await buscarProdutoEspecifico();
    const id = req.params.id;

    const idConvertido = Number(id);

    if(isNaN(idConvertido)) {
        res.status(400).send("Parametro id inválido");
    }

    const produto = await buscarProdutoEspecifico(idConvertido);

    if (!produto) {
        res.status(404).json({ erro: "Produto não encontrado" });
    }

    return res.json(produto);
}

async function salvarProduto(req, res) {
    const { nome, preco, categoria } = req.body;

    if (typeof nome !== "string" || nome.trim() === ""||
        typeof preco !== "number" || preco < 0 || 
        typeof categoria !== "string" || categoria.trim() === "") {
        return res.status(422).json({ erro: "Dados invalidos" });
    }

    const dadosProduto = {
        nome: nome.trim(),
        preco,
        categoria: categoria.trim()
    }

    const produtoCriado = await cadastrarProduto(dadosProduto);

    return res.status(201).json(produtoCriado);
    
}

export {
    buscarProdutos,
    buscarProdutoUnico,
    salvarProduto
}