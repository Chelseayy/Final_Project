const checkListInput = document.getElementById("checkListInput");
const checkListItem = document.getElementById("checkListItem");

let whatweBuy = JSON.parse(localStorage.getItem('weBuy')) || []; // keyName = weBuy, parse to an array whatweBuy 

  //store item changes
  function updateLocalStorage() {
    localStorage.setItem('weBuy', JSON.stringify(whatweBuy)); // setItem(keyName, keyValue)
  }

  //funtion of add item, delete item, and keep the item in local storage so event refresh the page itmes are still showing there 
  function addCheckList() {
    let checkListItemText = checkListInput.value.trim();// remove whitespace from both ends of string

    if (checkListItemText !== "") {
      let li = document.createElement("li");
      li.textContent = checkListItemText;
      
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
        let itemIndex = whatweBuy.indexOf(checkListItemText); //the index of the new item in whatweBuy array
        if (itemIndex !== -1) {
            whatweBuy.splice(itemIndex, 1); // remove 1 element at index of the delete button
            updateLocalStorage(); // updating local storage after the remove
          }
        };

      li.appendChild(deleteButton);
      checkListItem.appendChild(li);
      checkListInput.value = "";//clear the input box every time

      whatweBuy.push(checkListItemText);
      updateLocalStorage(); // updating local storage after adding items
    }
  }

  //add new item when click enter 
  checkListInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      addCheckList();
    }
  });

  window.onload = function() {
    whatweBuy.forEach(function(itemText) {
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
        let itemIndex = whatweBuy.indexOf(itemText);
        if (itemIndex !== -1) {
          whatweBuy.splice(itemIndex, 1);
          updateLocalStorage(); // updating local storage
        }
      };

      li.appendChild(deleteButton);
      checkListItem.appendChild(li);
    });
  }