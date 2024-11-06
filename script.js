let cnt = 0;
let value = document.getElementById("value");

function reset() {
    cnt = 0;
    value.innerHTML = "00";
}

function plus() {
    cnt = cnt + 1;
    if (cnt < 10) {
        value.innerHTML = "0" + cnt;
    } else {
        value.innerHTML = cnt;
    }
}