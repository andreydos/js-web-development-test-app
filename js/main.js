"use strict";

(function () {

    var score = 0,
        flag = true; // flag for showResult function (executes once)

    var timer = (function () {
        var remainSec = 30; //seconds
        return {
            init: function () {
                var _this = this;
                var timerInt = setInterval(function(){
                    remainSec = remainSec - 1; //subtract 1 second on each call (each 1000 ms)
                    _this.parseTime(remainSec);
                    if(remainSec <= 0){
                        clearInterval(timerInt);
                        _this.showResult();
                    }
                }, 1000);
            },

            showResult: function () {
                if (flag) {
                    $('main').animate({
                        opacity: 0,
                        paddingTop: 200
                    }, 2000, function () {
                        $(this).toggleClass('hidden');
                    });
                    $('#next').toggleClass('hidden');


                    var resultMarkup = '<h2 class="text-center footer-result">Набранное кол-во баллов: ' + score + ' </h2>';
                    $('.result').append(resultMarkup);

                    $('.result').animate({
                        opacity: 1
                    }, 2000);
                }

            },

            parseTime: function (remain) {
                if (remain < 0) remain = 0;

                var mins = Math.floor(remain / 60),
                    seconds = Math.floor(remain - mins * 60);

                if (mins > 1) {   // if remain time less then 10 add "leading" zero
                    $('span.mins').text(mins);
                } else {
                    $('span.mins').text("0" + mins);
                }

                if(seconds >= 10) { // if remain time less then 10 add "leading" zero
                    $('span.seconds').text(seconds);
                } else {
                    $('span.seconds').text("0" + seconds);
                }
            }
        }
    }());

    var test = (function() {
        var answersQuantity = 0,
            questions = [
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
                    question: "Что из элементов CSS используется в приведенном коде? .class { background: red; }",
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
            ],
            currentId = 0,
            currentRightAnswer = [];

        return {
            init: function(){
                var
                    _this = this;

                _this.showNextQuestion();

                $('#next').on('click', function(e){
                    e.preventDefault();

                    var selectedAnswers = [];

                    $.each($('input:checked'), function () {
                        selectedAnswers.push($(this).val());
                    });
                    if (selectedAnswers.length !== 0) {
                        _this.checkAnswer(selectedAnswers);
                        answersQuantity += 1;

                        for (var i = 0; i < questions.length; i += 1) {    //delete used question from
                                                                            // questions object
                            if (questions[i] !== undefined && questions[i].id === currentId) {
                                delete questions[i];
                            }
                        }
                    }
                    currentRightAnswer = []; // clear array before rendering new question
                    _this.showNextQuestion();
                });
            },

            selectNextQuestion: function(){
                while (questions.length !== 0) {
                    var randIndex = Math.floor(Math.random() * questions.length);
                    if(questions[randIndex] !== undefined) {
                        var question = questions[randIndex];
                        break;
                    }
                }
                return question;
            },

            setCurrentRightAnswer:function(answersOptions){
                for (var i = 0; i < answersOptions.length; i += 1) {
                    // push only right answers to [currentRightAnswer] array
                    if (answersOptions[i].isRight === true) {
                        currentRightAnswer.push(answersOptions[i].text);
                    }
                }
            },

            showAnswerOptions: function(question){
                var answersOptions = question.answers,
                    form = $('form'),
                    _this = this;

                _this.setCurrentRightAnswer(answersOptions);

                for (var currentIndex = 0; currentIndex < answersOptions.length; currentIndex += 1) {

                    var answerVariant = answersOptions[currentIndex].text ;

                    answerVariant = _this.htmlEncode(answerVariant); //encode possible  < tags >

                    var answersMarkupCheckbox = '<div class="checkbox">\
                                    \n\t<label>\
                                    \n\t\t<input type="checkbox" value="' + answerVariant + '">' + answerVariant + '\
                                    \n\t</label>\
                                    </div>';
                    var answersMarkupRadio = '<div class="radio">\
                                    \n\t<label>\
                                    \n\t\t<input type="radio" name="answerRadio" value="' + answerVariant + '">' + answerVariant + '\
                                    \n\t</label>\
                                    </div>';

                    if (currentRightAnswer.length > 1) {
                        form.append(answersMarkupCheckbox);
                    } else {
                        form.append(answersMarkupRadio);
                    }
                }
            },

            showNextQuestion: function(){
                var _this = this;

                if (answersQuantity < 15) {
                    var question = _this.selectNextQuestion();

                    if (question !== undefined) {
                        $('.test-question').text(question.question);
                        $('form').empty();  //clear previous markup from <form>
                        _this.showAnswerOptions(question);
                        currentId = question.id;
                    }
                } else {
                    _this.showResult();
                }
            },

            showResult: function () {
                $('main').animate({
                    opacity: 0,
                    paddingTop: 200
                }, 2000, function(){
                    $(this).toggleClass('hidden');
                });
                $('#next').toggleClass('hidden');


                var resultMarkup = '<h2 class="text-center footer-result">Набранное кол-во баллов: ' + score + ' </h2>';
                $('.result').append(resultMarkup);

                $('.result').animate({
                    opacity: 1
                }, 2000);

                flag = false; //prevent showResult function from timer module
            },

            checkAnswer: function(answers){
                var userAnswers = answers,
                    tempScore = 0;

                if (userAnswers.length > currentRightAnswer.length) {
                    tempScore = 0;
                } else {
                    for (var indexOfUserAnswer = 0; indexOfUserAnswer < userAnswers.length; indexOfUserAnswer += 1) {
                        if ($.inArray(userAnswers[indexOfUserAnswer], currentRightAnswer) >= 0) {
                            tempScore += 1 / currentRightAnswer.length;
                        } else {
                            tempScore = 0;
                        }
                    }
                }
                score += tempScore;
            },

            htmlEncode: function(value){
                //create a in-memory div, set it's inner text(which jQuery automatically encodes)
                //then grab the encoded contents back out.  The div never exists on the page.
                return $('<div/>').text(value).html();
            }
        }
    }());

    $(document).ready(function(){
        $('#start').on('click', function(e){

            if ($('#name').val() !== '') {
                $('.registration').toggleClass('hidden');

                $('.fio').text($('#name').val());

                $('.test-section').toggleClass('hidden');

                timer.init();
                test.init();
            }


        });
    });

}());


