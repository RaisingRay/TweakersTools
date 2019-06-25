//using my function
function addRowData(){
  var table=document.getElementsByTagName("table")[0];
  var name=document.getElementById("name").value;
  var last=document.getElementById("last").value;
  document.getElementById("name").value='';
  document.getElementById("last").value='';
  //this is it

addTHead(table,["test1","test2"]);
  //addTR(table,[name,last]);
}

//still in testing so i might not use all var from functions

//this is the fuction to used
//takes table and an array of data to insert it to the table on first row
function addTR(table, arrayOfData){
  //takes the first row of the table
  var row = document.getElementsByTagName("tbody")[0].insertRow(0);
  //looping through the data and creating as many TD and give them the data
  for(var i=0;i<arrayOfData.length;i++){
    row.insertCell(i).innerHTML=arrayOfData[i];
  }
}

//add fills table header with columns
function addTHead(table,arraOfTH){
  var thead=document.getElementsByTagName("thead")[0];
  var tr= (thead.rows[0]==null) ?thead:thead.rows[0];
  for(var i=0;i<arraOfTH.length;i++){
    var th=document.createElement('th');
    th.innerHTML=arraOfTH[i];
    tr.appendChild(th);
  }
}
