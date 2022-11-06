const todoForm= document.querySelector("#todo-form");
const todoInput= todoForm.querySelector("input");
const todoList= document.querySelector("#todo-list");

const TODOS_KEY="todos";

//const todoArray= []; 
let todoArray=[];


function saveTodo(){
    localStorage.setItem(TODOS_KEY , JSON.stringify(todoArray));
}

function deleteTodo(event){
    // console.log(event.target);
    // console.log(event.target.parentElement);
    // console.log(event.target.parentElement.innerText);
    const li= event.target.parentElement;
    li.remove();
    todoArray= todoArray.filter(item=> item.id!==parseInt(li.id));  
    // console.log(typeof li.id);
    // console.log(todoArray[0].id); 
    saveTodo();
}


function paintTodo(newTodoObj){
    
    const li= document.createElement("li");
    li.id= newTodoObj.id;
    const span= document.createElement("span");
    const button= document.createElement("button");
    span.innerText= newTodoObj.text;
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);

}


function handleSubmitTodo(event){
    event.preventDefault();
    const newTodo= todoInput.value;
    todoInput.value="";
    const newTodoObj= {id: Date.now(), text: newTodo};
    todoArray.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();

}

todoForm.addEventListener("submit", handleSubmitTodo);

const savedTodoArray=localStorage.getItem("todos");

if(savedTodoArray!==null){
    const parsedTodoArray= JSON.parse(savedTodoArray);
    parsedTodoArray.forEach(paintTodo);
    todoArray= parsedTodoArray;
}



