<?php
header('Content-Type: application/json; charset=utf-8');

$mailAdress = [
	'info@nicegeek.ru'
]; // Массив получателей (E-mail)

$mailSubject = 'Письмо с обратной связи'; // Тема письма

/*
	
	Массив полей:

		code - название поля из AJAX
		title - подпись
		length - длина поля
		required - обязательное или нет (true или false)

*/

$fieldsArr = [
	[
		'code' => 'name',
		'title' => 'Имя',
		'length' => 100,
		'required' => false
	], [
		'code' => 'email',
		'title' => 'E-mail',
		'length' => 100,
		'required' => true
	], [
		'code' => 'phone',
		'title' => 'телефон',
		'length' => 1000,
		'required' => true
    ],
    [
		'code' => 'text',
		'title' => 'Сообщение',
		'length' => 1000,
		'required' => true
	]
];

if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {

	$errorList = []; // Список ошибок

	$mailBody = '';

	foreach($fieldsArr as $field) {

		if(!isset($_POST[$field['code']])) {

			// Если одно из полей не передано (не путать с пустым значением) - останавливаем работу скрипта

			die();

		} elseif(trim($_POST[$field['code']]) == '' && $field['required']) {

			// Если передано пустое поле и оно обязательное для заполнения - формируем сообщение об ошибке

			$errorList[] = 'Поле <b>'.$field['title'].'</b> обязательно для заполнения.';

		} else {

			// Формируем сообщение отправляемое на почту

			$mailBody .= '<p><b>'.$field['title'].':</b> '.mb_substr(strip_tags(trim($_POST[$field['code']])), 0, $field['length']).'</p>';

		}

	}

	if(!empty($errorList)) {

		// Если ошибки есть, выводим их

		echo json_encode(implode('<br />', $errorList), JSON_UNESCAPED_UNICODE);

	} else {

		$domain = $_SERVER['HTTP_HOST'];

		if(substr($domain, 0, 4) == 'www.') {
			
			$domain = substr($_SERVER['HTTP_HOST'], 4);
		
		}

		$mailHeaders = 'MIME-Version: 1.0'."\r\n";
		$mailHeaders .= 'Content-type: text/html; charset=utf-8'."\r\n";
		$mailHeaders .= 'From: Система уведомлений <no-reply@'.$domain.'>'."\r\n";

		foreach($mailAdress as $mail) {

			mail($mail, $mailSubject, $mailBody, $mailHeaders);

		}
		echo json_encode('Сообщение успешно отправлено!', JSON_UNESCAPED_UNICODE);

	}

} else {

	die();

}

?>