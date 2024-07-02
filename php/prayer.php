<?php 

echo $fullName
echo $prayerType
echo $prayer

$fullName = $_POST['full name'];
$prayerType = $_POST['prayer type'];
$prayer = $_POST['prayer'];

$email_from = '';
$email_subject = '';
$email_body = '';

mail('mbramer@mercer-trans.com', $prayerType, $prayer) : bool

// mail(
//     string $to,
//     string $subject,
//     string $message,
//     array|string $additional_headers = [],
//     string $additional_params = ""
// )

function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

?>