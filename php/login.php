<?php

$email = trim($_POST["email"] ?? "");
$sifre = trim($_POST["sifre"] ?? "");

$dogruMail = "b251210405@sakarya.edu.tr";
$dogruSifre = "b251210405";

if($email === "" || $sifre === ""){
    header("Location: ../login.html");
    exit();
}

if($email === $dogruMail && $sifre === $dogruSifre){

    $ogrenciNo = explode("@", $email)[0];

    echo "
    <!DOCTYPE html>

    <html lang='tr'>

    <head>
        <meta charset='UTF-8'>
        <title>Başarılı Giriş</title>

        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet'>
    </head>

    <body class='bg-dark text-white d-flex justify-content-center align-items-center vh-100'>

        <div class='text-center'>

            <h1>Hoşgeldiniz $ogrenciNo</h1>

            <p class='mt-3'>Giriş başarılı.</p>

            <a href='../index.html' class='btn btn-primary mt-3'>
                Ana Sayfaya Dön
            </a>

        </div>

    </body>

    </html>
    ";

} else {

    header("Location: ../login.html");
    exit();

}

?>