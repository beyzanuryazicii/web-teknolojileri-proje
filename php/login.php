<?php

// Veri kontrolü
if(!isset($_POST["email"]) || !isset($_POST["sifre"])){
    header("Location: ../login.html");
    exit();
}

$email = trim($_POST["email"]);
$sifre = trim($_POST["sifre"]);

// boş kontrol
if($email == "" || $sifre == ""){
    header("Location: ../login.html?error=bos");
    exit();
}

// doğru bilgiler
$dogru_email = "b2412100001@sakarya.edu.tr";
$dogru_sifre = "b2412100001";

// kontrol
if($email === $dogru_email && $sifre === $dogru_sifre){

    echo "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <title>Başarılı Giriş</title>
        <style>
            body {
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
                background:#2563eb;
                color:white;
                font-family:sans-serif;
            }
            .box {
                background:white;
                color:black;
                padding:40px;
                border-radius:12px;
                text-align:center;
                box-shadow:0 10px 30px rgba(0,0,0,0.2);
            }
        </style>
    </head>
    <body>
        <div class='box'>
            <h1>Hoşgeldiniz</h1>
            <p>$email</p>
        </div>
    </body>
    </html>
    ";

} else {
    header("Location: ../login.html?error=1");
    exit();
}

?>