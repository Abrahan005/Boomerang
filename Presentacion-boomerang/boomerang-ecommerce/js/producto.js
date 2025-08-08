// Ejecutar solo si existe el contenedor del detalle
document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("detalle-producto");

  if (!contenedor) return; // No estamos en producto.html

  // Simular productos si no están definidos (opcional)
  // Puedes eliminar esto si ya estás importando productos desde otro archivo
  const productos = window.productos || [
    {
    id: 1,
    nombre: "Laptop Gamer Lenovo",
    categoria: "Tecnología",
    precio: 3200,
    descripcion: "Laptop de alto rendimiento ideal para gaming y tareas exigentes.",
    imagen: "img/laptop.jpg"
  },
  {
    id: 2,
    nombre: "Camiseta Oversize",
    categoria: "Ropa",
    precio: 55,
    descripcion: "Camiseta de algodón 100%, suave y cómoda.",
    imagen: "img/camiseta.jpg"
  },
  {
    id: 3,
    nombre: "Robot Interactivo",
    categoria: "Juguetes",
    precio: 120,
    descripcion: "Robot que responde a comandos de voz y se desplaza.",
    imagen: "img/robot.jpg"
  },
  {
    id: 4,
    nombre: "Set de Maquillaje",
    categoria: "Belleza",
    precio: 85,
    descripcion: "Incluye sombras, labiales y brochas profesionales.",
    imagen: "img/maquillaje.jpg"
  }
];
  // Obtener ID de la URL
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  // Buscar producto
  const producto = productos.find(p => p.id === id);

  if (producto) {
    contenedor.innerHTML = `
      <div style="display:flex; flex-wrap:wrap; gap:30px; align-items:center;">
        <img src="${producto.imagen}" alt="${producto.nombre}" style="max-width: 350px; border-radius: 15px;">
        <div style="max-width: 500px;">
          <h2>${producto.nombre}</h2>
          <p><strong>Categoría:</strong> ${producto.categoria}</p>
          <p><strong>Descripción:</strong> ${producto.descripcion}</p>
          <p style="font-size: 1.2rem; color: #4a90e2; font-weight: bold;">S/. ${producto.precio}</p>
          <button onclick="agregarAlCarrito(${producto.id})" style="margin-top:15px; padding:10px 20px; background-color:#4a90e2; color:white; border:none; border-radius:10px; cursor:pointer;">Agregar al carrito</button>
        </div>
      </div>
    `;
  } else {
    contenedor.innerHTML = "<p>Producto no encontrado.</p>";
  }

  // Guardar en carrito (localStorage)
  function agregarAlCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
  }
});

