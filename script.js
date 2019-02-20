var makeList = function()
{
  console.log("it worked");
  var list = document.createElement("ul");
  var li = document.createElement('li');
  li.innerText = "Lion";
  list.appendChild(li);
  console.log(list);
  console.log(li);
}
makeList();
var button = document.getElementById("createList");
console.log(button);
button.onclick = function(){makeList()};
