let caps = false;
let lang = localStorage.getItem('lang') || 'eng';
const shift = false;

const KEYS = {
  // английский, английский + caps, английский + shift, русский аналогично
  Backquote: ['`', '`', '~', 'ё', 'Ё', 'Ё'],
  Digit1: ['1', '1', '!', '1', '1', '!'],
  Digit2: ['2', '2', '@', '2', '2', '"'],
  Digit3: ['3', '3', '#', '3', '3', '№'],
  Digit4: ['4', '4', '$', '4', '4', ';'],
  Digit5: ['5', '5', '%', '5', '5', '%'],
  Digit6: ['6', '6', '^', '6', '6', ':'],
  Digit7: ['7', '7', '&', '7', '7', '?'],
  Digit8: ['8', '8', '*', '8', '8', '*'],
  Digit9: ['9', '9', '(', '9', '9', '('],
  Digit0: ['0', '0', ')', '0', '0', ')'],
  Tab: ['Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
  KeyA: ['a', 'A', 'A', 'ф', 'Ф', 'Ф'],
  KeyB: ['b', 'B', 'B', 'и', 'И', 'И'],
  KeyC: ['c', 'C', 'C', 'с', 'С', 'С'],
  KeyD: ['d', 'D', 'D', 'в', 'В', 'В'],
  KeyE: ['e', 'E', 'E', 'у', 'У', 'У'],
  KeyF: ['f', 'F', 'F', 'а', 'А', 'А'],
  KeyG: ['g', 'G', 'G', 'п', 'П', 'П'],
  KeyH: ['h', 'H', 'H', 'р', 'Р', 'Р'],
  KeyI: ['i', 'I', 'I', 'ш', 'Ш', 'Ш'],
  KeyJ: ['j', 'J', 'J', 'о', 'О', 'О'],
  KeyK: ['k', 'K', 'K', 'л', 'Л', 'Л'],
  KeyL: ['l', 'L', 'L', 'д', 'Д', 'Д'],
  KeyM: ['m', 'M', 'M', 'ь', 'Ь', 'Ь'],
  KeyN: ['n', 'N', 'N', 'т', 'Т', 'Т'],
  KeyO: ['o', 'O', 'O', 'щ', 'Щ', 'Щ'],
  KeyP: ['p', 'P', 'P', 'з', 'З', 'З'],
  KeyQ: ['q', 'Q', 'Q', 'й', 'Й', 'Й'],
  KeyR: ['r', 'R', 'R', 'к', 'К', 'К'],
  KeyS: ['s', 'S', 'S', 'ы', 'Ы', 'Ы'],
  KeyT: ['t', 'T', 'T', 'е', 'Е', 'Е'],
  KeyU: ['u', 'U', 'U', 'г', 'Г', 'Г'],
  KeyV: ['v', 'V', 'V', 'м', 'М', 'М'],
  KeyW: ['w', 'W', 'W', 'ц', 'Ц', 'Ц'],
  KeyX: ['x', 'X', 'X', 'ч', 'Ч', 'Ч'],
  KeyY: ['y', 'Y', 'Y', 'н', 'Н', 'Н'],
  KeyZ: ['z', 'Z', 'Z', 'я', 'Я', 'Я'],
  BracketLeft: ['[', '[', '{', 'х', 'Х', 'Х'],
  BracketRight: [']', ']', '}', 'ъ', 'Ъ', 'Ъ'],
  Backslash: ['\\', '\\', '|', '\\', '\\', '/'],
  Comma: [',', ',', '<', 'б', 'Б', 'Б'],
  Period: ['.', '.', '>', 'ю', 'Ю', 'Ю'],
  Slash: ['/', '/', '?', '.', '.', ','],
  Backspace: ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  Enter: ['Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  CapsLock: ['Caps Lock', 'Caps Lock', 'Caps Lock', 'Caps Lock', 'Caps Lock', 'Caps Lock'],
  ShiftLeft: ['Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift'],
  ShiftRight: ['Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift'],
  ControlLeft: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ControlRight: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  AltLeft: ['Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt'],
  AltRight: ['Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt'],
  ArrowUp: ['↑', '↑', '↑', '↑', '↑', '↑'],
  ArrowDown: ['↓', '↓', '↓', '↓', '↓', '↓'],
  ArrowLeft: ['←', '←', '←', '←', '←', '←'],
  ArrowRight: ['→', '→', '→', '→', '→', '→'],
  Semicolon: [';', ';', ':', 'ж', 'Ж', 'Ж'],
  Quote: ['\'', '\'', '"', 'э', 'Э', 'Э'],
  Space: [' ', ' ', ' ', ' ', ' ', ' '],

};

const KEYBOARD = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

const KEYS_WIDTH = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
  [1, 1, 19, 1, 1, 1, 1, 1],
];

function getlangID() {
  let i = (lang === 'eng') ? 0 : 3;
  if (shift) i += 2;
  else i += (caps) ? 1 : 0;
  return i;
}

function showKeyboard(text = '') {
  let elem;
  const l = getlangID();
  document.body.innerHTML = '';
  elem = document.createElement('h1');
  elem.innerHTML = 'Virtual Keyboard';
  document.body.append(elem);

  elem = document.createElement('p');
  elem.innerHTML = `Клавиатура создана в операционной системе <strong>Windows</strong><br>
  Для переключения языка: <strong>левый ctrl</strong>`;
  document.body.append(elem);

  elem = document.createElement('textarea');
  elem.id = 'text';
  elem.value = text;
  elem.disabled = true;
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

    for (let j = 0; j < KEYBOARD[i].length; j += 1) {
      elem = document.createElement('div');
      elem.id = KEYBOARD[i][j];
      elem.style = `flex-grow:${KEYS_WIDTH[i][j]};`;
      elem.innerHTML = KEYS[KEYBOARD[i][j]][l];
      keyboard.children[i].append(elem);
    }
  }
  document.getElementById('text').focus();
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

function keyPress(event) {
  document.getElementById('text').focus();
  let key;
  if (event.code === undefined) { // это мышь
    if (event.currentTarget === event.target || event.target.className === 'row') return; // клик не по кнопке
    key = event.target.id;
    event.target.classList.remove('active');
  } else { // клавиатура
    document.getElementById(event.code).classList.remove('active');
    key = event.code;
  }
  switch (key) {
    case 'Backspace':
      deleteSymbol();
      break;
    case 'Tab':
      insertSymbol('    ');
      break;
    case 'CapsLock':
      caps = !caps;
      showKeyboard(document.getElementById('text').value);
      if (caps) document.getElementById('CapsLock').classList.add('pressed');
      else document.getElementById('CapsLock').classList.remove('pressed');
      break;
    case 'Enter':
      insertSymbol('\n');
      break;
    case 'ShiftLeft':
    case 'ShiftRight':

      break;
    case 'ControlLeft':
      lang = (lang === 'eng') ? 'rus' : 'eng';
      localStorage.lang = lang;
      showKeyboard(document.getElementById('text').value);
      break;
    case 'ControlRight':
      break;
    case 'AltLeft':
      break;
    case 'AltRight':
      break;
    default:
      insertSymbol(KEYS[key][getlangID()]);
      break;
  }
}

function keyActive(event) {
  if (event.code === undefined) { // это мышь
    if (event.currentTarget === event.target || event.target.className === 'row') return;
    event.target.classList.add('active');
  } else { document.getElementById(event.code).classList.add('active'); }
}

showKeyboard();

document.body.addEventListener('mousedown', keyActive);
document.body.addEventListener('click', keyPress);

document.body.addEventListener('keydown', keyActive);
document.body.addEventListener('keyup', keyPress);
