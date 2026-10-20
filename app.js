import express from 'express'
import 'dotenv/config';

const PORTA = process.env.PORT;

const app = express()

app.use(express.json());

const produtos = [
    {
        id: 1,
        nome: "Mouse gamer",
        preco: 99.90,
        categoria: "informatica"
    },
    {
        id: 2,
        nome: "Teclado gamer",
        preco: 199.90,
        categoria: "informatica"
    },
    {
        id: 3,
        nome: "Geladeira",
        preco: 2999.90,
        categoria: "eletrodomesticos"
    }
];

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
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
});

app.listen(PORTA, () => {
  console.log(`Server is running on http://localhost:${PORTA}`)
})