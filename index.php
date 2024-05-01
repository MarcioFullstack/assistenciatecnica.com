<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "marciooliveira9191@gmail.com"; // Endereço de e-mail do destinatário
    $subject = "Assunto do E-mail"; // Assunto do e-mail

    // Captura os campos do formulário
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Monta o corpo do e-mail
    $body = "Nome: $name\n";
    $body .= "E-mail: $email\n\n";
    $body .= "Mensagem:\n$message";

    // Configura os cabeçalhos do e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Envia o e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Erro ao enviar o e-mail. Verifique as configurações do servidor.";
    }
}
?>
