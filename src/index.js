const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener("DOMContentLoaded", function(){
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => )
})

function newImg(){
  let img = document.createElement('img')
  body.append(img)
  
}