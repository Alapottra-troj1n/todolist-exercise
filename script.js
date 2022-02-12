const addTaskBtn = document.querySelector('#input-btn');

addTaskBtn.addEventListener('click' , getAndDisplayTask);

function getAndDisplayTask(){

    let taskText = document.querySelector('#input-text');
    taskTextValue = taskText.value;
    
    let taskContainer = document.querySelector('#tasks-wrapper');
    let newTaskwrapper = document.createElement('div');
    newTaskwrapper.classList.add('task-wrapper', 'flex' ,'justify-between', 'items-center' ,'bg-white','rounded', 'mt-6', 'w-3/4', 'mx-auto');
    newTaskwrapper.innerHTML = `
    <div id="task" class="py-6 px-4 rounded font-medium">${taskTextValue}</div>

    <div class="btn-wrapper  py-6 px-4 font-medium rounded">
        <button id="remove-btn" class="w-20 py-2 text-white  bg-green-500 rounded">
            Done
        </button>
        <button id="remove-btn" class="w-20 py-2 text-white  bg-red-500 rounded">
            Remove
        </button>
    </div>
    `;

   taskContainer.appendChild(newTaskwrapper);

   taskText.value = '';

}