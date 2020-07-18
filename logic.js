const input = document.getElementById('todo');
const list = document.getElementById('todo-list');
const addButton = document.getElementById('add-btn');

/**
 * const dummyLists [
 *      {id: 1, todo: 'random_task1'},
 *      {id: 2, todo: 'random_task2'},
 *      {id: 2, todo: 'random_task2'}
 * ];
 */

 const localStorageLists = JSON.parse(
    localStorage.getItem('lists')
 );

 let lists = 
    localStorage.getItem('lists') !== null ? localStorageLists : [];

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

    inputValues.split('^^^').forEach((v) => {
        list.innerHTML += `
        <li class="collection-item">
            <div id="todo-div">${v}
                <a onclick="splicedList();" id="delete-btn" class="secondary-content">
                    <i id="delete-icon" class="material-icons">delete_forever</i>
                </a>
            </div>
        </li>
        `;
    });
    return;
}