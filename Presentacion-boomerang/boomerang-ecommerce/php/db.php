<?php
$host = "localhost";
$usuario = "root";
$contrasena = ""; // cambia esto si tu MySQL tiene contraseña
$basedatos = "boomerang";

// Crear conexión
$conn = new mysqli($host, $usuario, $contrasena, $basedatos);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Configurar charset
$conn->set_charset("utf8");
?>
