function isEven(value) {
    return value % 2 == 0;
}
function full() {
    var filtered = [
        112,
        52,
        0,
        -1,
        94,
        4,
        55,
        70,
        54,
        2,
        3.14,
        11,
        13,
        4,
        7,
        8,
        9,
        33
    ]

    document.write('<hr>' + filtered + '<hr>')
}
function func() {
    var filtered = [
        112,
        52,
        0,
        -1,
        94,
        4,
        55,
        70,
        54,
        2,
        3.14,
        11,
        13,
        4,
        7,
        8,
        9,
        33
    ].filter(isEven);

    document.write(filtered + '<hr>');
}

full();
func();
