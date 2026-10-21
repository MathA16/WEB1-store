import express from 'express'
import 'dotenv/config';
import { buscarProdutos, buscarProdutoUnico } from './src/controllers/produtoController.js';

const PORTA = process.env.PORT;

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get("/produtos", buscarProdutos);

app.get("/produtos/:id", buscarProdutoUnico);

app.listen(PORTA, () => {
  console.log(`Server is running on http://localhost:${PORTA}`)
})