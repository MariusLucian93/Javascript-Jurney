const div = document.createElement('div');

div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'my-element');
// div.innerText = 'Buna ziua';

const text = document.createTextNode('Mango');
div.appendChild(text);

// document.body.appendChild(div);

document.querySelector('ul').appendChild(div);

div.style.color = 'wihte';
div.innerHTML = `Mango 
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`
div.style.border = '1px solid #ccc';
div.style.font = '16px Poppins, sans-serif';
div.style.margin = '0px 5px 20px';
div.style.padding = '10px 15px';
div.style.borderRadius = '5px';
div.style.fontWeight = '700';
div.style.display = 'flex';
div.style.width = '45%';