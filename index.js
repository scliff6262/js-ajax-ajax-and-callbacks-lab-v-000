$(document).ready(function (){

});

function searchRepositories(){
  const searchTerms = document.getElementById("#searchTerms").value
  $.get("https://api.github.com/search/repositories?q=" + searchTerms, function(data){
    console.log(data)
  })
}
