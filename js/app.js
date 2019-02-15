
function loadTasks(taskList){
    let container = document.getElementById('taskContainer');
    container.innerHTML='';

    taskList.forEach((task,i)=>{
        let divTask = document.createElement('div');
        divTask.className="taskCard";
        divTask.innerHTML = `
            ${task.img?"<div class=\"img__container\"><img src='" + task.img + "' /></div>":""}
            <div class=\"card__body\">
            <div class=\"card__task\"><h2 class=\"task__title\"> <input type="checkbox" ${task.completed?"checked":""} title="check completed">  ${task.title + ' ' + i}</h2></div>
            <span>created on ${task.createdOn} by ${task.createdBy}</span>
            <p>${task.description}</p>
            <span>Due on ${task.dueDate}</span>
            </div>           
        `;

        if(task.completed)
            divTask.classList.add("taskCompleted");
        else if(task.dueDate < Date.now() )
            divTask.classList.add("taskLate");


        container.appendChild(divTask);
    });
}


loadTasks(taskList);


function addTask(task){
    taskList.unshift(task);
    loadTasks(taskList);
}