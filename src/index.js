document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    createMyToDo(e.target.new_task_description.value);
    form.reset();
  });
});

function createMyToDo(tasks) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  li.textContent = `${tasks} `;
  btn.textContent = "x";
  li.appendChild(btn);
  console.log(li);
  document.querySelector("#tasks").appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
