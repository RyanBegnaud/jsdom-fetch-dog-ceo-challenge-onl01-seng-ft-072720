document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  allBreeds();
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
  (Object.keys(json.message).forEach(addList)));
}

function addList(dog) {
  let dogs = document.getElementById("dog-breeds")
  let ul = document.createElement("ul")
  ul.innerHTML = dog
  dogs.appendChild(ul)
}

document.getElementById("dog-breeds").addEventListener("click", function(e) {
  e.target.style.color = "red"
} );

let letter =  document.getElementById("breed-dropdown").value
document.getElementById("breed-dropdown").addEventListener("change", function(e) {
  let ele = document.getElementById("dog-breeds").childNodes
  console.log(ele.forEach(oo => console.log(oo.textContent))
  if (letter.value === "a") {
    
  }
})
