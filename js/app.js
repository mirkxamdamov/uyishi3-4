var elinp = document.querySelector(".inp");
var elform = document.querySelector("form");
var elul = document.querySelector("ul");
var eltotal = document.querySelector(".total");
var arr = [];

elform.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = elinp.value.trim();
  if (!value) {
    elinp.value = null;
    return alert('Input Todo')
  }
  let NewPushTodo =  {
    id: arr.length + 1,
    Text: value,
    isCompleted: false,
  };
  arr.push(NewPushTodo)
  eltotal.textContent = arr.length;
  elinp.value = null;

 function render(arrr) {
   arrr.forEach((elment) => {
        elul.innerHTML += innerHTML = `
        <li class="mx-auto w-25 py-3 ps-3 border d-flex position-relative">
          <input type="checkbox" /><small>${elment.Text}</small>
          <button class=" position-absolute mx-5 btn" style="right: 15px; color: #959595;"> close </button>
          <button class="material-symbols-outlined position-absolute btn " style="right: 15px; color: #959595;"> edit </button>
        </li>
    `;
   })
 }
 elul.innerHTML = null
 render(arr)
});
