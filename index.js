const imageContainer = document.getElementById('image-container')

for(let i = 1; i <= 20;i++){
    const element = document.createElement('img')
    element.src = `./assets/img/album/img${i}.jpg`
    imageContainer.appendChild(element)
    setTimeout(1000)
}