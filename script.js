

var button = document.getElementById("createList");
console.log(button);

var makeList = function()
{
  var button = document.getElementById("createList").removeAttribute("onclick");
  var content = document.getElementById("content");
  var list = document.createElement("ul");
  var animalList = ["Lion", 'Ostrich', "Zebra","Gazelle"];
  console.log('Content;' + content);
  animalList.forEach(function(d){
    var li = document.createElement('li');
    li.innerText = d;
    content.appendChild(list);
    list.appendChild(li);

  });
}
