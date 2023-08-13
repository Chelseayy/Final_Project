const newItemInput = document.getElementById("newItemInput");
const newItem = document.getElementById("newItem");

let whatWeHave = JSON.parse(localStorage.getItem('weHave')) || []; // keyName = weHave, parse to an array whatWeHave 

  //store item changes
  function updateLocalStorage() {
    localStorage.setItem('weHave', JSON.stringify(whatWeHave)); // setItem(keyName, keyValue)
  }

  //funtion of add item, delete item, and keep the item in local storage so event refresh the page itmes are still showing there 
  function addItem() {
    let newItemText = newItemInput.value.trim();// remove whitespace from both ends of string

    if (newItemText !== "") {
      let li = document.createElement("li");
      li.textContent = newItemText;
      
      //create delete button
      const deleteButton = document.createElement("button");
      let deleteImage = document.createElement("img");

      //css of delete buttons
      deleteImage.src = "delete-button.jpeg";
      deleteImage.alt = "delete";
      deleteImage.style.width = "1.5rem";
      deleteImage.style.height = "1.5rem";
      deleteButton.style.border="none";
      deleteButton.style.backgroundColor="white"; 

      deleteButton.appendChild(deleteImage);
      
      //delete button function
        deleteButton.onclick = function() {
        this.parentElement.remove();
        let itemIndex = whatWeHave.indexOf(newItemText); //the index of the new item in whatWeHave array
        if (itemIndex !== -1) {
            whatWeHave.splice(itemIndex, 1); // remove 1 element at index of the delete button
            updateLocalStorage(); // updating local storage after the remove
          }
        };

      li.appendChild(deleteButton);
      newItem.appendChild(li);
      newItemInput.value = "";//clear the input box every time

      whatWeHave.push(newItemText);
      updateLocalStorage(); // updating local storage after adding items
    }
  }

  //add new item when click enter 
  newItemInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      addItem();
    }
  });

  window.onload = function() {
    whatWeHave.forEach(function(itemText) {
      let li = document.createElement("li");
      li.textContent = itemText;
      
      const deleteButton = document.createElement("button");
      let deleteImage = document.createElement("img");
      deleteImage.src = "delete-button.jpeg";
      deleteImage.alt = "delete";
      deleteImage.style.width = "1.5rem";
      deleteImage.style.height = "1.5rem";
      deleteButton.style.border="none";
      deleteButton.style.backgroundColor="white"; 

      deleteButton.appendChild(deleteImage);
      deleteButton.onclick = function() {
        this.parentElement.remove();
        let itemIndex = whatWeHave.indexOf(itemText);
        if (itemIndex !== -1) {
          whatWeHave.splice(itemIndex, 1);
          updateLocalStorage(); // updating local storage
        }
      };

      li.appendChild(deleteButton);
      newItem.appendChild(li);
    });
  }