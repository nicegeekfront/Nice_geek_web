$(document).ready(function() {
	
	$("#submit").on("click", function() {
		
		$.ajax({
			url: "./php/send__main.php", // Куда отправляем данные (обработчик)
			type: "POST", // Тип запроса
			dataType: "json",
			data: {
				"name": $("#name").val(), // Имя
				"email": $("#email").val(), // E-mail
				"phone": $("#phone").val(), // Телефон
                "text": $("#text").val() // Сообщение
			},
			success: function(data) {
			
				$(".formResult").html(data); // Выводим результат
				
			}
		});
		
	});
	
});



