<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

function ew_sanitize_line($value) {
    return trim(str_replace(["\r", "\n"], ' ', (string) $value));
}

$nome = ew_sanitize_line($data['nome'] ?? '');
$cognome = ew_sanitize_line($data['cognome'] ?? '');
$email = filter_var(trim((string) ($data['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$telefono = ew_sanitize_line($data['telefono'] ?? '');
$oggetto = ew_sanitize_line($data['oggetto'] ?? '');
$messaggio = trim((string) ($data['messaggio'] ?? ''));
$privacy = !empty($data['privacy']);

if ($nome === '' || $cognome === '' || $email === false || $oggetto === '' || $messaggio === '' || !$privacy) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'invalid_input']);
    exit;
}

$to = 'info@easyworkagency.com';
$subject = '=?UTF-8?B?' . base64_encode('Nuovo messaggio dal sito - ' . $oggetto) . '?=';

$body = "Nome: $nome $cognome\n";
$body .= "Email: $email\n";
if ($telefono !== '') {
    $body .= "Telefono: $telefono\n";
}
$body .= "Oggetto: $oggetto\n";
$body .= "\nMessaggio:\n$messaggio\n";

$headers = [
    'From: Sito Easy Work <noreply@easyworkagency.com>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'send_failed']);
}
