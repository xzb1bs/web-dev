document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addTaskBtn = document.getElementById("addTaskBtn"); 
    const clearAllTaskBtn = document.getElementById("clearAllTaskBtn");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === ""){alert("add the task");
        return;
        } ; 
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox"> <span>${taskInput.value}</span> <span class="delete">🗑</span>`;
        taskList.appendChild(li);
        taskInput.value = "";
        saveTasks();
    }

    function saveTasks() {
        localStorage.setItem("tasks", taskList.innerHTML);
    }

    function loadTasks() {
        taskList.innerHTML = localStorage.getItem("tasks") || "";
    }

    clearAllTaskBtn.addEventListener("click", (e) => {
        taskList.innerHTML = "";
        saveTasks();
    });


    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
            saveTasks();
        } else if (e.target.type === "checkbox") {
            e.target.nextElementSibling.classList.toggle("completed");
            saveTasks();
        }
    });

    addTaskBtn.addEventListener("click", addTask);
    loadTasks();
});
