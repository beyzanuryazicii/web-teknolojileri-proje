<?php

$ad = $_POST['ad'];
$email = $_POST['email'];
$telefon = $_POST['telefon'];
$mesaj = $_POST['mesaj'];

echo "<h2>Gönderilen Bilgiler</h2>";

echo "Ad: " . $ad . "<br>";
echo "Email: " . $email . "<br>";
echo "Telefon: " . $telefon . "<br>";
echo "Mesaj: " . $mesaj . "<br>";

?>