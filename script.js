/* ============================== Lero fun =============================== */

const buttonLero = document.getElementById('button');
const leroTest = document.getElementById('lero-test');
const divLero = document.createElement('div');

divLero.classList.add('lero');

buttonLero.onclick = function() {
  document.body.insertAdjacentHTML('beforeend', '<div class="lero">Lero-Lero-Lero-Lero</div>');
};
