$(document).ready(function (){

});

function searchRepositories(){
  const searchTerms = document.getElementById("searchTerms").value
  $.get("https://api.github.com/search/repositories?q=" + searchTerms, function(data){
    console.log(data)
    const src = document.getElementById("repo-template").innerHTML
    const template = Handlebars.compile(src)
    const repoList = template(data)
    document.getElementById("results").innerHTML += repoList
  })
}
