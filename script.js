function getTODOList() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var todos = JSON.parse(xhr.responseText);
            fillTable(todos);
        }
    };
    xhr.send();
}

function fillTable(todos) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var users = JSON.parse(xhr.responseText);
            var todoTable = document.getElementById("todoTable");
            
            for (var i = 0; i < todos.length; i++) {
                var todo = todos[i];
                var user = users.find(function(u) {
                    return u.id === todo.userId;
                });
                
                var row = document.createElement("tr");
                var indexCell = document.createElement("td");
                indexCell.innerText = (i + 1).toString();
                var userCell = document.createElement("td");
                userCell.innerText = user.name;
                var taskCell = document.createElement("td");
                taskCell.innerText = todo.title;
                var completedCell = document.createElement("td");
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = todo.completed;
                completedCell.appendChild(checkbox);
                
                row.appendChild(indexCell);
                row.appendChild(userCell);
                row.appendChild(taskCell);
                row.appendChild(completedCell);
                
                todoTable.querySelector("tbody").appendChild(row);
            }
        }
    };
    xhr.send();
}
