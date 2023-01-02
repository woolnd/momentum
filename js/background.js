const images = [
    "0.png",
    "1.png"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img"); //<img>를 생성한다.
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);//body안에 html 생성한다.
bgImage.id = 'bgImage';
