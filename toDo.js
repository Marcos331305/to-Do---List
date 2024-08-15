// Fetch elements
const input = document.querySelector("#inputarea");
const para = document.querySelector("#para");
const taskContainer = document.querySelector("#taskcontainer");


// Function to add the tasks
function addTask() {
  if (input.value === "") {
    alert("Please ADD some TASK >>");
  } else {
    const newTask = document.createElement("li");
    newTask.innerHTML = input.value;
    newTask.classList.add("taskStyles");
    const crossBtn = document.createElement("span");
    crossBtn.innerHTML = "\u00d7";
    crossBtn.classList.add("delete");
    newTask.appendChild(crossBtn);
    taskContainer.appendChild(newTask);
    saveData();
  }
  input.value = "";
}

// to delete a task
taskContainer.addEventListener("click",(e)=>{
  if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
  else if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
})

// function to savedata
function saveData(){
    localStorage.setItem("Data",taskContainer.innerHTML);
}

function getData(){
    taskContainer.innerHTML=localStorage.getItem("Data");
}
getData();
