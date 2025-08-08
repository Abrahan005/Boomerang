<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require("db.php");

// Recibir datos del frontend
$input = json_decode(file_get_contents("php://input"), true);

$email = trim($input["email"] ?? "");
$password = trim($input["password"] ?? "");

// Validar campos vacíos
if ($email === "" || $password === "") {
    echo json_encode(["success" => false, "mensaje" => "Todos los campos son obligatorios."]);
    exit;
}

// Buscar usuario por email
$sql = "SELECT * FROM usuarios WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows === 1) {
    $usuario = $resultado->fetch_assoc();

    // Verificar contraseña
    if (password_verify($password, $usuario["password"])) {
        unset($usuario["password"]); // No devolver la contraseña
        echo json_encode(["success" => true, "usuario" => $usuario]);
        exit;
    }
}

echo json_encode(["success" => false, "mensaje" => "Correo o contraseña incorrectos."]);
?>
