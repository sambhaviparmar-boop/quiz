// let input = document.getElementById("taskInput");
// let addBtn = document.getElementById("addBtn");
// let taskList = document.getElementById("taskList");

// addBtn.addEventListener("click", function () {
//     let taskText = input.value.trim();

//     if (taskText === "") {
//         alert("Please enter a task!");
//         return;
//     }

//     let li = document.createElement("li");

//     li.innerHTML = `
//         <span class="task">${taskText}</span>
//         <button class="deleteBtn">X</button>
//     `;

//     li.querySelector(".task").addEventListener("click", function () {
//         li.classList.toggle("completed");
//     });

//     li.querySelector(".deleteBtn").addEventListener("click", function () {
//         li.remove();
//     });

//     taskList.appendChild(li);
//     input.value = "";
// });


let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let tasklist = document.getElementById("taskList");


addBtn.addEventListener("click" , function(){
               
         let taskText = input.value.trim();

         if(taskText === ""){
            alert("please enter a task!");
            return;
         }
    
         let li = document.createElement("li");

         li.innerHTML = `
            <span class="task">${taskText}</span>
        <button class="deleteBtn">X</button>
         `;
  
         li.querySelector(".task").addEventListener("click" , function(){
            li.classList.toggle("completed");
         })
         li.querySelector(".deleteBtn").addEventListener("click" , function(){
            li.remove();
         });
         tasklist.appendChild(li);
         input.value = "";


})
