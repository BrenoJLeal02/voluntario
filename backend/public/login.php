<?php
require '../conexao.php';
require '../vendor/autoload.php';

use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'] ?? '';
$senha = $data['senha'] ?? '';

if (!$email || !$senha) {
    http_response_code(400);
    echo json_encode(['error' => 'Email e senha são obrigatórios']);
    exit;
}

$stmt = $pdo->prepare("SELECT id, nome, email, senha, tipo FROM usuarios WHERE email = :email");
$stmt->execute(['email' => $email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    http_response_code(401);
    echo json_encode(['error' => 'Usuário não encontrado']);
    exit;
}

if (!password_verify($senha, $user['senha'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Senha inválida']);
    exit;
}

$secretKey = "SUA_CHAVE_SECRETA_AQUI";  
$issuedAt = time();
$expirationTime = $issuedAt + 3600; 
$payload = [
    'iat' => $issuedAt,
    'exp' => $expirationTime,
    'userId' => $user['id'],
    'nome' => $user['nome'],
    'email' => $user['email'],
    'tipo' => $user['tipo']
];

$jwt = JWT::encode($payload, $secretKey, 'HS256');

echo json_encode([
    'token' => $jwt
]);
