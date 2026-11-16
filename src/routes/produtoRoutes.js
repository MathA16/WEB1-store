import { Router } from "express";
import { buscarTodosProdutos, buscarProdutoEspecifico } from "../repositories/produtoRepository.js";

const router = Router();

// rota para listar todos os produtos
router.get("/", buscarTodosProdutos);
// rota para buscar um produto específico pelo ID
router.get("/:id", buscarProdutoEspecifico);

export default router;