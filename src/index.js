document.addEventListener('DOMContentLoaded', function () {
  loadImages();
});

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(res=> res.json())
    .then(json => {
      json.message.forEach(image => addImage(image))
    });
}

function addImage(dogPicUrl) {
  let container = document.querySelector('#dog-image-container');
  let newImageEl = document.createElement('img');
  newImageEl.src = dogPicUrl;
  container.appendChild(newImageEl);
}

function allBreeds(){
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => 
    json.message.forEach(dog => addList(dog))
  )
}

function addList(dogName) {
  let dogs = document.getElementById("dog-breeds")
  let ul = document.createElement("ul")
  ul.innerHTML = dogName
  dogs.appendChild(ul)
  
}