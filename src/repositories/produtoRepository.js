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

export {
    buscarTodosProdutos,
    buscarProdutoEspecifico
};