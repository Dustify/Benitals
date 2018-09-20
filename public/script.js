const input = document.getElementById('input');
const output = document.getElementById('output');
const extremeMode = document.getElementById('extremeMode');

const LETTERS = /[c-z]/;
const EXTREME = [
  '💪',
  '👏',
  '😙',
  '😋',
  '😭',
  '😏',
  '👌',
  '😂',
  '😤',
  '🙌',
  '👅',
  '✊',
  '👀',
  '💦',
  '🍆',
  '🍑',
  '💯'
];

const onChange = () => {
  const value = input.value.toLowerCase();
  let result = '';

  for (let i = 0; i < value.length; i++) {
    let character = value[i];
    let substitution = character;

    if (character === 'a' || character === 'b') {
      substitution = `${character}`;
    } else if (character.match(LETTERS)) {
      substitution = `:regional_indicator_${character}:`;
    }

    result += substitution;

    if (extremeMode.checked) result += getExtremeEmoji();
  }

  output.innerHTML = result;
};

const getExtremeEmoji = () => {
    let result = '';
    const nEmoji = Math.floor(Math.random() * 5);
    for (let i = 0; i < nEmoji; i++) {
        result += EXTREME[Math.floor(Math.random() * EXTREME.length)];
    }
    return result;
};

input.onkeyup = onChange;
extremeMode.onchange = onChange;
