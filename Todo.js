//0
let todoList=JSON.parse(localStorage.getItem('todolist')) || [];

rendertodoList();
//2
function rendertodoList(){
    let todoListHTML="";

    todoList.forEach((todoObject)=>{  
             
        todoListHTML+=`
           <div>${todoObject.name}</div>
           <div>${todoObject.dueDate}</div>                
           <button class="js-todo-btn js-delete-btn">Delete</button>`;       
    });

    document.querySelector('.js-todo-list')
        .innerHTML=todoListHTML;

    document.querySelectorAll('.js-delete-btn')
        .forEach((deletebtn,index)=>{
            deletebtn.addEventListener('click',()=>{

                todoList.splice(index,1);
                saveToStorage();
                rendertodoList();
            });
        });   
}

function saveToStorage(){
    localStorage.setItem('todolist',JSON.stringify(todoList))
}

document.querySelector('.js-todoo-btn')
    .addEventListener('click',()=>{
        addTodo();
    });
//1
function addTodo(){
    const inputElement=document.querySelector('.js-input');
    const name=inputElement.value;

    const dueDateElement=document.querySelector('.js-due-date');
    const dueDate=dueDateElement.value;
    todoList.push({
        name,                  
        dueDate
    });
    saveToStorage();
    //console.log(todoList);
    inputElement.value="";     

    rendertodoList();
}
