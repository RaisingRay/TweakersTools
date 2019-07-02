//using my function

///////////////////////////////////////////////////////////////////tests

function search(inputtext){
var table=document.getElementsByTagName("table")[0];
  searchTable(table,inputtext.value,0);
}






function addRowData(){
  var table=document.getElementsByTagName("table")[0];
  jsonList=
    [
          {"name":"fredj","last":"mahmoud"},
          {"name":"test2","last":"t"},
          {"name":"lqs","last":"sd"},
          {"name":"fredjs","last":"sd"}
    ];
    addTable(table,jsonList);
}





////////////////////////////////////////////////////////tools

function searchTable(table,text,index){

var rows=table.tBodies[0].getElementsByTagName("tr");
for(var i=0;i<rows.length;i++){
datas=rows[i].cells;
var tdValue=datas[index].innerHTML;
if(tdValue.startsWith(text))
  rows[i].style.display="";
else
  rows[i].style.display="none";
  }

}



function addTable(table,jsonlist){
  addTHead(table,Object.keys(jsonList[0]));
  for(var i=0;i<jsonList.length;i++){
    addTR(table, Object.values(jsonList[i]));
  };
}


//this is the fuction used
//takes table and an array of data to insert it to the table on first row
function addTR(table, arrayOfData){
  //takes the first row of the table
  var row =table.tBodies[0].insertRow(0);
  //looping through the data and creating as many TD and give them the data
  for(var i=0;i<arrayOfData.length;i++){
    row.insertCell(i).innerHTML=arrayOfData[i];
  }
}

//add fills table header with columns////
function addTHead(table,arraOfTH){
  var thead=table.tHead;
  var tr= (thead.rows[0]==null) ?thead:thead.rows[0];
  for(var i=0;i<arraOfTH.length;i++){
    var th=document.createElement('th');
    th.innerHTML=arraOfTH[i];
    tr.appendChild(th);
  }
}
