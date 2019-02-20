

var button = document.getElementById("createList");
console.log(button);

var makeList = function()
{
  var button = document.getElementById("createList").removeAttribute("onclick");
  var content = document.getElementById("content");
  var list = document.createElement("ul");
  list.setAttribute("id", "list");
  var animalList = ["Lion", 'Ostrich', "Zebra","Gazelle"];
  console.log('Content;' + content);
  animalList.forEach(function(d){
    var li = document.createElement('li');
    li.innerText = d;
    content.appendChild(list);
    list.appendChild(li);
  });

  var addForm = document.getElementById("add-form");
  addForm.style.visibility = "visible";
}

var addButton = document.getElementById("add");
var addAnimal = function(){
var list = document.getElementById("list");
console.log(list);
var animalForm = document.getElementById("text-box");
var li = document.createElement('li');
li.innerText = animalForm.value;
list.appendChild(li);
}
