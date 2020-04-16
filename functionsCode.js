const toDoItems = ["teach", "learn "];
   // {name: '', completed: false}];

function addNewItem(item){
    toDoItems.push(item);  
}

function deleteItem(item){
    for(i = 0; i <= toDoItems.length; i++){
        if (item == i){
            toDoItems.splice(i,1);
        }

        return toDoItems;
    }
}


function markItem(){

}


function listItem(){

}


addNewItem({name: 'write code', completed:false});

console.log(toDoItems);
console.log(deleteItem(0));