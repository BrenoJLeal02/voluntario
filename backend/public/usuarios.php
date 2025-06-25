<?php
require '../conexao.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");

// Trata requisição OPTIONS para evitar erro de CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $stmt = $pdo->query("SELECT id, nome, email, tipo FROM usuarios");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        $nome = $data['nome'] ?? '';
        $email = $data['email'] ?? '';
        $senha = password_hash($data['senha'], PASSWORD_DEFAULT);
        $tipo = $data['tipo'] ?? 'user';

        $stmt = $pdo->prepare("INSERT INTO usuarios (nome, email, senha, tipo) VALUES (:nome, :email, :senha, :tipo)");
        $stmt->execute([
            'nome' => $nome,
            'email' => $email,
            'senha' => $senha,
            'tipo' => $tipo
        ]);

        echo json_encode(["status" => "criado"]);
        break;

    case 'DELETE':
        parse_str(file_get_contents("php://input"), $data);
        $id = $data['id'] ?? null;

        if ($id) {
            $stmt = $pdo->prepare("DELETE FROM usuarios WHERE id = :id");
            $stmt->execute(['id' => $id]);
            echo json_encode(["status" => "excluído"]);
        } else {
            http_response_code(400);
            echo json_encode(["erro" => "ID não fornecido"]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["erro" => "Método não permitido"]);
}
