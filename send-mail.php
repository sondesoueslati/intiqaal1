<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$to = "saifeddin.matoui@vortex-technologie.com";
$toName = "Intiqaal";
require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);
 
// echo 'iii',
$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
// $mail->SMTPSecure = 'ssl';
$mail->Username = "saifeddinmatoui4@gmail.com";
$mail->Password = "ngtxitjwbxomtibl";

$mail->setFrom($email, "Admin");
$mail->AddReplyTo($email, $name);
$mail->addAddress($to, $toName);

$mail->Subject = $subject;
$mail->Body = "Email: ".$email."\n Name: ".$name."\n Subject: ".$subject."\n Message: ".$message."\n";

$mail->send();

header("Location: index.html"); // Redirect after success 