<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $email_from = 'ayush.b.agarwal@hotmail.com';

  $email_subject = "New Form on Website";

  $email_body = "Name: $name.\n".
                "Email: $email.\n".
                "Message: $message.\n";

  $to = "ayush.b.agarwal@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers = "Reply-To: $email \r\n";

  mail($to, $email_subject, $email-body, $headers);

  header("Location: contact page");

?>
