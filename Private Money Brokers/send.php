<?php
    $message = "Private Money Brokers Form Message:";
    $message.= "\nName: ".$_POST['name'];
    $message.= "\nEmail: ".$_POST['email'];
    $message.= "\nPhone Number: ".$_POST['phone'];
    $message.= "\nDays for a Loan:".$_POST['days'];

    $owner= "fsg94@hotmail.com";
    $from= $_POST['email'];
    $subject = "Message from: ".$_POST['name'];

    mail($owner,$subject,$message,"FROM: $from");

    $url = "Location: index.html";
	header($url); 
?>