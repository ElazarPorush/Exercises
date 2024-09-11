//1
const filterAndSortEvenNumbers = (numbers) => {
    const evenNumbers = numbers.filter(num => num % 2 == 0)
    evenNumbers.sort(function(num1, num2){return num1-num2})
    return evenNumbers
}

//2
const removeDuplicates = (numbers) => {
    newNumbers = [...new Set(...numbers)]
    return newNumbers
}

//3
const capitalizeFirstLetter = (text) => {
    const textList = text.split(" ")
    const camelCaseList = textList.map(word => word[word.length - 1] !== "." ? word[0].toUpperCase() + word.slice(1, word.length) : word)
    return camelCaseList.join(" ")
}

//4
const saveTasks = (tasks) => {
    localStorage.setItem("Tasks", JSON.stringify(tasks))
}

const loadTasks = () => {
    return JSON.parse(localStorage.getItem("Tasks"))
}

const addTask = (task) => {
    const tasks = loadTasks()
    tasks.push(task)
    saveTasks(tasks)
}

const removeTask = (task) => {
    const tasks = loadTasks()
    const newTasks = tasks.filter(tsk => tsk.id !== task.id)
    saveTasks(newTasks)
} 