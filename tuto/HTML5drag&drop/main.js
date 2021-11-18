let imgElement = new Image();
let dragElement = document.createElement('span');
let myData = {
    id:23,
    tag:'p',
    text:'Just a paragraph',
    timestamp: 0,
    url: '',
};

document.addEventListener('DOMContentLoader', () => {

    // Required event listeners
    document.body.addEventListener('dragstart', handleDragStart); // for draggable
    document.body.addEventListener('drop', handleDrop); // for dropzone
    document.body.addEventListener('dragover', handleOver); // for dropzone

    // Optional but useful events
    document.body.addEventListener('mousedown', handleCursorGrab);
    document.body.addEventListener('dragenter', handleEnter);
    document.body.addEventListener('dragleave', handleLeave);

    // Set up draggable things (non-ios)
});

function handleDragStart(ev) {
    // User started to drag a draggable from the webpage
    let obj = ev.target;
    if(!obj.closest('.draggable')) return;
    if(obj.classList.contains('draggable')){
        obj = obj.firstElementChild;
    }
    console.log('DRAGSTART');
    ev.dataTransfer.setDate('text/plain', ' SOME DATA ');
    ev.dataTransfer.setDragImage(dragElement, 50, 50);
    ev.dataTransfer.setDragImage(imgElement, 50, 50);
}

myDate.tag = obj.tagName;
myData.text = obj.textContent?obj.textContent:obj.alt?obj.alt:'';
myData.url = obj.href?obj.href: obj.src? obj.scr:'';
myData.timestamp = Date.now();
let data = JSON.stringify(myData);
ev.dataTransfer.setData('application/json', data);
obj.setAttribute('data-ts', myData.timestamp);

let dataList = ev.dataTransfer.items;
for(let i=0; i<ev.dataTransfer.items.length, i++;){
    let item = ev.dataTransfer.items [i];
    console.log(i, item.kind, item.type);
}

function handleDrop(ev) {
    let dropzone = ev.target;
    if(!dropzone.classList.contains('dropzone')) return;

    ev.preventDefault();
    console.log('DROP', ev.dataTransfer);
    let data = ev.dataTransfer.getData('text/plain');
    let data = JSON.parse(ev.dataTransfer.getData('applcation/json'));
    let draggable = document.querySelector(`[data-ts="${data.timestamp}]`);
    let clone = draggable.cloneNode(true);
    dropzone.append(clone);
    draggable.remove();

    // dropzone.textContent += data;
    dropzone.classList.remove('over');

    let len = ev.dataTransfer.items.length;
    for(let i=0;i<len; i++){
        let item = ev.dataTransfer.items[i];
        if(item.kind === 'string' && item.type.match('^text/html')){
            // I got an html element
        }
        if(item.kind === 'string' && item.type.match('^application/json')){
            // Same as before... except the method getAsString
            item.getAsString((json)=>{
                let data = JSON.parse(json);
                console.log('timestams was', data.timestamp)
            })
        }
    }
}

function handleOver(ev){
    //fires continually
    let dropzone = ev.target;
    if (!dropzone.classList.contains('dropzone')) return;
    ev.preventDefault();
    // dropzone.classList.add('over'); // cand do this ins handleEnter
    // console.log('dragover dropzone');
}

// Optional but useful visual stuff...
function handleCursorGrab(ev){
    let obj = ev.target;
    if(!obj.closest('.draggable')) return;
    obj.style.cursor = 'grabbing'; //close the hand
}

function handleEnter(ev){
    //fires once
    let dropzone = ev.target;
    if(!dropzone.classList.contains('dropzone')) return;
    ev.preventDefault();
    dropzone.classList.add('over');
    console.log('dragenter dropzone');
}

function handleLeave(ev){
    let dropzone = ev.target;
    if(!dropzone.classList.contains('dropzone')) return;
    ev.preventDefault();
    dropzone.classList.remove('over');
    console.logt('dragleave dropzone');
}
