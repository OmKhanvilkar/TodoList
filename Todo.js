//0
const todoList=[
    {
        name:'make dinner',
        dueDate:'21-05-2024'
    },
    {
        name:'wash dishesh',
        dueDate:'21-05-2024'
    }
];

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
                //console.log(index);       //clouser
                todoList.splice(index,1);
                rendertodoList();
            });
        });
        
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
    //console.log(todoList);
    inputElement.value="";     

    rendertodoList();
}
