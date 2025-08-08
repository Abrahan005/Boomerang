<?php
// Headers
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

// Conexión a la base de datos
require("db.php");

// Recibir los datos JSON
$input = json_decode(file_get_contents("php://input"), true);

$nombre = trim($input["nombre"] ?? "");
$email = trim($input["email"] ?? "");
$password = trim($input["password"] ?? "");

// Validación simple
if ($nombre === "" || $email === "" || $password === "") {
    echo json_encode(["success" => false, "mensaje" => "Todos los campos son obligatorios."]);
    exit;
}

// Verificar si el usuario ya existe
$sql = "SELECT * FROM usuarios WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    echo json_encode(["success" => false, "mensaje" => "El correo ya está registrado."]);
    exit;
}

// Insertar nuevo usuario
$hash = password_hash($password, PASSWORD_BCRYPT);

$sql = "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nombre, $email, $hash);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "mensaje" => "Error al registrar usuario."]);
}
?>
