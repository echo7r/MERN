let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList")

console.log(taskInput);

addBtn.addEventListener("click", addTask);

// function addTask(){
//     console.log("task function ran");
//     console.log(taskInput.value);
// } for testing the function

// function addTask(){
//     const taskText = taskInput.value;
//     if (taskText === "")return; 

//     const li = document.createElement("li");
//     li.textContent = taskText;

//     taskList.appendChild(li);

//     taskInput.value = "";
// }

// NOw adding a delete button for each task

// function addTask(){
//     const taskText = taskInput.value;
//     if (taskText === "")return;

//     const li = document.createElement("li");
//     li.textContent = taskText;

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "x";

//     deleteBtn.addEventListener("click", function(){
//         li.remove();
//     });

//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);

//     taskInput.value ="";
// }

// now this version will let Page refresh but no longer destroys data

function addTask(){
    const taskText = taskInput.value;
    if (taskText === "") return;

    tasks.push(taskText);    //Task is added to the state array, NOT to the DOM

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();
    taskInput.value = "";
}

function renderTasks(){
    taskList.innerHTML = "";
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";

    deleteBtn.addEventListener("click", function(){

        tasks.splice(index,1); //This is the actual delete,State is modified first, not UI
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

}
renderTasks();