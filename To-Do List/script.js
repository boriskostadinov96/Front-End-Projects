$(document).ready(function() {
    $("#task-form").submit(function(event) {
        event.preventDefault();
        const taskContent = $("#task").val().trim();
        if (taskContent !== "") {
            addTask(taskContent);
            $("#task").val("");
        }
    });
    $(document).on("click", ".btn-delete", function() {
        $(this).closest("li").remove();
    });
    $(document).on("click", ".btn-edit", function() {
        const taskItem = $(this).closest("li");
        const taskContent = taskItem.find(".task-content").text();
        const editedContent = prompt("Edit task:", taskContent);
        if (editedContent !== null && editedContent.trim() !== "") {
            taskItem.find(".task-content").text(editedContent);
        }
    });

    function addTask(content) {
        const listItem = `
            <li class="list-group-item">
                <span class="task-content">${content}</span>
                <button class="btn btn-sm btn-primary btn-edit">Edit</button>
                <button class="btn btn-sm btn-danger btn-delete">Delete</button>
            </li>
        `;
        $("#task-list").append(listItem);
    }
});
