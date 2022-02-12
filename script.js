const addTaskBtn = document.querySelector('#input-btn');
const inputField = document.querySelector('#input-text');
const tasksContainer = document.querySelector('#tasks-wrapper');

addTaskBtn.addEventListener('click' , getAndDisplayTask);

inputField.addEventListener('keyup', function(e){ 
    if (e.keyCode === 13) {

        getAndDisplayTask();

    }

});

tasksContainer.addEventListener('click', function(e){

    if(e.target.classList.contains('remove-btn')){
        const removeBtn = e.target;
        removeBtn.parentElement.parentElement.remove();
    }

});

tasksContainer.addEventListener('click', function(e){

    if(e.target.classList.contains('done-btn')){
        let taskDiv = e.target.parentElement.parentElement;
        taskDiv.classList.add('doneBg');
        let textNode = taskDiv.childNodes[1];
        textNode.classList.add('doneTask');
    }

});







function getAndDisplayTask(){

    let taskText = document.querySelector('#input-text');
    taskTextValue = taskText.value;
    
    let taskContainer = document.querySelector('#tasks-wrapper');
    let newTaskwrapper = document.createElement('div');
    newTaskwrapper.classList.add('task-wrapper', 'flex' ,'justify-between', 'items-center' ,'bg-white','rounded', 'mt-6', 'w-3/4', 'mx-auto' ,'flex-wrap');
    newTaskwrapper.innerHTML = `
    <div id="task" class="py-6 px-4 rounded font-medium"> <p class="breakAll">${taskTextValue}</p>
    </div>

    <div class="btn-wrapper py-6 px-4 font-medium rounded">
        <button class=" done-btn w-20 py-2 text-white  bg-green-500 rounded">
            Done
        </button>
        <button class="remove-btn w-20 py-2 text-white  bg-red-500 rounded">
            Remove
        </button>
    </div>
    `;

   taskContainer.appendChild(newTaskwrapper);

   taskText.value = '';

}