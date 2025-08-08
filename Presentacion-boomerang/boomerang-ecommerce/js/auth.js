document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector("button");
  const errorDiv = document.querySelector(".error");

  boton.addEventListener("click", () => {
    const usuario = document.querySelector('input[type="text"]').value;
    const clave = document.querySelector('input[type="password"]').value;

    if (usuario === "admin" && clave === "1234") {
      window.location.href = "index.html";
    } else {
      errorDiv.style.display = "block";
    }
  });
});
