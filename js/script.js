let url = 'https://api.github.com/users/sggts04/repos';
fetch(url).then(function(response) {
    if (response.status !== 200) {
        console.log("Error " + response.status);
        return;
    }

    response.json().then(function(repos) {

        let errMsg = document.getElementById("errMsg");
        errMsg.style.display = "none";

        let projects = document.getElementById("proj");
        repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        console.log(repos);
        for(let i=0; i<repos.length;i++){
            var r = repos[i];
            if(r.fork || r.stargazers_count=="0") {
                continue;
            }
            var project = "<div class=\"repo\"><div class=\"repo-name\"><span>" + r.name + "</span></div><p class=\"description\">" + r.description + "</p><br/><p class=\"light\"><i class=\"fa fa-circle\" style=\"color: #3572A5\"></i> " + r.language + "&nbsp; <i class=\"fa fa-star\"></i> " + r.stargazers_count + "&nbsp; <i class=\"fa fa-code-fork\"></i> " + r.forks_count + "</p><br/><div class=\"repo-links\"><a href=\"" + r.html_url + "\"><div class=\"btn btn-outline-success btn-sm\">Github</div></a>";
            if (r.homepage!=null && r.homepage!="") {
                project += "&nbsp;&nbsp;&nbsp;<a href=\"" + r.homepage + "\"><div class=\"btn btn-outline-primary btn-sm\">Website</div></a>";
            }
            project += "</div></div>";
            projects.insertAdjacentHTML("beforeend", project);
        }
    });
  }
).catch(function(err) {
    console.log('Fetch Error: ' + err);
});