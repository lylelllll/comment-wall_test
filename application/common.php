<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require '../vendor/phpmailer/phpmailer/src/Exception.php';
require '../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/phpmailer/src/SMTP.php';
function mailto($to,$title,$content){
    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->SMTPDebug = 0;// Enable verbose debug output
        $mail->CharSet = 'utf-8';
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.163.com';                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'leruge@163.com';                     // SMTP username
        $mail->Password   = 'Ai157511';                               // SMTP password
        $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
        $mail->Port       = 465;                                    // TCP port to connect to

        //Recipients
        $mail->setFrom('leruge@163.com', '王博大帅哥');
        $mail->addAddress($to);     // Add a recipient

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = $title;
        $mail->Body    = $content;

       return $mail->send();
    } catch (Exception $e) {
      exception($mail->ErrorInfo,1001);
    }

}

function replace($data)
{
    return str_replace('span','a',$data);
}