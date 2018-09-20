var input = document.getElementById('input');
var output = document.getElementById('output');

input.onkeyup = () => {
    var value = input.value.toLowerCase();
    var result = '';

    for (var i = 0; i < value.length; i++) {
        var character = value[i];

        if (character === ' ') {
            result += ' ';
            continue;
        }

        if (character === 'b') {
            result += ':b: ';
            continue;
        }

        result += ':regional_indicator_' + character + ': ';
    }

    output.innerHTML = result;
};