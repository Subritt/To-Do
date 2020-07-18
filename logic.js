const inputElement = document.getElementById('todo');
const listElement = document.getElementById('todo-list');
const addButtonElement = document.getElementById('add-btn');

 /**
 * const dummyLists [
 *      {id: 1, todo: 'random_task1'},
 *      {id: 2, todo: 'random_task2'},
 *      {id: 2, todo: 'random_task2'}
 * ];
 **/

 const localStorageLists = JSON.parse(
    localStorage.getItem('lists')
 );

 let lists = 
    localStorage.getItem('lists') !== null ? localStorageLists : [];

// Add list
function addList(e) {
    e.preventDefault();

    if (inputElement.value === '') {
        alert('Please add a To Do');
    } else {
        const list = {
            id: generateID(),
            todo: inputElement.value
        };

        lists.push(list);
        
        addListDOM(list);

        updateLocalStorage();

        inputElement.value = '';
    }
}

// Generate random ID
let generateID = () => {
    return Math.floor(Math.random() * 100000000);
}

// Add lists to DOM list
function addListDOM(list) {
    const item = document.createElement('li');
    item.classList.add('collection-item');

    item.innerHTML += `
    <li class="collection-item">
        <div id="todo-div">${list.todo}
            <a onclick="removeList(${list.id})" id="delete-btn" class="secondary-content">
                <i id="delete-icon" class="material-icons">delete_forever</i>
            </a>
        </div>
    </li>
    `;

    listElement.appendChild(item);
}

// Remove list by ID
function removeList(id) {
    lists = lists.filter(list => list.id !== id);

    updateLocalStorage();

    init();
}

// Update local storage lists
function updateLocalStorage() {
    localStorage.setItem('lists', JSON.stringify(lists));
}

// Initialize app
function init() {
    listElement.innerHTML = `<li id="todo-header" class="collection-header center"><h5>To Do</h5></li>`;

    lists.forEach(addListDOM);
}

init();

addButtonElement.addEventListener('click', addList);