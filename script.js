const CapsLock = false;
const language = 'eng';

const KEYS = {
  rus: [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
    ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
  ],
  rus_shift: [
    ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/'],
    ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
  ],
  rus_caps: [
    ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\'],
    ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
  ],
  eng: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
  ],
  eng_shift: [
    ['~', '!', '@', '#', '$', '$', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
    ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
  ],
  eng_caps: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
    ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
  ],
};

const KEYS_WIDTH = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [1, 1, 1, 7, 1, 1, 1, 1, 1],
];

function showKeyboard(lang = 'eng') {
  let elem;

  elem = document.createElement('h1');
  elem.innerHTML = 'Virtual Keyboard';
  document.body.append(elem);

  elem = document.createElement('p');
  elem.innerHTML = `Клавиатура создана в операционной системе <strong>Windows</strong><br>
  Для переключения языка комбинация: <strong>левый ctrl</strong>`;
  document.body.append(elem);

  elem = document.createElement('textarea');
  elem.id = 'text';
  elem.autofocus = true;
  document.body.append(elem);

  elem = document.createElement('div');
  elem.id = 'keyboard';
  document.body.append(elem);

  const keyboard = document.getElementById('keyboard');
  for (let i = 0; i < 5; i += 1) {
    elem = document.createElement('div');
    elem.className = 'row';
    keyboard.append(elem);
    for (let j = 0; j < KEYS[lang][i].length; j += 1) {
      elem = document.createElement('div');
      elem.style = `flex-grow:${KEYS_WIDTH[i][j]};`;
      elem.innerHTML = KEYS[lang][i][j];
      keyboard.children[i].append(elem);
    }
  }
}

function insertSymbol(text) {
  const txtarea = document.getElementById('text');
  const start = txtarea.selectionStart;
  const end = txtarea.selectionEnd;
  const finText = txtarea.value.substring(0, start) + text + txtarea.value.substring(end);
  txtarea.value = finText;
  txtarea.focus();
  txtarea.selectionEnd = (start === end) ? (end + text.length) : end;
}

function deleteSymbol() {
  const txtarea = document.getElementById('text');
  const start = txtarea.selectionStart;
  const end = txtarea.selectionEnd;
  if (end === 0) return;
  const finText = (start === end)
    ? txtarea.value.substring(0, start - 1) + txtarea.value.substring(end)
    : txtarea.value.substring(0, start) + txtarea.value.substring(end);
  txtarea.value = finText;
  txtarea.focus();
  txtarea.selectionEnd = start;
}

function keyHover(event) {
  if (event.currentTarget === event.target || event.target.className === 'row') return;
  event.target.classList.toggle('active');
  // alert(event.target.classList);
}

function mousePress(event) {
  if (event.currentTarget === event.target || event.target.className === 'row') return;
  event.target.classList.toggle('active');
  switch (event.target.innerHTML) {
    case 'Backspace':
      deleteSymbol();
      break;
    case 'Tab':
      insertSymbol('    ');
      break;
    case 'Caps Lock':
      break;
    case 'Enter':
      insertSymbol('\n');
      break;
    case 'Shift':
      break;
    case 'Ctrl':
      break;
    case 'Alt':
      break;
    case 'Win':
      break;
    default:
      insertSymbol(event.target.innerHTML);
      break;
  }
  // event.target
}

function keyPress(event) {
//   const text = `${e.type
//   } key=${e.key
//   } code=${e.code
//   }${e.shiftKey ? ' shiftKey' : ''
//   }${e.ctrlKey ? ' ctrlKey' : ''
//   }${e.altKey ? ' altKey' : ''
//   }${e.metaKey ? ' metaKey' : ''
//   }${e.repeat ? ' (repeat)' : ''
//   }\n`;
//   alert(text);
}

showKeyboard();
const keyboard = document.getElementById('keyboard');

keyboard.addEventListener('mousedown', keyHover);
keyboard.addEventListener('click', mousePress);

document.body.addEventListener('keydown', keyPress);
