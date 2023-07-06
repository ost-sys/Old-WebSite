var facts = [
    "Я OST (Operting System Tester), а не WT (Windows Tester)!", 
    "Android изначально разрабатывалась как ОС для цифровых камер", 
    "Изначально Билл Гейтс планировал назвать Windows как 'Менеджер интерфейсов'",
    "А ведь раньше была в разы лучше, не думаете?",
    "Samsung говорят, что началинала разработку One UI с нуля...",
    "Windows 1.0 имела размер менее 1 МБ и 16-битный цветной интерфейс",
    "ERR_FACTS_DID_NOT_LOAD",
    "Дождёмся ли мы того дня, когда Samsung полностью откажутся от Exynos? Ну или сделают его лучше...",
    "MIUI ещё не самая ужасная оболочка",
    "Дизайн первого прототипа Android-смартфона весьма напоминал Blackberry.",
    "На территории штаб-квартиры Google стоят статуи Android, которые относятся к каждой версии ОС.",
    "Переверните лого Mi вверх ногами. Получится иероглиф «心», который переводится, как 'сердце'."
];

function getRandomFact() {
    var randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

function displayFact() {
    var factContainer = document.getElementById("fact-container");
    var fact = getRandomFact();
    factContainer.textContent = fact;
}

window.onload = displayFact;