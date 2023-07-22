
// ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕄𝕒𝕣𝕨𝕒𝕟 𝕄𝕒𝕘𝕕𝕪

var siteName = document.getElementById('nameInput');
var siteUrl = document.getElementById('urlInput');
var siteList=[];

if(localStorage.getItem('site') == null){
    var siteList=[];

} 
else{
    var siteList = JSON.parse(localStorage.getItem('site'))
    display();
}

// Show Message in the bottom of the input if the name which user entered valid or not
function validName(){

    if(validateSiteName() == true){
        document.getElementById('validName').innerHTML='<i class="fa-solid fa-circle-check"></i> valid Name' ;
     }
     else{
        document.getElementById('validName').innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Not valid Name' ;
     }
}
// Show Message in the bottom of the input if the url which user entered valid or not
function validUrl(){

    if(validateSiteUrl() == true){
        document.getElementById('validUrl').innerHTML='<i class="fa-solid fa-circle-check"></i> valid Url' ;
     }
     else{
        document.getElementById('validUrl').innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Not valid Url' ;
     }
}

function createSite(){

// Check if the name and url which user entered if valid the name and url will display in the table
    if(validateSiteName() && validateSiteUrl () == true){

        var site ={
            name : siteName.value ,
            url  : siteUrl.value  
        }
        siteList.push(site);
        localStorage.setItem('site' , JSON.stringify(siteList))
        display(siteList);
// Message appears when user save link successfully 
        Swal.fire({
            position: 'center-center',
            type: "success",
            title: 'Your Links has been saved',
            showConfirmButton: false,
            timer: 2000
          });
// To Make Message in The bottom of input disappears when user add link successfully 
          document.getElementById('validName').classList.replace('d-block' , 'd-none') ;
          document.getElementById('validUrl').classList.replace('d-block' , 'd-none') ;


    }else{
// Message appears when user can't save link successfully to tell him that something went wrong      
        Swal.fire({
            type : "error",
            title: 'Something went wrong!',
            text: 'Please Enter A Valid Name Or URL',
          })

// To Make Message in The bottom of input disappears when user can't add link successfully         
          document.getElementById('validName').classList.replace('d-block' , 'd-none') ;
          document.getElementById('validUrl').classList.replace('d-block' , 'd-none') ;
       
    }
// call function that will empty the inputs after click submit 
    reset();

}
// function to display elements in the table
function display(){

    var trs = ``;

    for(var i= 0 ; i<siteList.length;i++){
        trs+=
            `<tr>
        <td>${i+1}</td>
        <td>${siteList[i].name}</td>
        <td><a href="${siteList[i].url}"  target="_blank" class="btn btn-primary "> <i class="fa-solid fa-eye"></i> Visit</a></td>
        <td><button class="btn btn-danger" onclick="deleteRow(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        
        </tr>`;
    }
    document.getElementById('tableBody').innerHTML = trs;
    console.log(siteList);
}
// function to delete row from table
function deleteRow(rowNum){
    siteList.splice(rowNum,1);
    localStorage.setItem('site' , JSON.stringify(siteList))
    display(); 
}
// function to empty the inputs  
function reset(){
    siteName.value='';
    siteUrl.value='';
         
}
// validation of name input
function validateSiteName(){
    var regex1 = /^[A-Z][a-zA-Z0-9]{3,8}$/;
    if(regex1.test(siteName.value) == true){
        return true ; 
    }
    else{
        return false ;
    }
}
function showNameRules(){
    document.getElementById('validName').classList.replace('d-none' , 'd-block') ;

}
function showUrlRules(){
    document.getElementById('validUrl').classList.replace('d-none' , 'd-block') ;

}
// validation of url input
function validateSiteUrl(){
    var regex2 = /^(https:\\www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?\/[a-zA-Z0-9]{2,} | (https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?\/[a-zA-Z0-9]{2,} | (https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?  $/;
    if(regex2.test(siteUrl.value) == true){
        return true ; 
    }
    else{
        return false ;
    }
}
