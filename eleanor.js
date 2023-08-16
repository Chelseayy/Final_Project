function showImage(imageUrl) {
  var selectedImagesDiv = document.getElementById("selected-images");
  var imageElement = document.createElement("div");
  imageElement.className = "selected-image";
  imageElement.innerHTML = '<img src="' + imageUrl + '" alt="Selected Image">' +
                            '<div class="delete-icon" onclick="removeImage(this)">X</div>';
  selectedImagesDiv.appendChild(imageElement);
}

function removeImage(deleteIcon) {
  var imageElement = deleteIcon.parentNode;
  imageElement.parentNode.removeChild(imageElement);
}