var siteName = document.getElementById('siteName');

var siteURL = document.getElementById('siteURL');

var searchinput = document.getElementById('searchinput')



var bookMarksList = []

if(localStorage.getItem('lista') != null){
  
bookMarksList = JSON.parse(localStorage.getItem('lista'))

displayData()

}



function addBookMarks(){
 
 
  var  bookmarks = {
    Name: siteName.value ,
    url: siteURL.value ,
  }

if( siteName.value == "" && siteURL.value == "" ){
  document.getElementById("test").click()
}

else if(validtionname() == true && validtionURL() == true){
  
  bookMarksList.push( bookmarks )
 
  localStorage.setItem('lista' , JSON.stringify( bookMarksList ))

}

else if(validtionname() == false && validtionURL() == false){

  document.getElementById("test").click()

}


  displayData();    

  cleardata();


}

function cleardata(){

    siteName.value = "";
    siteURL.value = "";
    
    siteName.classList.remove('is-invalid')
    siteName.classList.remove('is-valid')
    
    siteURL.classList.remove('is-valid')
    siteURL.classList.remove('is-invalid')


}


function displayData(){
    var cartona ="";

    var term = searchinput.value

    for ( i=0 ; i < bookMarksList.length ; i++){
   
      if( bookMarksList[i].Name.toLowerCase().includes( term.toLowerCase() )){

        cartona += `
        <tr>
        <td> ${ i } </td>
        <td> ${ bookMarksList[i].Name} </td>
        <td><a href=${bookMarksList[i].url} target="_blank" class="btn btn-warning"><i class="fa-solid fa-eye"></i> Visit </a></td>
        <td><button onclick=" deleteitem(${i} ) " class="btn btn-danger"><i class="fa-solid fa-trash"></i> Delete </button></td>
    </tr>
        `
      }

    }


    document.getElementById('bookMarksTable').innerHTML = cartona

}

function deleteitem(index){

  bookMarksList.splice( index , 1)
  localStorage.setItem('lista' , JSON.stringify( bookMarksList))

  displayData()
  
}



function validtionname(){

var text = siteName.value
var regy = /^[a-zA-Z]{3,}$/

if(  regy.test(  text )){

  
  siteName.classList.add('is-valid')
  siteName.classList.remove('is-invalid')
  return true;


}
else{

       siteName.classList.add ('is-invalid')
       siteName.classList.remove('is-valid')
       return false;

}

}
function validtionURL(){

var text2 = siteURL.value
var regy2 = /^(http[s]?:\/\/)?([^\/\s]+\/)(.*)$/

if(  regy2.test(  text2 )){

  
  siteURL.classList.add('is-valid')
  siteURL.classList.remove('is-invalid')
  return true;


}
else{

       siteURL.classList.add ('is-invalid')
       siteURL.classList.remove('is-valid')

      return false;
}

}