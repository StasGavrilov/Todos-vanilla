const todoForm = document.querySelector('.form-todo')
const totalTasks = document.querySelector('.total span')
const completedTasks = document.querySelector('.completed span')
const remainingTasks = document.querySelector('.remaining span')
const tasksList = document.querySelector('.list-of-todos')
let tasks = localStorage.setItem('tasks', [])

// submit
todoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = this.name
    const inputText = input.value
    const task = {
        // id
        // name
        // status
    }

    tasks.push(task)
})