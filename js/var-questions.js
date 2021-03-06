var questions = [
	{
		id: 1,
		question: "Выберете корректное расширение файла (несколько ответов):",
		answers: [
			{
				text: "index.html5",
				isRight: false
			},
			{
				text: "index.xhtml",
				isRight: true
			},
			{
				text: "index.html",
				isRight: true
			},
			{
				text: "html.htm",
				isRight: true
			}
		]
	},
	{
		id: 2,
		question: "Какой из типов документа является HTML5?",
		answers: [
			{
				text: '<!DOCTYPE HTML PUBLIC "‐//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">',
				isRight: false
			},
			{
				text: "<!DOCTYPE html>",
				isRight: true
			},
			{
				text: '<!DOCTYPE HTML PUBLIC "‐//W3C//DTD HTML 5//EN" "http://www.w3.org/TR/html5/strict.dtd">',
				isRight: false
			},
			{
				text: "Нет правильного ответа",
				isRight: false
			}
		]
	},
	{
		id: 3,
		question: "Как называется обращение к HTML элементу в CSS?",
		answers: [
			{
				text: "Тег",
				isRight: false
			},
			{
				text: "Селектор",
				isRight: true
			},
			{
				text: "Атрибут",
				isRight: false
			},
			{
				text: "Компиляция",
				isRight: false
			}
		]
	},
	{
		id: 4,
		question: "Какой первый элемент страницы?",
		answers: [
			{
				text: "<body>",
				isRight: false
			},
			{
				text: "<html>",
				isRight: false
			},
			{
				text: "<head>",
				isRight: false
			},
			{
				text: "<!DOCTYPE html>",
				isRight: true
			}
		]
	},
	{
		id: 5,
		question: "Что такое HTML теги?",
		answers: [
			{
				text: "Теги это элементы в файле CSS",
				isRight: false
			},
			{
				text: "Теги это метки для указания браузеру, как отобразить HTML",
				isRight: true
			},
			{
				text: "Теги это классы и/или атрибуты HTML",
				isRight: false
			},
			{
				text: "Теги это метаданные страницы",
				isRight: false
			}
		]
	},
	{
		id: 6,
		question: "В каком регистре допускается вводить теги HTML?",
		answers: [
			{
				text: "В верхнем регистре <HTML>",
				isRight: true
			},
			{
				text: "В смешанном регистре <HtMl>",
				isRight: true
			},
			{
				text: "В нижнем регистре <html>",
				isRight: true
			}
		]
	},
	{
		id: 7,
		question: "Что из элементов CSS используется в приведенном коде (несколько ответов)? .class { background: red; }",
		answers: [
			{
				text: "Селектор",
				isRight: true
			},
			{
				text: "Атрибут",
				isRight: false
			},
			{
				text: "Тег",
				isRight: false
			},
			{
				text: "CSS правило",
				isRight: false
			}
		]
	},
	{
		id: 8,
		question: "Какой синтаксис является корректным для CSS правила?",
		answers: [
			{
				text: " font‐size ‐ 15px;",
				isRight: false
			},
			{
				text: "15px: font‐size;",
				isRight: false
			},
			{
				text: "font‐size: 15px;",
				isRight: true
			},
			{
				text: "font‐size: $large;",
				isRight: false
			}
		]
	},
	{
		id: 9,
		question: "В клиент‐серверной архитектуре клиент и сервер определяются…",
		answers: [
			{
				text: "Типом компьютера, который используется",
				isRight: false
			},
			{
				text: "Размещением в пространстве",
				isRight: false
			},
			{
				text: "Програмным обеспечением",
				isRight: true
			}
		]
	},
	{
		id: 10,
		question: "Тег </body>",
		answers: [
			{
				text: "Это последний тег страницы",
				isRight: false
			},
			{
				text: "Следует сразу после </head>",
				isRight: false
			},			
			{
				text: "Несет служебную информацию",
				isRight: false
			},
			{
				text: "Нет правильного ответа",
				isRight: true
			}
		]
	},
	{
		id: 11,
		question: "Веб страница сначала отображается на сервере",
		answers: [
			{
				text: "Да",
				isRight: false
			},
			{
				text: "Нет",
				isRight: true
			},
			{
				text: "Нет правильного ответа",
				isRight: false
			}
		]
	},
	{
		id: 12,
		question: "Какое устройство может являться сервером? (несколько ответов)",
		answers: [
			{
				text: "Смартфон",
				isRight: true
			},
			{
				text: "Серверная машина",
				isRight: true
			},
			{
				text: "ПК",
				isRight: true
			},
			{
				text: "VPN",
				isRight: false
			}
		]
	},
	{
		id: 13,
		question: "Домен это:",
		answers: [
			{
				text: "Услуга разменения сайта на сервере",
				isRight: false
			},
			{
				text: "Система преобразования имени хоста в IP‐адрес",
				isRight: false
			},
			{
				text: "Пространство имен в сети Интернет",
				isRight: true
			}
		]
	},
	{
		id: 14,
		question: "Какая разница между адресами iqhub.org.ua/images и images.iqhub.org.ua?",
		answers: [
			{
				text: "В первом случае мы открываем файловую систему сервера",
				isRight: true
			},
			{
				text: " Во втором случае мы открываем файловую систему сервера",
				isRight: false
			},
			{
				text: "В обоих случаях мы открываем файловую систему сервера",
				isRight: false
			}
		]
	},
	{
		id: 15,
		question: "Видимая часть html документа находиться между:",
		answers: [
			{
				text: "<!DOCTYPE html> ‐ </html>",
				isRight: false
			},
			{
				text: "<html> ‐ </html>",
				isRight: false
			},
			{
				text: "<body> ‐ </body>",
				isRight: true
			},
			{
				text: "<html> ‐ </body>",
				isRight: false
			}			
		]
	}
