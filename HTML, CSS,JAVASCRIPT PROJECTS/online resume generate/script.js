function Addnewfield(){

    let newnode=document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('Tsfield');
    newnode.setAttribute('placeholder','Enter here')


    let tsob=document.getElementById('ts');
    let tsAddButtonop=document.getElementById('TsAddbutton');
    
    tsob.insertBefore(newnode,tsAddButtonop)

}

function weaddfield(){
    let newnode=document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('wefield');
    newnode.setAttribute('placeholder','Enter here')


    let weob=document.getElementById('we');
    let weAddButtonop=document.getElementById('weAddbutton');
    
    weob.insertBefore(newnode,weAddButtonop)


}

function aqaddfield(){
    let newnode=document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('wefield');
    newnode.setAttribute('placeholder','Enter here')


    let aqob=document.getElementById('aq');
    let aqAddButtonop=document.getElementById('aqAddbutton');
    
    aqob.insertBefore(newnode,aqAddButtonop)

}


function generateCV(){
    let namefield=document.getElementById("namefield").value
    let nameT1=document.getElementById("nameT1")

    nameT1.innerHTML=namefield;

    document.getElementById("nameT2").innerHTML=namefield;



    document.getElementById("EmailT1").innerHTML=document.getElementById("EMIfield").value;

    document.getElementById("contactT1").innerHTML=document.getElementById("contactfield").value;



    document.getElementById("addressT1").innerHTML=document.getElementById("Addressfield").value;
    
    document.getElementById("fbT").innerHTML=document.getElementById("fbfield").value;

    document.getElementById("instaT").innerHTML=document.getElementById("instafield").value;

    document.getElementById("linkT").innerHTML=document.getElementById("Linkfield").value;


    document.getElementById("obT").innerHTML=document.getElementById("objectivefield").value;

    
    
    let tech=document.getElementsByClassName("Tsfield");

    let str="";

    for (let e of tech ){
    
        str= str+ `<li> ${e.value} </li>`;

    }
    document.getElementById("techT").innerHTML=str;



    let Ei=document.getElementsByClassName("wefield");

    let str1="";

    for (let e of Ei ){
        str1+=`<li>${e.value}</li>` ;

    }
    document.getElementById("EIT").innerHTML=str1;

    
    let aq=document.getElementsByClassName("eqfield");

    let str2="";

    for (let e of aq ){
        str2 +=`<li>${e.value}</li>`;

    }
    document.getElementById("AqT").innerHTML=str2;

    

     document.getElementById('cv-form').style.display='none'
     document.getElementById('cv-template').style.display='block'


}

function printCV(){
    window.print();
}

