import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const arquivo = path.resolve(__dirname, '../database/db.json');

async function buscarTodosProdutos() {
    const conteudo = await readFile(arquivo);
    console.log("função buscarTodosProdutos executada com sucesso");

    return JSON.parse(conteudo);
}
async function buscarProdutoEspecifico(id) {
    const conteudo = await readFile(arquivo);
    const produtos = JSON.parse(conteudo);
    console.log("função buscarProdutoEspecifico executada com sucesso");

    const produto = produtos.find((p) => p.id === id);

    return produto;
}

async function cadastrarProduto(dadosProduto) {
    const conteudo = await readFile(arquivo);
    const produtos = JSON.parse(conteudo);

    let novoId = 1;
    
    if(produtos.length > 0) {
        novoId = Math.max(...produtos.map(p => p.id)) + 1;
    }

    const novoProduto = { ...dadosProduto, id: novoId };
    produtos.push(novoProduto);

    await writeFile(arquivo, JSON.stringify(produtos, null, 2), "utf-8");
    return novoProduto;
}
export {
    buscarTodosProdutos,
    buscarProdutoEspecifico,
    cadastrarProduto
};