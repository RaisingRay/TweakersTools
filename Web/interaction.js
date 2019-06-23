function addTR(){
  var name =document.getElementById('name').value;
  var last =document.getElementById('last').value;
  var table= document.getElementsByTagName("tbody")[0];
  var row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

// Add some text to the new cells:
cell1.innerHTML = name;
cell2.innerHTML = last;
}
