<?php
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';
require './PHPMailer/src/Exception.php';

$mail = new PHPMailer\PHPMailer\PHPMailer();

//Variables
$name = $_GET['name'];
$email = $_GET['email'];
$billingAddress = $_GET['billingAddress'];
$phoneNumber = $_GET['phone'];
$note = $_GET['note'];
$shippingAddress = $_GET['shippingAddress'];
$payment = $_GET['payment'];
$orderDetails = $_GET['hiddenOrderDetails'];

$message = sprintf("
Name: %s <br/>
Email: %s <br/>
Billing Address: %s <br/>
Phone Number: %s <br/>
Say Something: %s <br/>
====================================================================== <br/>
Shipping Address: %s <br/>
====================================================================== <br/>
Payment Method: %s <br/>
====================================================================== <br/>
Order Details: <br/>
%s
", $name, $email, $billingAddress, $phoneNumber, $note, $shippingAddress, $payment, $orderDetails);

//$mail->SMTPDebug = 3;                                 // Enable verbose debug output

$mail->isSMTP();                                        // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                         // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                                 // Enable SMTP authentication
$mail->Username = 'thelionk91@gmail.com';               // SMTP username
$mail->Password = 'wfvnlcxcgdpgcccc';                   // SMTP password
$mail->SMTPSecure = 'tls';                              // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; //25                                 // TCP port to connect to

$mail->setFrom($name, $email);
$mail->addAddress("thelionk91@gmail.com");              // Add a recipient

$mail->isHTML(true);
$mail->Subject = "A Order from " . $name . " - " . $phoneNumber;
$mail->Body    = $message;

if(!$mail->send()) {
    echo '<span class="loading text-danger text-left pl-4">';
    echo 'Order could not be sent. <br/>';
    echo 'Mailer Error: ' . $mail->ErrorInfo. '<a href="./checkout.html">Try again</a>.';
    echo '</span>';
} else {
    echo '<span class="loading text-success">Order have been sent successfully.</span>';
}