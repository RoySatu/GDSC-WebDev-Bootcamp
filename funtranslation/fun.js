var searchButton = document.getElementById("searchButton")

var url = "https://api.funtranslations.com/translate/yoda.json"

let variableText = document.getElementById("myDiv")

function getMeaning(inputWord)
{
document.getElementById("searchBar").value=""
return url+"?text="+inputWord
}




function search()
{
 var searchInput=document.getElementById("searchBar").value
 fetch(getMeaning(searchInput))
 .then(response=>response.json())
 .then(result=>{
    // console.log(result.contents.translated)
     variableText.innerHTML = result.contents.translated 

 })
}
searchButton.addEventListener("click", function(){
    search()
    })