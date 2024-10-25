const inputField = document.querySelector('#input')
const listContainer = document.querySelector('.listContainer')

function addTask(){
    if(inputField.value === ''){
        alert('Bruv , you have to write somn nowww!!')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputField.value = '';
    saveData()
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
},false)

// data storage functions to avoid data loss

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML= localStorage.getItem('data');
}

showTask()