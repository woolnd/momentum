const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";


const BUTTON_NAME = "button-name";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //단순 문자열로 변경 "[\"a\",\"b\",\"c\"]"
}
function deleteToDo(event){
    const li = event.target.parentElement; //target = 특정 button이고 button은 부모를 가지고 있다
    li.remove();
    toDos = toDos.filter(toDo => toDo.id != parseInt(li.id)); //filter 속 값이 true인 값만 남기는 남기는 함수 우리가 클릭한 li.id와 다른 toDo는 남겨두겠다toDo.id는 int이고 li.id는 문자형임으로 parseint로 int로 변경하여 비교한다.
    saveToDos();
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; //obj의 각 item의 id를 받아서 원하는 item 삭제 하기 위함
    const span = document.createElement("span");
    span.innerText = newTodo.text; //obj로 받았기에 newTodo.text를 입력
    const button = document.createElement("button");
    button.className = BUTTON_NAME;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //단순 문자열을 자바스크립트 오브젝트로 변경
    toDos = parsedToDos; //toDos배열을 업데이트 해준다.
    parsedToDos.forEach(paintToDo); //오브젝트의 item에게 paintTodo 함수를 실행한다. 즉 화면에 표시한다.
}