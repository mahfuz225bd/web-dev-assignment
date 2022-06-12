<?php
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';
require './PHPMailer/src/Exception.php';

$mail = new PHPMailer\PHPMailer\PHPMailer();

//Variables
$name = $_GET['name'];
$from = $_GET['email'];
$phoneNumber = $_GET['phone'];
$subject = $_GET['subject'];
$message = $_GET['message'];

//$mail->SMTPDebug = 3;                                 // Enable verbose debug output

$mail->isSMTP();                                        // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                         // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                                 // Enable SMTP authentication
$mail->Username = 'thelionk91@gmail.com';               // SMTP username
$mail->Password = 'wfvnlcxcgdpgcccc';                   // SMTP password
$mail->SMTPSecure = 'tls';                              // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; //25                                 // TCP port to connect to

$mail->setFrom($name, $from);
$mail->addAddress("thelionk91@gmail.com");              // Add a recipient

$mail->isHTML(true);
$mail->Subject = $subject;
$mail->Body    = $message . '<br/><br/>==============================<br/> Email: ' . $from . '<br/> Name: ' . $name . '<br/>Phone Number: ' . $phoneNumber;

if(!$mail->send()) {
    echo '<span class="loading text-danger text-left pl-4">';
    echo 'Message could not be sent. <br/>';
    echo 'Mailer Error: ' . $mail->ErrorInfo. '<a href="./contact.html">Try again</a>.';
    echo '</span>';
} else {
    echo '<span class="loading text-success">Message has been sent.</span>';
}