const url = 'http://localhost:3000/random';

let state = true;
let punchline = '';

$("button").click(function () {
    if (state) {
        $.get(url,
            function (data) {
                state = !state;
                document.getElementById('result').innerHTML = data.data.setup;
                document.getElementById('butt').innerHTML = 'REVEAL THE PUCHLINE';
                punchline = data.data.punchline;
            });
    } else {
        state = !state;
        document.getElementById('result').innerHTML = punchline;
        document.getElementById('butt').innerHTML = 'CLICK ME FOR GET A NEW JOKE';
    }
});

