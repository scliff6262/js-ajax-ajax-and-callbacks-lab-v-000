$(document).ready(function (){

});

function searchRepositories(){
  const searchTerms = document.getElementById("searchTerms").value
  $.get("https://api.github.com/search/repositories?q=" + searchTerms).done(function(data){
    const src = document.getElementById("repo-template").innerHTML
    const template = Handlebars.compile(src)
    const repoList = template(data.items)
    document.getElementById("results").innerHTML += repoList
  })
}
