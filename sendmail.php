<?php
if(isset($_POST['tel'])) {
    $tel = $_POST['tel'];
    $to = 'lyamzer2002@gmail.com';
    $subject = 'Новое бронирование номера';
    $message = 'Номер телефона: '.$tel;
    $headers = 'From: kyivview@.com' . "\r\n" .
    'Reply-To: отправитель@домен.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    mail($to, $subject, $message, $headers);
}
?>