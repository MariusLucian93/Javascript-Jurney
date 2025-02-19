const itemInput = document.getElementById('item-input');

function onKeyPress () {
    console.log('They key has been pressed');
}

function onKeyUp () {
    console.log('They key has been pressed but UP');
}

function onKeyDown (e) {
    //key
    // if (e.key === 'Enter'){
    //     alert('you pressed enter');
    // }
    // console.log(e.key);

    //keyCode
    if (e.keyCode == 13) {
        alert('You Pressed enter');
    }

    //code
    if (e.code === 'KeyD') {
        console.log('You Pressed the D!');
    }

    // if (e.repeat) {
    //     console.log(`You are holding down ${e.key}, stop!`);
    // }

    // console.log(`shitft is: ${e.shiftKey}`);
    // console.log(`control is: ${e.ctrlKey}`);
    // console.log(`alt is: ${e.altKey}`);

    if (e.shiftKey && 'KeyD') {
        console.log('You Pressed the big D');
    }
}




// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);