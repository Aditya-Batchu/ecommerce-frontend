let todo = JSON.parse(localStorage.getItem('todo')) || [];

let tododisplay = document.querySelector('.todo-input1');
let addDisplay = document.querySelector('.js-todo1');

addDisplay.addEventListener('click', ()=>{
  todo.push(tododisplay.value);
  
  tododisplay.value = '';
  
});

let tododisplay2 = document.querySelector('.todo-input2');
let addDisplay2 = document.querySelector('.js-todo2');
let showList = document.querySelector('.todo-items');


addDisplay2.addEventListener('click', ()=>{
  todo.push(tododisplay2.value);
  let text = '';
  for(let i=0;i<todo.length;i++){
    text+= `<p>${todo[i]}</p>`;
  };

  showList.innerHTML = text;

  tododisplay2.value = '';
  
});


let todoInput = document.querySelector('.todo-input3');
let dateInput = document.querySelector('.date-input');
let addDisplay3 = document.querySelector('.js-todo3');



addDisplay3.addEventListener('click', ()=>{
  if(!todoInput.value){
    return (alert("Enter an Todo"));
  }else if(!dateInput.value){
    return (alert("Select Date"));
  }
  
  let obj = {
    ['name']: todoInput.value,
    ['time']: dateInput.value
  };

  todo.push(obj);
  render();
})

function render(){
  let html = '';
    for(let i=0;i<todo.length;i++){
    html+= `<div>${todo[i].name}</div>
    <div>${todo[i].time}</div> 
    <button onclick = '
          todo.splice(${i},1);
          render();
    '>Delete</button>
  `;
  }
  todoInput.value = '';
  dateInput.value = '';
  document.querySelector('.show-item-wise').innerHTML = html;
  localStorage.setItem('todo',JSON.stringify(todo));
}