function displayvalue(val){
    document.getElementById('display').value=document.getElementById('display').value +val
}

function clearDisplay(){
    document.getElementById('display').value="";

    
}
function calculate(){
    var userInuput=document.getElementById('display').value;

    var result=eval(userInuput);

    document.getElementById('display').value= result;


}