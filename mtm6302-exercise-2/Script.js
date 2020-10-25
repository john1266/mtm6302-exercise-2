let $image = document.getElementById('image')

let image = []

for (let i = 10 ; i < 22; i++ )  {image.push ( `<img src="images/${i}.jpg">
` )}

$image.innerHTML += image.join('')
