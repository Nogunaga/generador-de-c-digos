const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === " " ? "Space" : event.key} 
  <small>Clave de evento</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>Código de clave de evento</small>
</div>

<div class="key">
  ${event.code}
  <small>Código de evento</small>
</div>
  `;
});
