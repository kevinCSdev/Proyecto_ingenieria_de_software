import express from "express";

const app = express();
app.use(express.json());
const port = 3000;

const lista_alumnos = [{"nombre": "sebastian"}];

app.get("/", (req, res) => {
    res.send(lista_alumnos);
});

app.post("/", (req, res) => {
    const body = req.body;
    lista_alumnos.push(body);
    res.send("Guardado exitosamente");
});

app.listen(port, () => {
    console.log(`La app esta en localhost:${port}`);
});