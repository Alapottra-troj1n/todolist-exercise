const addTaskBtn = document.querySelector('#input-btn');
const inputField = document.querySelector('#input-text');
const tasksContainer = document.querySelector('#tasks-wrapper');








addTaskBtn.addEventListener('click' , function(){
    if(inputField.value === ''){

    }
    
    else{

        getAndDisplayTask();

    }

});

inputField.addEventListener('keyup', function(e){ 
    if(inputField.value === ''){

    }
    
    else if (e.keyCode === 13) {

        getAndDisplayTask();

    }

});

tasksContainer.addEventListener('click', function(e){

    if(e.target.classList.contains('remove-btn')){
        const removeBtn = e.target;
        removeLocalTasks(removeBtn.parentElement.parentElement);
        removeBtn.parentElement.parentElement.remove();
       
    }

});

tasksContainer.addEventListener('click', function(e){

    if(e.target.classList.contains('done-btn')){
        let taskDiv = e.target.parentElement.parentElement;
        taskDiv.classList.toggle('doneBg');
        let textNode = taskDiv.childNodes[1];
        textNode.classList.toggle('doneTask');
    }

});


function checkLocal(){
        //creating a variable to store into local storage as a array

        let tasks;

        //checking if local storage is empty if it is empty/null than it will set the tasks variable as a empty array;
        //and if there are strings in the local storage than it will parse the text as a json which will keep the array like structure and set it to the tasks variable.
    
        if(localStorage.getItem('tasks') === null){
            tasks = [];
            return tasks;
        }
        else{
          tasks = JSON.parse(localStorage.getItem('tasks'));
          return tasks;
        }

}



//saving on local storage function

function saveLocalTask(task){
   let tasks = checkLocal();

    //after the inital check and set tasks will be turned into a array and we will push the task we take as a arguement into the exisiting and updated array and task the new and updated tasks
    //array into the local storage while keeping the array like structure by JSON.stringify
    
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};



function removeLocalTasks(task){
    let tasks = checkLocal();

   let removeTask = task.children[0].children[0].innerText;


   tasks.splice(tasks.indexOf(removeTask), 1);
   localStorage.setItem('tasks', JSON.stringify(tasks));



}



function displayLocalTasks(){

    let tasks = checkLocal();


    for(task of tasks){
        let taskContainer = document.querySelector('#tasks-wrapper');
        let newTaskwrapper = document.createElement('div');
        newTaskwrapper.classList.add('task-wrapper', 'flex' ,'justify-between', 'items-center' ,'bg-white','rounded', 'mt-6', 'w-3/4', 'mx-auto' ,'flex-wrap');
        newTaskwrapper.innerHTML = `
        <div id="task" class="py-6 px-4 rounded font-medium"> <p class="breakAll">${task}</p>
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

    };

};

document.addEventListener('DOMContentLoaded', displayLocalTasks)












function getAndDisplayTask(){
    let taskText = document.querySelector('#input-text');
    let taskTextValue = taskText.value;
    saveLocalTask(taskTextValue);
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


