
var global = [] ;
var sum = 0 ;
function getdata() {


    var storedArray = sessionStorage.getItem("clientInfo");
    var ha = JSON.parse(storedArray);

    for (const [key, value] of Object.entries(ha)) {
       
       


        var table = document.getElementById("employeeDetails");
        var tableBody = table.getElementsByTagName("tbody")[0];
        var newRow = tableBody.insertRow(tableBody.length);

        var cell1 = newRow.insertCell(0);
        var cell2 =newRow.insertCell(1);
        var cell3 =newRow.insertCell(2);

        cell1.innerHTML = value.name;
        cell2.innerHTML = value.pfield;
        cell3.innerHTML = value.bud ;

      

       sum = sum + parseInt(value.bud) ; 
        }
        document.getElementById("total").value = sum ;
};


function insertNewrecord(data) {
   
    console.log(data.bud);
    console.log(data.pfield);
    console.log(data.name);

    var table = document.getElementById("employeeDetails");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var newRow = tableBody.insertRow(tableBody.length);
  
    var cell1 = newRow.insertCell(0);
    var cell2 =newRow.insertCell(1);
    var cell3 =newRow.insertCell(2);

    cell1.innerHTML = data.name;
    cell2.innerHTML = data.pfield;
    cell3.innerHTML = data.bud ;
    
  
}


