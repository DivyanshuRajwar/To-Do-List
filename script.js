//document window ko pele pura load krna pdega....
document.addEventListener('DOMContentLoaded',()=>{
    
    const input_task = document.querySelector('.task_input');
    const addBtn = document.querySelector('.addbtn');
    const mediaBtn = document.querySelector('.media_btn');
    const list_container = document.querySelector('#list-container');
    addBtn.addEventListener('click',()=>{
        if(input_task.value === ''){
            alert("You must write somthing!");
        }
        else{
            let li = document.createElement('li');
            li.innerHTML = input_task.value;
            list_container.appendChild(li);
            let span = document.createElement('span');
            span.innerHTML = "\u00d7";
            li.appendChild(span)
        }
        input_task.value = '';
        saveDate();
    })   
    mediaBtn.addEventListener('click',()=>{
        if(input_task.value === ''){
            alert("You must write somthing!");
        }
        else{
            let li = document.createElement('li');
            li.innerHTML = input_task.value;
            list_container.appendChild(li);
            let span = document.createElement('span');
            span.innerHTML = "\u00d7";
            li.appendChild(span)
        }
        input_task.value = '';
        saveDate();
    })   
    list_container.addEventListener('click', function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveDate();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveDate();
        }
    }, false);
    function saveDate(){
        localStorage.setItem("data",list_container.innerHTML);
    }
    function showTask(){
        list_container.innerHTML = localStorage.getItem("data");
    }
    showTask();

})

