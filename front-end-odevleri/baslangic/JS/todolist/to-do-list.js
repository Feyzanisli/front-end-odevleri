//reaches the form
let listInputDOM = document.querySelector('#taskForm')
listInputDOM.addEventListener('submit', taskSubmit)

//gets input information
function taskSubmit(event) {
    event.preventDefault()
    const taskInputDOM = document.querySelector('#task')

    let task = taskInputDOM.value
    if(task) {
        addTask(task)
        localStorage.setItem('task', task)
        taskInputDOM.value= "" //buraya taskInputDOM.value yerine task yazınca kod çalışmıyor?
    } 
}

//adds info to ul
let taskListDOM = document.querySelector('#list')
const addTask = (taskInput) => {
    // capitalize the first letter of each word.
    let words = taskInput.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    // recreates the note and adds it to the li
    taskInput = words.join(" ")
    let liDOM = document.createElement('li')
    liDOM.innerHTML = taskInput

    //creates button and adds delete event listener
    liDOM.className = "list-group-item d-flex justify-content-between align-items-center"
    let deleteButton = document.createElement('button')
    deleteButton.type = "button"
    deleteButton.ariaLabel = "Close"
    deleteButton.innerHTML = `<strong>X</strong>`
    deleteButton.className = "btn delete btn-outline-secondary"
    deleteButton.style = "border: 0;" 
    deleteButton.addEventListener("click", function() {
        this.parentElement.remove()
    })
    liDOM.appendChild(deleteButton)
    taskListDOM.appendChild(liDOM)
}

//gives a notification about the note when the submit button is pressed
let toastDOM = document.querySelector('.toast');
let toast = new bootstrap.Toast(toastDOM);
function showToast() {
    let task = document.querySelector("#task").value;
    if (task) {
        toastDOM.querySelector('.toast-body').innerHTML = "Notunuz listeye başarıyla eklendi.";
        toast.show();
    } else {
        toastDOM.querySelector('.toast-body').innerHTML = "Listeye boş ekleme yapamazsınız!";
        toast.show();
    } 
}

//when the delete button is clicked it finds the li element removes it 
let deleteButtonDOM = document.querySelectorAll(".delete")
for (let i = 0; i < deleteButtonDOM.length; i++) {
deleteButtonDOM[i].addEventListener("click", function() {
    let li = this.parentNode
    let ul = li.parentNode
    ul.removeChild(li)
    //shows deleted notification
    toastDOM.querySelector('.toast-body').innerHTML = "Notunuz silindi!"
    toast.show()
});
}

//checks or unchecks the elements in the list
let ulDOM = document.querySelector('ul')
ulDOM.addEventListener('click', function(checkedUl) {
  if (checkedUl.target.tagName === 'LI') {
    checkedUl.target.classList.toggle('checked')
  }
})
