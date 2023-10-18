<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
// header location

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions


$mail = new PHPMailer(true);


try {
  //Server settings
  $mail->SMTPDebug = 2;                      //Enable verbose debug output
  $mail->isSMTP();                                            //Send using SMTP
  $mail->Host       = 'mail.dpjd1.com';                     //Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
  $mail->Username   = 'no-reply@dpjd1.com';                     //SMTP username
  $mail->Password   = '6j?6$2z9IKf)';                               //SMTP password
  //Enable implicit TLS encryption
  $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

  //Recipients
  $mail->setFrom('no-reply@dpjd1.com', 'Pagina web Pastor Julio');
  $mail->addAddress('jdflorez480@gmail.com', 'User');     //Add a recipient


  //Content
  $mail->isHTML(true);                                  //Set email format to HTML
  $mail->Subject = '' . $_POST['subject'] . '' ;
  $mail->Body    = '<div style="width: 100%; background-color: #fff; ">
    <div style="max-width: 700px; background-color: white; margin: 0 auto">
      <div style="width: 100%; background-color: #233487; padding: 20px 0">
      <a href="https://dpjd.com/dpjd.com/" ><img
          src="https://dpjd.com/dpjd.com/img/logo_dpjd30x30.png"
          style="width: 100%; height: 70px; object-fit: contain"
        /></a> 
      
      </div>
      <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
        <p style="font-weight: 800; font-size: 1rem; padding: 0 30px; color:#2C44B2">
          Formulario de contacto de la pagina web Distribuciones Pastor Julio Delgado
        </p>

        <p style="font-weight: 800; font-size: 1rem; padding: 0 30px; color:#2C44B2">
        Me quiero comunicar con: ' . $_POST['unidad'] . '
      </p>
        <p style="font-weight: 800; font-size: 1rem; padding: 0 30px; color:#2C44B2">
          Nombre: ' . $_POST['name'] . '


        </p>
        <p style="font-weight: 800; font-size: 1rem; padding: 0 30px; color:#2C44B2">
          Correo: ' . $_POST['email'] . '
        </p>
        <p style="font-weight: 800; font-size: 1rem; padding: 0 30px; color:#2C44B2">
          Telefono: ' . $_POST['tel'] . '
        </p>
        <p style="font-weight: 800; font-size: 1rem; padding: 0 30px; color:#2C44B2">
          Asunto: ' . $_POST['subject'] . '
        </p>


        <p style="font-weight: 800; font-size: 1rem; padding: 0 30px; color:#2C44B2">
          Mensaje: ' . $_POST['message'] . '
        </p>


      </div>
    </div>
 
    ';


  $mail->send();
  echo json_encode('exito');
} catch (Exception $e) {
  echo json_encode('error');
}

