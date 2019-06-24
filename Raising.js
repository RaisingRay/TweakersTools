//using my function
function addRowData(){
  var table=document.getElementsByTagName("table")[0];
  var name=document.getElementById("name").value;
  var last=document.getElementById("last").value;
  document.getElementById("name").value='';
  document.getElementById("last").value='';
  addTR(table,[name,last]);
}

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
