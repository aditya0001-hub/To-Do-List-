let addBtn = document.getElementById("taskBtn");
let taskInput = document.getElementById("taskInput");
let showTasks = document.getElementById("showTasks");
let date = document.getElementById("date");
let count = 0;

addBtn.addEventListener('click', async () => {
   if(taskInput.value===""){
       return 0;
 }
  count++;
  //adding checkbox
  // localStorage.setItem(count,taskInput.value)
 
let done=document.createElement('button')
done.className="doneButton";
done.innerHTML="Done"
done.onclick=()=>{
   taskdiv.style.textDecoration = "line-through";
}
let del=document.createElement('button')
del.className="delButton";
del.innerHTML="Delete";
del.onclick=()=>{
  taskdiv.remove()
}
  //adding div to and show task in div
  let taskdiv = document.createElement('div')
  taskdiv.className = "taskSet";
  taskdiv.append(date.value + " : " + taskInput.value)
  taskdiv.append(del);
taskdiv.append(done);
  showTasks.prepend(taskdiv);
  console.log(count)
  taskInput.value="";
}
)
