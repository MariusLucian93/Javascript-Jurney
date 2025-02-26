async function getUser () {
    try {
        // const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const res = await fetch('http://httpstat.us/404');
       if (res.status !== 200) {
        throw new Error('request failed');
       }
       
        const data = await res.text();
        console.log(data);
    } catch(error) {
     console.log(error)   
    }
}

async function getPost () {
        // const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const res = await fetch('http://httpstat.us/404');
       if (!res.ok) {
        throw new Error('request failed');
        }
       
        const data = await res.text();
        console.log(data);
}      


getPost().catch((error) => console.log(error));
// getUser();