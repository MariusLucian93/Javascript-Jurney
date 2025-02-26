const apiURL = 'https://jsonplaceholder.typicode.com/todos';


function getTodo () {
    fetch(apiURL + '?_limit=15')
    .then(res => res.json())
    .then(data => {
        data.forEach((todo) => {
           addTodoToDOM(todo);
        })
    })
}

function addTodoToDOM (todo) {
    const div = document.createElement('div');
    div.classList.add('todo');
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute('data-id', todo.id);


    if(todo.completed) {
        div.classList.add('done');
    }

    document.getElementById('todo-list').appendChild(div);
}

function createToDO (e) {
    e.preventDefault();

    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false
    }

    fetch(apiURL, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data))
}

function todoCompleted (e) {
    if (e.target.classList.contains('todo')) {
        e.target.classList.toggle('done');

        updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
        // console.log(e.target.dataset.id, e.target.classList.contains('done'));
    }
}

function updateTodo (id, completed) {
    fetch(`${apiURL}/${id}`, {
        method: "PUT",
        body: JSON.stringify({completed}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json());  
} 

function delteToDO (e) {
    if (e.target.classList.contains('todo')){
        const id = e.target.dataset.id;
        fetch(`${apiURL}/${id}`, {
            method: 'DELETE'
        })
        .then (res => res.json())
        .then (() => e.target.remove());
    }
}


function listen() {
    document.addEventListener('DOMContentLoaded', getTodo);
    document.querySelector('#todo-form').addEventListener('submit', createToDO);
    document.querySelector('#todo-list').addEventListener('click', todoCompleted);
    document.querySelector('#todo-list').addEventListener('dblclick', delteToDO);
}


listen();