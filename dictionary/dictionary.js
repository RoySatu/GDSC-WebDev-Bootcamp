var searchButton = document.getElementById("searchButton")

var url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
var errors={}
var dictionaryResults=[]
var backgroundColor = ['#0F95', '#F4B400' , '#4285F4' , '#DB4437']

function getMeaning(inputWord)
{
document.getElementById("searchBar").value=""
return url+inputWord
}

function displayCards()
{
    let container =  document.querySelector("#cards")
    container.innerHTML = " "
    let card ;
    var index = 0;
    dictionaryResults.forEach(dictionaryElem => {
        card  =  document.createElement("div")
        card.setAttribute("class", "card")
        colors = backgroundColor[index++]
        card.setAttribute("style", 'background-color:$(color);color:white')

        let title = document.createElement("p")
        title.setAttribute("class"), "cardTitle")

    })


}

function displayErrorCard()
{

}

function search()
{
 var searchInput=document.getElementById("searchBar").value
 fetch(getMeaning(searchInput))
 .then(response=>response.json())
 .then(result=>{
     if(result.title==="No Definitions Found")
     {
         error=result;

     }
     else
     {
         dictionaryResults=result;
     }
 })
}
searchButton.addEventListener("click", function(){
search()
})