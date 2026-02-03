const express = require("express");
const app = express();

const PORT = 5000;

app.use(express.json());

let productos = [
  { id: 1, nombre: "Mouse", precio: 15000 },
  { id: 2, nombre: "Teclado", precio: 38000 },
  { id: 3, nombre: "Monitor", precio: 250000 },
  { id: 4, nombre: "Impresora", precio: 150000 },
  { id: 5, nombre: "Pendrive", precio: 55000 },
  { id: 6, nombre: "Auriculares", precio: 115000 },
  { id: 7, nombre: "Joystick", precio: 88000 },
  { id: 8, nombre: "Parlantes", precio: 75000 },
];

app.get("/", (req, res) => {
  res.status(200).json("Bienvenidos");
});

app.get("/productos", (req, res) => {
  res.status(200).json({
    title: "Lista de productos",
    productos: productos,
    total_productos: productos.length,
  });
});

app.get("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find((p) => p.id === id);
  if (!producto) {
    return res.status(404).json({ error: "El producto no fue encontrado" });
  }
  res.status(200).json(producto);
});

app.post("/productos", (req, res) => {
  const { nombre, precio } = req.body;
  const nuevo = {
    id: productos.length ? productos[productos.length - 1].id + 1 : 1,
    nombre,
    precio,
  };
  productos.push(nuevo);
  res
    .status(201)
    .json({ message: "El producto fue creado con exito.!", producto: nuevo });
});

app.put("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, precio } = req.body;
  const producto = productos.find((p) => p.id === id);
  if (!producto)
    return res.status(404).json({ error: " El producto no fue actualizado " });

  producto.nombre = nombre ?? producto.nombre;
  producto.precio = precio ?? producto.precio;

  res.status(200).json({
    message: "El producto fue actualizado con exito.!",
    producto: producto,
  });
});

app.delete("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find((p) => p.id === id);
  if (!producto)
    return res.status(404).json({ error: "Producto no encontrado" });
  productos = productos.filter((p) => p.id !== id);
  res.status(204).send();
});

app.listen(PORT, () =>
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`),
);
