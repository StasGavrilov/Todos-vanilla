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

// submit
todoForm.addEventListener('submit', (event) => {
    event.preventDefault()
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

// create task
function createTask(task) {
    const taskListEl = document.createElement('li')
    taskListEl.setAttribute('task', task.id)
    const completedClass = task.isCompleted ? 'completed_task' : ''
    const newTaskEls = `
    <div>
    <input type="checkbox" id=${task.id} class=${completedClass}/>
    <span class="list">${task.text}</span>
    <button class="remove-task">X</button>
    </div>
    `
    taskListEl.innerHTML = newTaskEls
    tasksList.appendChild(taskListEl)
    countTasks()
}

function countTasks() {
    totalTasks.innerHTML = tasks.length
    completedTasksList = tasks.filter((task) => { return task.isCompleted === true })
    completedTasks.innerHTML = completedTasksList.length
    remainingTasks.innerHTML = tasks.length - completedTasksList.length
}