document.querySelector('#add').onclick=function(){
    if (document.querySelector('#newTask input').value.length==0){
        alert("Please enter a task!")
    }else {
        document.querySelector('#tasks').innerHTML +=`
        <div class="task">
        <span id="taskNew">
        ${document.querySelector('#newTask input').value}</span>
        <button class="delete">
        <i class="fa-solid fa-trash-can"></i>
        </button>
        </div>`;

        var currentTask = document.querySelectorAll ('.delete');
        for (var i=0 ; i<currentTask.length;i++){
            currentTask[i].onclick=function(){
                this.parentElement.remove();
            }
        }
       var tasks= document.querySelectorAll('.task');
       for (var i =0 ;i <tasks.length;i++){
        tasks[i].onclick=function(){
            this.classList.toggle('completed')
        }
       }
      document.querySelector('#newTask input').value=""; 
    }

}