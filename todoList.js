import { data } from "./data/todoData.js";
renderTasks();
function renderTasks() {
  let taskhtml = "";
  data.forEach((task) => {
    taskhtml += `      <div class="task title-${task.id}">
        <div>

          <p class="name">${task.name}</p>
          <p class="date">${task.date}</p>
        </div>
        <div>
          <button class="completed">Done</button>
          <button class="delete" data-delete-btn="${task.id}">Delete</button>
        </div>
      </div>`;
    document.querySelector(".Tasks").innerHTML = taskhtml;
  });
}

document.querySelector(".addBtn").addEventListener("click", () => {
  const id =
    Math.ceil((Math.random() * 100 + Math.random() * 100 + Math.random() * 100) *
    Math.random()*1000000);
  const name = document.querySelector(".enterTask").value;
  const date = document.querySelector(".dateInp").value;
  data.push({ id, name, date });
 renderTasks()
 deleteBtn();
});

function deleteBtn(){
document.querySelectorAll('.delete').forEach((deleteBtn)=>{
    deleteBtn.addEventListener('click',()=>{
        const ID = deleteBtn.dataset.deleteBtn;
        data.forEach((task,i)=>{
            if (task.id == ID){
                data.splice(i,1);
                console.log(data);
                document.querySelector(`.title-${ID}`).remove()
            }
        })
    })
})
}