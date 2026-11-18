import { Router } from "express";
import { buscarTodosProdutos, buscarProdutoEspecifico } from "../repositories/produtoRepository.js";
import { salvarProduto } from "../controllers/produtoController.js";

const router = Router();

// rota para listar todos os produtos
router.get("/", buscarTodosProdutos);
// rota para buscar um produto específico pelo ID
router.get("/:id", buscarProdutoEspecifico);
//Rota para cadastro de um novo produto
router.post("/", salvarProduto)

export default router;