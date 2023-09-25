let myList = document.getElementById("listItems");

function newElement() {
  let newItemAdded = document.getElementById("inputBox").value;
  
  let childLi = document.createElement("li"); // it will create an empty li like this: <li></li>
  
  childLi.innerText = newItemAdded;
  myList.appendChild(childLi);
  
  document.getElementById("inputBox").value = "";
  let button = document.createElement("button");

  childLi.innerHTML += "<input type = 'checkbox' class='checkbox'>";


  
  childLi.appendChild(button);
  childLi.setAttribute("class","textid")


  button.innerText = "Delete";
  button.setAttribute("id", "btn")
 

   button.addEventListener("click", handleClick)
  childLi.appendChild(button);


  function handleClick(event) {
    event.target.parentElement.remove();
  }
 

}


/*
event | attribute | function
click | onclick | handleClick
change | onchange | handleChange
submit | onsubmit | handleSubmit

*/

