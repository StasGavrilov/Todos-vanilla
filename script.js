const todoForm = document.querySelector('.form-todo')
const totalTasks = document.querySelector('.total span')
const completedTasks = document.querySelector('.completed span')
const remainingTasks = document.querySelector('.remaining span')
const tasksList = document.querySelector('.list-of-todos')
let tasks = JSON.parse(localStorage.getItem('tasks'))

if (tasks === null) {
    tasks = []
}

countTasks()

tasks.map(task => {
    createTask(task)
})

// submit task
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = this.text
    const inputText = input.value
    if (inputText != '') {
        const task = {
            id: new Date().getTime(),
            text: inputText,
            isCompleted: false //status
        }

        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        createTask(task)
    }
})

// update task status
tasksList.addEventListener("input", (e) => {
    const taskId = e.target.closest('li').id // need to find the id
    console.log(taskId)
    updateTask(taskId, e.target)
})

// create task
function createTask(task) {
    const taskListEl = document.createElement('li')
    taskListEl.setAttribute('task', task.id)
    const completedClass = task.isCompleted ? 'completed_task' : ''
    const newTaskEls = `
    <div class="x">
    <input type="checkbox" id="${task.name}-${task.id}" name="tasks" ${task.isCompleted ? "checked" : ""}>
    <label></label>
    <span class="list">${task.text}</span>
    <button class="remove-task">X</button>
    </div>
    `
    taskListEl.innerHTML = newTaskEls
    tasksList.appendChild(taskListEl)
    countTasks()
}

function updateTask(taskId, el) {
    const task = tasks.find(task => task.id === parseInt(taskId))

    if (!task.isCompleted) {
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