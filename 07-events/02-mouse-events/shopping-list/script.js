const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onDoubleClick = () => {
    if (document.body.style.background !== 'orange'){
    document.body.style.background = 'orange'
    document.body.style.color = 'purple'
    } else {
        document.body.style.background = 'white';
        document.body.style.color = 'white';
    }
    console.log(`Double Click Event`)
};
const onRightClick = () => console.log('Right click event');
const onMouseDown = () => console.log('Mouse Down');
const onMouseUp = () => console.log('Mouse Up');
const onMouseWheel = () => console.log('Mouse Wheel');
const onMouseOver = () => console.log('Mouse Over!');
const onMouseOut = () => console.log('Mouse Out!');
const onDragStart = () => console.log('Drag Started');
const OnDrag = () => console.log('Dragging');
const OnDragEnd = () => console.log('Drag Ended');



//event listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', OnDrag);
logo.addEventListener('dragend ', OnDragEnd);
