// Инициализация Telegram Mini App
let tg = window.Telegram.WebApp;
tg.expand();
tg.ready();

// Состояние питомца
let petState = {
    hunger: 50,
    mood: 50,
    level: 1
};

// Обновление отображения статистики
function updateStats() {
    document.getElementById('hunger').textContent = petState.hunger;
    document.getElementById('mood').textContent = petState.mood;
    document.getElementById('level').textContent = petState.level;
}

// Действия с питомцем
function feed() {
    if (petState.hunger < 100) {
        petState.hunger += 10;
        if (petState.hunger > 100) petState.hunger = 100;
        updateStats();
        showNotification('Питомец покормлен!');
    }
}

function play() {
    if (petState.mood < 100) {
        petState.mood += 10;
        petState.hunger -= 5;
        if (petState.mood > 100) petState.mood = 100;
        if (petState.hunger < 0) petState.hunger = 0;
        updateStats();
        showNotification('Питомец поиграл!');
    }
}

// Магазин
function openShop() {
    document.getElementById('shop').classList.remove('hidden');
}

function closeShop() {
    document.getElementById('shop').classList.add('hidden');
}

function buyItem(item) {
    // Здесь будет вызов платежного API Telegram
    showNotification('Покупка в разработке! Скоро можно будет купить!');
}

// Вспомогательная функция
function showNotification(message) {
    // Можно сделать красивый toast
    alert(message);
}

// Инициализация
updateStats();