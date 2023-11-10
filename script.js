let minNum = 1;
let maxNum = 100;
let randomNumber, attempts, isEven;

function setRange() {
    minNum = parseInt(document.getElementById('minRange').value);
    maxNum = parseInt(document.getElementById('maxRange').value);

    if (minNum >= maxNum || isNaN(minNum) || isNaN(maxNum)) {
        document.getElementById('rangeMessage').innerText = 'Установите корректный диапазон чисел!';
    } else {
        document.getElementById('rangeMessage').innerText = '';
        initGame();
    }
}

function initGame() {
    attempts = 0;
    document.getElementById('message').innerText = '';
    document.getElementById('hint').innerText = '';
    document.getElementById('attempts').innerText = '';
    randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    console.log(randomNumber);
}

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guessField').value);

    if (userGuess < minNum || userGuess > maxNum || isNaN(userGuess)) {
        document.getElementById('message').innerText = `Введите корректное число от ${minNum} до ${maxNum}!`;
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('message').innerText = `Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток.`;
        return;
    } else {
        let message = userGuess < randomNumber ? 'Больше!' : 'Меньше!';
        document.getElementById('message').innerText = message;

        if (attempts % 3 === 0) {
            isEven = randomNumber % 2 === 0;
            let evenOrOdd = isEven ? 'Четное' : 'Нечетное';
            document.getElementById('hint').innerText = `Подсказка: Загаданное число ${evenOrOdd}.`;
        }
    }

    document.getElementById('attempts').innerText = `Попыток: ${attempts}`;
}

initGame();