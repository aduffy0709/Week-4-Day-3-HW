function addtolist(event) {
    let input = document.getElementById("data").value;
    let ul = document.getElementById("myList"); 
    let newLi = document.createElement("li");
    newLi.textContent = input; 
    ul.append(newLi); 
}

let button=document.getElementById("button");

button.addEventListener("click", addtolist); 

let ToDo = document.createElement('li');
ToDo.innerHTML = 'To Do Item 3';
list.appendChild(ToDo);

list.innerHTML = '';
['To Do Item 4', 'To Do Item 5', 'To Do Item 6'].forEach(function(itemText){
	var li = document.createElement('li');
	li.innerHTML = itemText;
	list.appendChild(li);
})
