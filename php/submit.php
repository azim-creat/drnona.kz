<?php 
/*
Форма обратной связи может получать сообщения с любых почтовых ящиков.
Исправлена проблема кодировки при получении писем почтовым клиентом Outlook.
*/
if(isset($_POST['submit'])){
/* Устанавливаем e-mail Кому и от Кого будут приходить письма */   
$to = "azim.1998@mail.ru"; // Здесь нужно написать e-mail, куда будут приходить письма   
$from = "info@drnona.kz"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply(собака)epicblog.net
 
/* Указываем переменные, в которые будет записываться информация с формы */
$first_name = $_POST['first_name'];
//$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$subject = "Форма отправки сообщений с сайта DrNona.kz";
     
/* Проверка правильного написания e-mail адреса */
/*if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> Е-mail адрес не существует");
}*/
     
/* Переменная, которая будет отправлена на почту со значениями, вводимых в поля   E-mail: $email*/
$mail_to_myemail = "Здравствуйте! 
Было отправлено сообщение с сайта! 
Имя отправителя: $first_name
Номер телефона: $phone
Текст сообщения: $message
Чтобы ответить на письмо, создайте новое сообщение, скопируйте электронный адрес и вставьте в поле Кому.";  
     
$headers = "From: $from \r\n";
     
/* Отправка сообщения, с помощью функции mail() */
mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='https://drnona.kz'>Вернуться на сайт.</a>";
}
?>
<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://drnona.kz");}
window.setTimeout("changeurl();",3000);
</script>