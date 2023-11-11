let ut = document.getElementById('ut');
let word = document.getElementById('word');
let char = document.getElementById('word');
char.innerHTML='0';
function fetchData() {
    let arr = ut.value.split(' ').length;
    word.innerHTML = arr;
    let strlng = ut.value.length;
    char.innerHTML = strlng;
}
function toUpper() {
  ut.value = ut.value.toUpperCase();
}
  function toReverse() {
    ut.value= ut.value.split('').reverse().join('');
  }
