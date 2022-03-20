const todoForm = document.querySelector('.form-todo')
const totalTasks = document.querySelector('.total span')
const completedTasks = document.querySelector('.completed span')
const remainingTasks = document.querySelector('.remaining span')
const tasksList = document.querySelector('.list-of-todos')
let tasks = JSON.parse(localStorage.getItem('tasks')) || []

if (localStorage.getItem('tasks')) {
    tasks.map(task => {
        createTask(task)
    })
}

// submit task event
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = this.text
    const inputText = input.value
    if (inputText != '') {
        const task = {
            id: tasks.length,
            text: inputText,
            isCompleted: false //status
        }

        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        createTask(task)
        todoForm.reset();
    }
    input.focus();
})

// remove task event
tasksList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-task")) {
        const taskId = e.target.closest("li").id
        removeTask(taskId)
    }
})

// update task status event
tasksList.addEventListener("input", (e) => {
    const taskId = e.target.closest("li").id
    updateTask(taskId, e.target)
})

// create task
function createTask(task) {
    const taskEl = document.createElement('li')
    taskEl.setAttribute('id', task.id)
    const completedClass = task.isCompleted ? 'completed_task' : ''
    const newTaskEls = `
    <div class="x">
    <input type="checkbox" id="${task.name}" name="tasks" ${task.isCompleted ? "checked" : ""}>
    <label for="${task.name}></label>
    <span class="list">${task.text}</span>
    </div>
    <button class="remove-task">X</button>
    `
    taskEl.innerHTML = newTaskEls
    tasksList.appendChild(taskEl)
    countTasks()
}

// remove task
function removeTask(taskId) {
    tasks = tasks.filter((task) => task.id !== parseInt(taskId))
    localStorage.setItem("tasks", JSON.stringify(tasks))
    document.getElementById(taskId).remove()
    countTasks()
}

// update task
function updateTask(taskId, el) {
    const task = tasks.find(task => task.id === parseInt(taskId))
    task.isCompleted = !task.isCompleted

    if (task.isCompleted) {
        el.setAttribute("checked", "");
    } else {
        el.removeAttribute("checked");
    }

    localStorage.setItem('tasks', JSON.stringify(tasks))
    countTasks()
}

// count tasks
function countTasks() {
    totalTasks.innerHTML = tasks.length
    completedTasksList = tasks.filter((task) => { return task.isCompleted === true })
    completedTasks.innerHTML = completedTasksList.length
    remainingTasks.innerHTML = tasks.length - completedTasksList.length
}