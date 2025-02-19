(function () {
    const name = 'Andreea';
    console.log(name);
    const hello = () => console.log('Hello from IIFE');
    hello();
})();


//one with parameters
(function (name) {
    console.log('Hello ' + name);
})('Marius');

(function hello() {
    console.log('Say hello');
})();