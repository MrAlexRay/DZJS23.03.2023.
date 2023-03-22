alert("Проверка JS");
let VvodimiyText = document.getElementById("Inputik");
let NijniyTextPreobrasovat = document.querySelector(".Preobraz");
let FunctionDelay; //запись функции с послед. применением таймаутом (300) по условию задачи
VvodimiyText.addEventListener("input", function(){
    clearTimeout(FunctionDelay);

    FunctionDelay = setTimeout(function(){   //setTimeout()метод устанавливает таймер, который выполняет функцию или указанный фрагмент кода по истечении времени таймера.
        //setTimeout в крации принимает (code, delay) или функцию,delay, и др параметры
        NijniyTextPreobrasovat.innerHTML = VvodimiyText.value    //innerHTMLможно использовать для проверки текущего исходного HTML-кода страницы, включая любые изменения
    }, 300)
})

