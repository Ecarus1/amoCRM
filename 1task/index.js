const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

//Здесь ID setInterval'а
let _TIMER;

/**
 * Функция форматирования числа. Если Число меньше 10 - добавляем 0 в начало
 * @param {number} date 
 * @returns 
 */
const formatDate = (date) => {
  if(date < 10) {
    return `0${date}`;
  }
  return date;
}

/**
 * Функция подсчитывания и вставки данных в span
 * @param {number} endTime 
 * @returns 
 */
const setTimeSpan = (endTime) => {
  // вычисляем, сколько миллисекунд осталось до достижения endTime
  const secondsLeftms = endTime - Date.now();
  // перевод в секунды
  const secondsLeft = Math.round(secondsLeftms / 1000);

  // вычисляем часы, минуты, секунды и форматируем, если это необходимо
  const hours = formatDate(Math.floor(secondsLeft / 3600));
  const minutes = formatDate(Math.floor(secondsLeft / 60) - (hours * 60));
  const seconds = formatDate(secondsLeft % 60);

  // Останавливаем таймер, если время истекло
  if (secondsLeft < 0) {
    clearInterval(_TIMER);
    return;
  }

  timerEl.textContent = `${hours}:${minutes}:${seconds}`;
}

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const now = Date.now();
    // Расчитывание времени окончания
    const endTime = now + seconds * 1000;
    setTimeSpan(endTime);
    _TIMER = setInterval(() => {
      setTimeSpan(endTime);
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  //Удаляем из строки все символы, кроме чисел, а потом все нули в начале строки
  e.target.value = e.target.value.replace(/[^0-9]/g,'').replace(/^0+/g,'');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  //Если таймера нету, то и очищать его не нужно
  if(_TIMER) {
    clearInterval(_TIMER);
  }

  //Небольшое условие на то, чтобы пользователь ввёл число больше 0
  if(seconds > 0){
    animateTimer(seconds);
    inputEl.value = '';
  }
});
