// 获取输入框和 To-Do 列表元素
const newItemInput = document.getElementById("newItemInput");
const newItem = document.getElementById("newItem");

// creat array
let whatWeHave = [];

// add item
function addItem() {
  let newItemText = newItemInput.value;
  if (newItemText.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = newItemText;
    const deleteButton = document.createElement("button");
    
    // use image to replace the button
    let deleteImage = document.createElement("img");
    deleteImage.src = "delete-button.jpeg"; // image URL
    deleteImage.alt = "delete";
    deleteImage.style.width = "1.5rem"; // image width
    deleteImage.style.height = "1.5rem"; // image height
    deleteButton.style.border="none";
    deleteButton.style.backgroundColor="white"; 

    deleteButton.appendChild(deleteImage);
    deleteButton.onclick = function() {
      this.parentElement.remove();
      // delete item in the list
      let itemIndex = whatWeHave.indexOf(newItemText);
      if (itemIndex !== -1) {
        whatWeHave.splice(itemIndex, 1);
      }
    };
    
    li.appendChild(deleteButton);
    newItem.appendChild(li);
    newItemInput.value = "";

    //add items in array
    whatWeHave.push(newItemText);
    console.log(whatWeHave); // console.log 
  }
}

// when enter pressed add item
newItemInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addItem();
  }
});
