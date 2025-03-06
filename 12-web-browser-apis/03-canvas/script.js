const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');


//draw rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

//draw circle
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

//draw line
ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 10;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();


//draw text
ctx.font = '30px Arial';
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillText('Ce faci lume?', 400, 100, 300)
ctx.strokeText('Ce faci lume?', 400, 300, 300)


//draw image
const image = document.querySelector('img');
image.style.display = 'none';
image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGvme-petaMVvLEE6c67Uf4lty0CaFPbVkw&s';
console.log(image);


image.addEventListener('load', () => ctx.drawImage(image, 260, 260, 200, 200));



console.log(image);