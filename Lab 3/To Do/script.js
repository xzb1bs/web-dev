document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addTaskBtn = document.getElementById("addTaskBtn");

    function addTask() {
        if (!taskInput.value.trim()) return;
        const li = document.createElement("li");
        li.innerHTML = `
        <input type="checkbox">
        <span>${taskInput.value}</span>
        <span class="delete">
            <img src="https://www.flaticon.com/free-icons/delete" alt="Delete" width="20">
        </span>
    `;
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
