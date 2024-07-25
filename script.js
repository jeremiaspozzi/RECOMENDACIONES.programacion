// Importar las dependencias necesarias
const express = require('express');
const app = express();
const port = 3000;

// Simulación de base de datos de productos
const productos = [
  { id: 1, nombre: 'Producto 1', categoria: 'A' },
  { id: 2, nombre: 'Producto 2', categoria: 'A' },
  { id: 3, nombre: 'Producto 3', categoria: 'B' },
  { id: 4, nombre: 'Producto 4', categoria: 'B' },
  { id: 5, nombre: 'Producto 5', categoria: 'A' },
];

// Ruta para obtener productos similares
app.get('/api/productos-similares/:id', (req, res) => {
  const productoId = parseInt(req.params.id);
  const producto = productos.find(p => p.id === productoId);

  if (producto) {
    // Encontrar productos de la misma categoría
    const productosSimilares = productos.filter(p => p.categoria === producto.categoria && p.id !== productoId);
    res.json(productosSimilares);
  } else {
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
