const input = document.getElementById('todo');
const list = document.getElementById('todo-list');
const addButton = document.getElementById('add-btn');

// helper function to add value to local storage
var addToLocalStorageString = (name, value, delimiter) => {

	// Get the existing data
	var existing = localStorage.getItem(name);

	// If no existing data, use the value by itself
	// Otherwise, add the new value to it
	var data = existing ? existing + delimiter + value : value;

	// Save back to localStorage
	localStorage.setItem(name, data);

};

// function to get To Dos
let getInput = () => {
    if (input.value !== "") {
        addToLocalStorageString('list', input.value, "^^^");
    }
    return;
}

// funciton to show To Dos
function addLists(){
    list.innerHTML = `<li class="collection-header center"><h5>To Do</h5></li>`;
    let inputValues = localStorage.getItem('list');
    console.log("localstorage: " + inputValues);

    if(!inputValues){
        return;
    }

    // getInput();
    
    inputValues.split('^^^').forEach((v) => {
        list.innerHTML += `
        <li class="collection-item"><div>${v}<a class="secondary-content"><i id="delete-icon" class="material-icons">delete_forever</i></a></div></li>
        `;
    });
    return;
}

// event listener
addButton.addEventListener('click', () => {
    getInput();
    input.value = "";
    addLists();
});

window.addEventListener('DOMContentLoaded', (e) => {
    addLists();
});