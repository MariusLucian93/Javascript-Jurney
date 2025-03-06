function clock () {
    const now = new Date();
    const canvas = document.getElementById('canvas');
    const CTX = canvas.getContext('2d');


    //setup canvas
    CTX.save(); //saves the default state
    CTX.clearRect(0, 0, 500, 500);
    CTX.translate(250, 250); //put 0,0 in the middle
    CTX.rotate(-Math.PI / 2); //rotate clock -90degrees

    //set default styles
    CTX.strokeStyle = 'black';
    CTX.fillStyle = '#f4f4f4';
    CTX.lineWidth = 5;
    CTX.lineCap = 'round';

    //draw clock face/border
    CTX.save();
    CTX.beginPath();
    CTX.lineWidth = 14;
    CTX.strokeStyle = '#800000'
    CTX.arc(0, 0, 130, 0, Math.PI * 2, true);
    CTX.stroke();
    CTX.fill();
    CTX.restore();

    //draw hour marks
    CTX.save();
    for (let i = 0; i < 12; i++) {
        CTX.rotate(Math.PI / 6);
        CTX.beginPath();
        CTX.moveTo(100, 0);
        CTX.lineTo(120, 0);
        CTX.stroke();
    }
    CTX.restore();

    //draw minute marks
    CTX.save();
    CTX.lineWidth = 4;
    for (let i = 0; i < 60; i++) {
        if (i % 5 !== 0) {
            CTX.beginPath();
            CTX.moveTo(120, 0);
            CTX.lineTo(120, 0);
            CTX.stroke();
        }
    CTX.rotate(Math.PI / 30);
    }

    CTX.restore();


    //get current time
    const hr = now.getHours() % 12;
    const min = now.getMinutes();
    const sec = now.getSeconds();

    // console.log(`time is: ${hr}:${min}:${sec}`);


    //draw HOUR hand
    CTX.save();
    CTX.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    CTX.strokeStyle = 'black';
    CTX.lineWidth = 10;
    CTX.beginPath();
    CTX.moveTo(-20, 0);
    CTX.lineTo(80, 0); 
    CTX.stroke();
    CTX.restore();


    //draw MINUTE hand
    CTX.save();
    CTX.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
    CTX.strokeStyle = '#800000';
    CTX.lineWidth = 14;
    CTX.beginPath();
    CTX.moveTo(-20, 0);
    CTX.lineTo(80, 0); 
    CTX.stroke();
    CTX.restore();

    //draw SECOND hand
    CTX.save();
    CTX.rotate((sec * Math.PI / 30));
    CTX.strokeStyle = 'grey';
    CTX.fillStyle = 'black';
    CTX.lineWidth = 5;
    CTX.beginPath();
    CTX.moveTo(-25, 0);
    CTX.lineTo(90, 0); 
    CTX.stroke();
    CTX.beginPath();
    CTX.arc(0, 0, 5, 0, Math.PI * 2, true);
    CTX.fill();
    CTX.restore();

    CTX.restore(); //restores to default state 

    requestAnimationFrame(clock);
}

requestAnimationFrame(clock);

clock();