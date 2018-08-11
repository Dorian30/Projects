<?php
    $message = "Banersy:";
    $message.= "\nName: ".$_POST['name'];
    $message.= "\nEmail: ".$_POST['email'];
    $message.= "\nPhone Number: ".$_POST['phone'];
    $message.= "\nSubject:".$_POST['subject'];

    $owner= "fsg94@hotmail.com";
    $from= $_POST['email'];
    $subject = "Message from: ".$_POST['name'];

    mail($owner,$subject,$message,"FROM: $from");

    $url = "Location: index.html";
	header($url); 
?>