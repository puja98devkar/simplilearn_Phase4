var client = [];


function onForm() {
  
    var formData = readFormData();
    console.log("Complete reading") ;
  // insertNewrecord(data) ;
    client.push(formData);
    
    console.log(client);
    storeData();

    //    getdata();
}

function storeData() {
    sessionStorage.setItem("clientInfo", JSON.stringify(client));
  //   alert("New Project Registered");
    console.log("Done");

}


function readFormData() {

    var newclient = {};
    
    newclient.name = document.getElementById('name').value;
    newclient.pfield = document.getElementById('pfield').value;
    newclient.bud = document.getElementById('bud').value;

    console.log(newclient);
    return newclient;

}






function reset() {
    document.getElementById("name").value = "";
    document.getElementById("pfield").value = "";
    document.getElementById("bud").value = "";


}




