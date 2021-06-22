<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$text = $_POST['text-message'];

$to = 'aleksey19988@gmail.com';
$subject = 'Письмо с сайта-портфолио';


/*Преобразование символов в сущности (мнемоники) */
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);


/*Декодирование URL */
$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);
$text = urldecode($text);


/*Удаляем пробелы по краям */
$name = trim($name);
$phone = trim($phone);
$email = trim($email);
$text = trim($text);


//Отправляем письмо на почту

if(mail($to/*Адрес получателя*/,
        $subject/*Тема письма*/,
        "Имя: ".$name."\n".
        "Телефон: ".$phone."\n".
        "E-mail: ".$email."\n".
        "Сообщение: ".$text."\n",
        "From: no-reply@portfolio.io",
)) {
    echo 'Сообщение успешно отправлено!';
} else {
    echo 'Произошла ошибка!';
}