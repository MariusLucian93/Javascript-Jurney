const button = document.getElementById('generate');
function fetchUser() {
    fetch('https://randomuser.me/api')
    .then((res) =>  {
        if (res.status !== 200) {
            throw new Error('Request Not found!');
        }
        return res.json()
    })
    .then((data) => {
        displayUser(data.results[0]);
        changeData(data.results[0]);
        console.log(data.results[0]);
        return (data.results[0])    
    })
    .then((pictures) => {
        console.log(pictures.picture.large);
        changePictures(pictures);
    })
    .catch(() => alert('SOmething went wrong!'));


    function displayUser (user) {
        if(user.gender === 'female') {
            document.body.style.backgroundColor = 'red';
        } else {
            document.body.style.backgroundColor = 'blue';
        }
    };

    function changeData (user) {
        const info = document.querySelector('.space-y-3');

        const name = info.children[0];
        name.innerHTML = `<span class="font-bold">Name: </span>${user.name.title} ${user.name.first} ${user.name.last}`
    
        const email = info.children[1];
        email.innerHTML = `<span class="font-bold">Email: </span>${user.email}`;

        const phone = info.children[2];
        phone.innerHTML = `<span class="font-bold">Phone: </span>${user.phone}`;

        const location = info.children[3];
        location.innerHTML = `<span class="font-bold">Location: </span>${user.location.country}`;

        const age = info.children[4];
        age.innerHTML = `<span class="font-bold">Age: </span>${user.dob.age}`;
        // console.log(name, email, phone, location, age);

    }

    function changePictures (user) {
        const oldImage = document.querySelector('img.w-48');
        oldImage.src = user.picture.large;
        // console.log(oldImage);
    }
}

// const changeImage = document.querySelector('.v-48.h-48.rounded-full.mr-8');
// // changeImage.src = user.pictures.large
// const changeImage = document.querySelector('img.w-48');
// console.log(changeImage.src);

button.addEventListener('click', fetchUser);