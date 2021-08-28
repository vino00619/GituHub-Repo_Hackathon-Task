var container =  document.createElement('div');
container.setAttribute("class", "container");

var heading =  document.createElement('div');
heading.setAttribute("class", "heading");
heading.innerHTML = "GitHub Repository Search Engine";

var userName = document.createElement('input');
userName.setAttribute("class", "search-user");
userName.setAttribute("type", "text");
userName.setAttribute("placeholder", "Enter GitHub Username");

var btn = document.createElement('button');
btn.innerText= "Search User";
btn.setAttribute("id", "btn");
btn.setAttribute("onclick", "btnFunction()");
// btn.onclick = btnFunction();
// btn.addEventListener("click", btnFunction);

var avatar = document.createElement('div');
avatar.setAttribute("class", "avatar");

var repo = document.createElement('div');
repo.setAttribute("class", "repo");
                                         
async function btnFunction() {
  try{
    // console.log(`Your GitHub User name is ${user}.`);
     
  const username = document.querySelector(".search-user").value
  console.log(`Your GitHub User name is ${username}.`);
  const data = await fetch (`https://api.github.com/users/${username}/repos`);
  const repos = await data.json();
  console.log(repos);
    
    avatar.innerHTML="";
    repo.innerHTML="";
    
    var userrName = document.createElement('h3');
    userrName.setAttribute("class", "userrName")
    userrName.innerHTML = `User Name : ${repos[0].owner.login}`;
    
    var userAvatar = document.createElement('img');
userAvatar.setAttribute("class", "avatar");
userAvatar.src = repos[0].owner.avatar_url;
  
  // repo.innerText = JSON.stringify(repos);
  
   
  
    
  for(i=0;i<repos.length;i++){
    // if(repos[i] < 2){
    //   repo.innerHTML="Invalid Username";
    // } 
    var display =  document.createElement('div');
   
    display.innerHTML=`
    <p><strong>Name of the Project : </strong> ${repos[i].name}</p>
    <p><strong>Forks Count : </strong> ${repos[i].forks_count}</p>
    <p><strong>Star Count : </strong> ${repos[i].stargazers_count}</p>
    <p><strong>url : </strong> <a href="${repos[i].html_url}">${repos[i].html_url}</a></p><hr>`;
    
    
    // console.log("Name of the Project : "+ repos[i].name);
    // console.log("Forks Count : "+ repos[i].forks_count);
    // console.log("Star Count : "+ repos[i].stargazers_count);
    // console.log("url : "+ repos[i].html_url);
    
    avatar.append(userrName, userAvatar)
    repo.append(display)
    container.append(avatar, repo)
    
    
  }
  }catch(err){
    console.log("Invalid Username");
    // container.append(document.body.innerText="Invalid Username");
    repo.innerText="Invalid Username";
  }
  
}

container.append(heading,userName,btn,avatar);
document.body.append(container);