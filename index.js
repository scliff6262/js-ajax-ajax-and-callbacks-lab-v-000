$(document).ready(function (){

});

function displayError(){
  $("#errors").html("<p>I'm sorry, there's been an error. Please try again.</p>")
}

function searchRepositories(){
  const searchTerms = document.getElementById("searchTerms").value
  $.get("https://api.github.com/search/repositories?q=" + searchTerms)
  .done(function(data){
    $("#results").html(data.items.map(function(obj){
      return `<li>
      <h3><a href="${obj.html_url}">${obj.name}</a></h3>
      <p>${obj.description}</p>
      <p><a href="${obj.owner.html_url}">${obj.owner.login}</a></p>
      <p><img src="${obj.owner.avatar_url}" alt="User Avatar" height="50" width="50"></p>
      <p><a href="#" onclick="showCommits()">Show Commits</a></p>
    </li>`
    }))
  })
  .fail(function(error){
    displayError()
  })
}
