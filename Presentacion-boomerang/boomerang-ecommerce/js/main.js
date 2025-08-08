const productos = [
  // Tecnología (1–15)
  { id: 1, nombre: "Laptop Gamer Lenovo", categoria: "Tecnología", precio: 3200, imagen: "img/lenovo loq.avif" },
  { id: 2, nombre: "Smartphone Samsung Galaxy S23", categoria: "Tecnología", precio: 4500, imagen: "IMG-2/galaxy-s23.webp" },
  { id: 3, nombre: "Tablet iPad Air", categoria: "Tecnología", precio: 2800, imagen: "IMG-2/ipad-air.webp" },
  { id: 4, nombre: "Monitor Curvo Samsung 27''", categoria: "Tecnología", precio: 1200, imagen:"IMG-2/monitor-curvo-samsung.webp" },
  { id: 5, nombre: "Teclado Mecánico RGB", categoria: "Tecnología", precio: 350, imagen: "IMG-2/teclado-mecanico.png" },
  { id: 6, nombre: "Mouse Gamer Logitech G502", categoria: "Tecnología", precio: 220, imagen: "IMG-2/g502-hero.webp" },
  { id: 7, nombre: "Auriculares Inalámbricos Sony", categoria: "Tecnología", precio: 600, imagen: "IMG-2/auriculares-sony.webp" },
  { id: 8, nombre: "Disco Duro Externo 2TB", categoria: "Tecnología", precio: 450, imagen: "IMG-2/disco-duro-2tb.webp" },
  { id: 9, nombre: "Impresora Multifuncional HP", categoria: "Tecnología", precio: 780, imagen: "IMG-2/impresora-hp.webp" },
  { id: 10, nombre: "Cámara Fotográfica Canon EOS", categoria: "Tecnología", precio: 3900, imagen: "IMG-2/camara.webp" },
  { id: 11, nombre: "Smartwatch Xiaomi Mi Band 8", categoria: "Tecnología", precio: 250, imagen: "IMG-2/xiaomi-8.jpg" },
  { id: 12, nombre: "Laptop MacBook Air M2", categoria: "Tecnología", precio: 5200, imagen: "IMG-2/macbook-m2.webp" },
  { id: 13, nombre: "Router Wi-Fi 6 TP-Link", categoria: "Tecnología", precio: 380, imagen: "IMG-2/router-wifi.png" },
  { id: 14, nombre: "Proyector Portátil", categoria: "Tecnología", precio: 1500, imagen: "IMG-2/proyector.jpg"},
  { id: 15, nombre: "Altavoz Bluetooth JBL", categoria: "Tecnología", precio: 420, imagen: "IMG-2/altavoz-jbl.webp" },

  // Ropa (16–30)
  { id: 16, nombre: "Correa Negra Cuero", categoria: "Accesorios", precio: 45, imagen: "img/Correa-negra-cuero.png" },
{ id: 17, nombre: "Abrigo Cuello De Tortuga Con Capucha", categoria: "Ropa", precio: 90, imagen: "img/abrigo-cuello-de-tortuga-con-capucha.png" },
{ id: 18, nombre: "Abrigo Dama", categoria: "Ropa", precio: 28, imagen: "img/abrigo-dama.png" },
{ id: 19, nombre: "Abrigo Para Dama", categoria: "Ropa", precio: 40, imagen: "img/abrigo-para-dama.png" },
{ id: 20, nombre: "Camisa Con Zapatos", categoria: "Ropa", precio: 45, imagen: "img/camisa-con-zapatos.jpg" },
{ id: 21, nombre: "Camisa Corduroy", categoria: "Ropa", precio: 38, imagen: "img/camisa-corduroy.png" },
{ id: 22, nombre: "Camisa Seda Hombre", categoria: "Ropa", precio: 45, imagen: "img/camisa-seda-hombre.png" },
{ id: 23, nombre: "Camisero", categoria: "Ropa", precio: 20, imagen: "img/camisero.png" },
{ id: 24, nombre: "Cartera Mujer", categoria: "Accesorios", precio: 32, imagen: "img/cartera-mujer.png" },
{ id: 25, nombre: "Casaca Cuero Con Capucha", categoria: "Ropa", precio: 60, imagen: "img/casaca-cuero-con-capucha.png" },
{ id: 26, nombre: "Casaca Impermeable", categoria: "Ropa", precio: 45, imagen: "img/casaca-impermeable.png" },
{ id: 27, nombre: "Lenovo Loq", categoria: "Tecnología", precio: 25, imagen: "img/lenovo loq.avif" },
{ id: 28, nombre: "Zapatilla Adidas Blancas", categoria: "Calzado", precio: 60, imagen: "img/zapatilla-adidas-blancas.png" },


  // Juguetes (31–45)
  { id: 31, nombre: "Robot Interactivo", categoria: "Juguetes", precio: 120, imagen: "IMG-2/robot-interactivo.webp" },
  { id: 32, nombre: "Set de Bloques LEGO", categoria: "Juguetes", precio: 250, imagen: "IMG-2/lego-1.webp" },
  { id: 33, nombre: "Muñeca Barbie", categoria: "Juguetes", precio: 90, imagen: "IMG-2/barbie-1.jpg" },
  { id: 34, nombre: "Auto a Control Remoto", categoria: "Juguetes", precio: 180, imagen: "IMG-2/auto-control-remoto.webp" },
  { id: 35, nombre: "Pelota de Fútbol", categoria: "Juguetes", precio: 70, imagen: "IMG-2/futbol.webp" },
  { id: 36, nombre: "Juego de Mesa Monopoly", categoria: "Juguetes", precio: 110, imagen: "IMG-2/monopoly.webp" },
  { id: 37, nombre: "Pista Hot Wheels", categoria: "Juguetes", precio: 150, imagen: "IMG-2/pista-hotwhells.jpg" },
  { id: 38, nombre: "Puzzle 1000 Piezas", categoria: "Juguetes", precio: 95, imagen: "IMG-2/rompecabezas.jpg" },
  { id: 39, nombre: "Drone Infantil", categoria: "Juguetes", precio: 320, imagen: "IMG-2/dron-infantil.webp" },
  { id: 40, nombre: "Peluches Variados", categoria: "Juguetes", precio: 60, imagen: "IMG-2/peluches.jpg" },
  { id: 41, nombre: "Tren Eléctrico", categoria: "Juguetes", precio: 280, imagen: "IMG-2/tren.jpeg" },
  { id: 42, nombre: "Juguete Educativo", categoria: "Juguetes", precio: 100, imagen: "IMG-2/educativo.jpg" },
  { id: 43, nombre: "Set de Dinosaurios", categoria: "Juguetes", precio: 130, imagen: "IMG-2/dinosaurios.webp" },
  { id: 44, nombre: "Karaoke Infantil", categoria: "Juguetes", precio: 210, imagen: "IMG-2/karaoke.jpg" },
  { id: 45, nombre: "Casa de Muñecas", categoria: "Juguetes", precio: 400, imagen: "IMG-2/casa-muñecas.webp" },

  // Belleza (46–60)
  { id: 46, nombre: "Set de Maquillaje Profesional", categoria: "Belleza", precio: 350, imagen: "IMG-2/maquillajeprofesional.webp" },
  { id: 47, nombre: "Perfume Chanel No.5", categoria: "Belleza", precio: 680, imagen: "IMG-2/plancha-cabello.jpg" },
  { id: 48, nombre: "Plancha para Cabello GHD", categoria: "Belleza", precio: 520, imagen: "IMG-2/plancha-cabello.jpg" },
  { id: 49, nombre: "Crema Facial Hidratante", categoria: "Belleza", precio: 150, imagen: "IMG-2/cremafacial.webp" },
  { id: 50, nombre: "Esmalte de Uñas Set", categoria: "Belleza", precio: 90, imagen: "IMG-2/esmalte-uñas.webp" },
  { id: 51, nombre: "Secadora de Cabello Dyson", categoria: "Belleza", precio: 1500, imagen: "IMG-2/secadora-dyson.webp" },
  { id: 52, nombre: "Mascarilla Facial de Oro", categoria: "Belleza", precio: 200, imagen: "IMG-2/oro.webp" },
  { id: 53, nombre: "Kit de Brochas Maquillaje", categoria: "Belleza", precio: 120, imagen: "IMG-2/Brocha-1.webp" },
  { id: 54, nombre: "Perfume Dior Sauvage", categoria: "Belleza", precio: 620, imagen: "IMG-2/sauvage.jpg" },
  { id: 55, nombre: "Loción Corporal", categoria: "Belleza", precio: 80, imagen: "IMG-2/locion-corporal.webp" },
  { id: 56, nombre: "Sombras de Ojos Paleta", categoria: "Belleza", precio: 260, imagen: "IMG-2/paleta de ojos.webp" },
  { id: 57, nombre: "Crema Antiarrugas", categoria: "Belleza", precio: 300, imagen: "IMG-2/crema antiarrugas.jpg" },
  { id: 58, nombre: "Removedor de Maquillaje", categoria: "Belleza", precio: 70, imagen: "IMG-2/removedor.webp" },
  { id: 59, nombre: "Aceite para Cabello", categoria: "Belleza", precio: 110, imagen: "IMG-2/aceite para cabello.jpg" },
  { id: 60, nombre: "Cepillo Alisador", categoria: "Belleza", precio: 180, imagen: "IMG-2/cepillo alisador.webp" }

];

// -------------------------
// Elementos DOM
// -------------------------
const contenedor = document.getElementById("contenedor-productos");
const busquedaInput = document.getElementById("busqueda");
const botonesCategorias = document.querySelectorAll(".categoria-btn");

// -------------------------
let categoriaActual = "Todos";
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

document.addEventListener("DOMContentLoaded", () => {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  }

  actualizarContadorCarrito();

  if (document.getElementById("carrito-items")) {
    mostrarCarrito();
  }
});


// -------------------------
function mostrarProductos(lista) {
  if (!contenedor) return;

  contenedor.innerHTML = "";
  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron productos.</p>";
    return;
  }

  lista.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <div class="info">
        <h3>${prod.nombre}</h3>
        <p class="precio">S/. ${prod.precio}</p>
        <button class="agregar-carrito">Agregar al carrito</button>
      </div>
    `;

    card.querySelector(".agregar-carrito").addEventListener("click", (e) => {
      e.stopPropagation();
      agregarAlCarrito(prod);
    });

    card.addEventListener("click", () => {
      window.location.href = `producto.html?id=${prod.id}`;
    });

    contenedor.appendChild(card);
  });
}

function filtrarProductos() {
  const texto = busquedaInput?.value.toLowerCase() || "";
  const filtrados = productos.filter(prod => {
    const coincideTexto = prod.nombre.toLowerCase().includes(texto);
    const coincideCategoria = categoriaActual === "Todos" || prod.categoria === categoriaActual;
    return coincideTexto && coincideCategoria;
  });
  mostrarProductos(filtrados);
}

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", () => {
    categoriaActual = boton.dataset.categoria;
    filtrarProductos();
  });
});

busquedaInput?.addEventListener("input", filtrarProductos);

function agregarAlCarrito(producto) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito");
}

function mostrarCarrito() {
  const carritoItems = document.getElementById("carrito-items");
  const totalSpan = document.getElementById("total");
  carritoItems.innerHTML = "";
  let total = 0;

  carrito.forEach((producto, index) => {
    const div = document.createElement("div");
    div.classList.add("carrito-item");
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.marginBottom = "10px";

    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 60px; height: 60px; object-fit: cover; margin-right: 10px;">
      <div style="flex-grow: 1;">
        <strong>${producto.nombre}</strong><br>
        S/ ${producto.precio.toFixed(2)}
      </div>
      <button class="btn-eliminar" data-index="${index}" style="margin-left: 10px;">🗑️</button>
    `;

    carritoItems.appendChild(div);
    total += producto.precio;
  });

  totalSpan.textContent = `S/ ${total.toFixed(2)}`;

  // Agregar eventos a botones de eliminar
  const botonesEliminar = document.querySelectorAll(".btn-eliminar");
  botonesEliminar.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      carrito.splice(index, 1); // eliminar del carrito
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito(); // volver a dibujar
    });
  });
}

function actualizarContadorCarrito() {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length;
  }
}



function eliminarDelCarrito(indice) {
  carrito.splice(indice, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}

function finalizarCompra() {
  const numero = "51925891651"; // tu número en formato internacional
  let mensaje = "Hola Boomerang, quiero finalizar mi compra. Aquí están los productos:\n\n";

  carrito.forEach((producto, index) => {
    mensaje += `${index + 1}. ${producto.nombre} - S/${producto.precio}\n`;
  });

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}



// Inicialización según página
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('carrito.html')) {
    mostrarCarrito();
  } else {
    mostrarProductos(productos);
  }
});
