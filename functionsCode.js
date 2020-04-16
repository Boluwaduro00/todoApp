const toDoItems = [
   // {name: '', completed: false}
];

function addNewItem(item){
    toDoItems.push(item);  
}

function deleteItem(item){
    for(i = 0; i < toDoItems.length; i++){
        if (item == i){
            delete toDoItems[i];
        }
}
function markItem(){

}
function listItem(){

}


addNewItem({name: 'write code', completed:false})

console.log(toDoItems)