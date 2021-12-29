const todoForm = document.querySelector('.form-todo')
const totalTasks = document.querySelector('.total span')
const completedTasks = document.querySelector('.completed span')
const remainingTasks = document.querySelector('.remaining span')
const tasksList = document.querySelector('.list-of-todos')
let tasks = localStorage.getItem('tasks')

// submit
todoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = this.name
    const inputText = input.value
    if (inputText != '') {
        const task = {
            id: new Date().getTime(),
            name: inputText,
            isCompleted: false //status
        }

        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
})

// create task
function createTask(task) {

}