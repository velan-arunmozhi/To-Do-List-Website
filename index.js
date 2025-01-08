let input = document.getElementById("text_input");
const container = document.getElementById("list");

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = input.value;
    if (taskText !== "") {
        const taskContainer = document.createElement("div");

        const checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");
        checkbox.addEventListener("change", function () {
            const labelText = taskContainer.childNodes[1];
            if (this.checked) {
                labelText.style.textDecoration = "line-through";
            } else {
                labelText.style.textDecoration = "none";
            }
        });

        const task = document.createElement("label");
        task.innerHTML = taskText;
        task.setAttribute("contenteditable", "true");

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "✖";
        deleteButton.onclick = () => taskContainer.remove();

        taskContainer.classList.add("task-container");
        checkbox.classList.add("ui-checkbox");
        task.classList.add("task-label");
        deleteButton.classList.add("delete-button");

        taskContainer.append(checkbox);
        taskContainer.append(task);
        taskContainer.append(deleteButton);

        container.append(taskContainer);

        input.value = "";
    } else {
        alert("Enter text with at least one character");
    }
}
