const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something");
    } else {
        
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00D7";
        li.appendChild(span);
        inputBox.value = "";
        saveData();
    }
}
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); 
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); 
    }
});

function saveData() {
    localStorage.setItem("taskList", listContainer.innerHTML);
}

function showTasks() {
    if (localStorage.getItem("taskList")) {
        listContainer.innerHTML = localStorage.getItem("taskList");
    }
}

// Load tasks from localStorage when the page loads
document.addEventListener("DOMContentLoaded", function() {
    showTasks();
});