var elinp = document.querySelector(".inp");
var elform = document.querySelector("form");
var elul = document.querySelector("ul");
var eltotal = document.querySelector(".total");
var arr = [];

elform.addEventListener("submit", (e) => {
  e.preventDefault();
  arr.push(1);
  elul.innerHTML += innerHTML = `
        <li class="mx-auto w-25 py-3 ps-3 border d-flex position-relative">
          <input type="checkbox" /><small>${elinp.value}</small>
          <button class=" position-absolute mx-5 btn" style="right: 15px; color: #959595;"> close </button>
          <button class="material-symbols-outlined position-absolute btn " style="right: 15px; color: #959595;"> edit </button>
        </li>
    `;
  eltotal.textContent = arr.length;
  elinp.value = null;
});
