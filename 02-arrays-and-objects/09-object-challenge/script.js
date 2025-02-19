const library = {
    title: 'enola',
    author: 'jack black',
    status: {
        own: true,
        reading: false,
        read: false
    }
};

library.status.reading = true;
library.status.read = true;

const {title: firstBook} = library;

const json = JSON.stringify(library);

console.log(json);