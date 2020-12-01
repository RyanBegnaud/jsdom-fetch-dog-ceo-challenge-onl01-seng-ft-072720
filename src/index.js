const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener("DOMContentLoaded", function(){
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => newImg())
})

function newImg(image)){
  let container = document.getElementById("dog-image-container")
  let img = document.createElement('img')
  container.append(img)
  
  
}