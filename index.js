$(document).ready(function (){

});

function searchRepositories(){
  const searchTerms = document.getElementById("searchTerms").value
  $.get("https://api.github.com/search/repositories?q=" + searchTerms).done(function(data){
    /*const src = document.getElementById("repo-template").innerHTML
    const template = Handlebars.compile(src)
    const repoList = template(data.items)
    dontBreak = data.items
    document.getElementById("results").innerHTML = repoList */
    function item(obj){`<li>
      <h3><a href="${html_url}">${name}</a></h3>
      <p>${description}</p>
      <p><a href="${owner.html_url}">${owner.login}</a></p>
      <p><img src="${owner.avatar_url}" alt="User Avatar" height="50" width="50"></p>
    </li>`};
    $("#results").html(data.items.map(tem))
  })
}
